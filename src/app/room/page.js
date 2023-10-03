"use client";

import '@livekit/components-styles';
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  useTracks,
  useLocalParticipant,
  useParticipants,
  VideoTrack,
  
} from '@livekit/components-react';
import { RoomAudioRenderer, ControlBar } from "@livekit/components-react";
import { useEffect, useState } from 'react';
import { Track } from 'livekit-client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
  // TODO: get user input for room and name
  const searchParams = useSearchParams();


  const room = searchParams.get('room') || "quickstart-room";
  const name = searchParams.get('name') || "quickstart-user";
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/api/get-participant-token?room=${room}&username=${name}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === "") {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: '100dvh', backgroundColor: 'var(--lk-background)' }}
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <RenderedConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
} 

function RenderedConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: true },
  ); 

  return (
    <div className={'grid grid-cols-4 p-8'}>
      {tracks.map((track) => {

        if (track.participant && track.participant.isCameraEnabled) {
          const a = track.publication.videoTrack.attach();
          
          return (
            <div key={track.sid} className={'text-black max-w-lg rounded-lg overflow-hidden'}>
              <VideoTrack { ...track } />
            </div>
          );
        }
        return (
          <div key={track.sid} className={'text-black max-w-lg rounded-lg overflow-hidden'}>
            <VideoTrack { ...track } />
          </div>
        );
      })}
    </div>
  )
}