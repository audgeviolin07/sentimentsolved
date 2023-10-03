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
import { useEffect, useState, useRef, createElement } from 'react';
import { Track } from 'livekit-client';

import { useSearchParams } from 'next/navigation';

import * as faceapi from 'face-api.js';

export default function Page() {
  // TODO: get user input for room and name
  const searchParams = useSearchParams();

  const [modelLoaded, setModelLoaded] = useState(false);

  const room = searchParams.get('room') || "quickstart-room";
  const name = searchParams.get('name') || "quickstart-user";
  const [token, setToken] = useState("");

  useEffect(() => {
    const loadModels = async ( ) => {
      Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      ])
      .then(() => {
        setModelLoaded(true);
      }
      )
    }
    loadModels();
  })

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
      <RenderedConference modelLoaded={modelLoaded} />
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

function RenderedConference({ modelLoaded }) {
  const mainRef = useRef(null);

  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: true },
  ); 

  useEffect(() => {
    if (!modelLoaded) {
      return;
    }
    mainRef.current.innerHTML = '';
    tracks.map((track) => {
      if (track.participant && track.participant.isCameraEnabled) {
        const vidTrack = track.publication.track.attach();
        
        const parent = document.createElement('div');
        parent.className = 'relative';
        parent.appendChild(vidTrack);
        const canvas = faceapi.createCanvas({ width: 640, height: 480 });

        canvas.className = 'absolute top-0 left-0 w-full h-full';

        parent.appendChild(canvas);
        mainRef.current.appendChild(parent);
        

        setInterval(async () => {
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);

          const detections = await faceapi.detectAllFaces(vidTrack).withFaceExpressions();
          faceapi.matchDimensions(vidTrack, { width: 640, height: 480 });

          const dec = faceapi.resizeResults(detections, { width: 640, height: 480 });

          faceapi.draw.drawDetections(canvas, dec);
          faceapi.draw.drawFaceExpressions(canvas, dec);
        }, 400);
      }
    }
    )
  })
  return (
    <div ref={mainRef} className={'grid grid-cols-4 p-8'}>
      {tracks.map((track) => {
       
        return (
          <div key={track.sid} className={'text-black max-w-lg rounded-lg overflow-hidden'}>
            <VideoTrack { ...track } />
          </div>
        );
      })}
    </div>
  )
}