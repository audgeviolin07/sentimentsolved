'use client';

import { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { io } from "socket.io-client";


const socket = io('http://localhost:8000')

//const model = handTrack.load().;
export const WebcamComponent = () => {
  const videoConstraints = {
    width: 1920,
    height: 1080,

    facingMode: 'user',
  }
  const webcamRef = useRef(null)
  const predRef = useRef([])

  const sendImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    socket.emit("send-frame", {
      image: imageSrc,
      predictions: predRef.current,
    });
  };

  const predict = () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    const image = new Image();
    image.src = imageSrc;
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    image.onload = () => {
      model.detect(image).then((predictions) => {
        // Remove the prediction where class == 5
        predictions = predictions.filter((prediction) => prediction.class != 5);
        // Truncate it to 1 prediction
        predictions = predictions.slice(0, 3);
        predRef.current = predictions;

        const emptyImage = new Image();
        emptyImage.width = image.width;
        emptyImage.height = image.height;
        model.renderPredictions(predictions, canvas, context, emptyImage);
      });
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      predict();
    }, 1000 / 40);
    const interval2 = setInterval(() => {
      sendImage();
    }, 1000 / 10);
    socket.on("response", (data) => {
      if (data.result === currentGoal) {
        //setScore(score + 1);
        //setCurrentGoal(letters[Math.floor(Math.random() * letters.length)]);
      } else {
        //setResponseObject(data);
      }
    });
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [sendImage]);



  return (
    <div className="font-lexend-deca font-light">
      {1 != 0 ? (
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-[100px]">
          <div className="flex flex-col items-center w-full">
            <div className="text-[72px] font-bold">{2}</div>
            <div className="flex justify-between px-[2px] w-full">
              <div>Score: {2}</div>
            </div>
            <div className="flex justify-between px-[2px] w-full">
              <div>Predicted Box: {1}</div>
              <div>Accuracy: {1}</div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg overflow-hidden mt-[12px]">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              mirrored={true}
              className=""
            />
            <canvas id="canvas" className="mt-[-339px] z-10"></canvas>
            {/* <button
              className="self-center bg-[#fcd9fc] hover:bg-[#db8fdd] border border-black rounded-lg px-8 py-4 mt-8"
              onClick={() => sendImage()}
            >
              send to backend
            </button> */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[48px] font-semibold">Score: {2}</div>
          <button
            onClick={() => {
              setGameStart(true);
            }}
            className="self-center sm:self-start bg-[#fcd9fc] hover:bg-[#db8fdd] border border-black rounded-lg px-8 py-4 mt-8"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

