import { useState, useEffect, useRef } from 'react';
// import * as tf from "@tensorflow/tfjs";
import Webcam from 'react-webcam';
import * as blazeface from '@tensorflow-models/blazeface';
import './Detector.css';
// import drawCanvas from "./utils/DrawCanvas";
import predict_blazeface from './utils/Predict';

function Detector() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [fps, setFps] = useState(300);
  const [showProbability, setShowProbability] = useState(false);

  const loadModel = async () => {
    try {
      const model = await blazeface.load();
      console.log('Model loaded');
      setInterval(() => {
        predict(model);
      }, fps);
    } catch (err) {
      console.log(err);
    }
  };

  const predict = async (model: any) => {
    if (webcamRef.current && canvasRef.current && webcamRef.current.video) {
      if (
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4 &&
        canvasRef.current !== null
      ) {
        const video = webcamRef.current.video;
        const video_width = video.videoWidth;
        const video_height = video.videoHeight;

        webcamRef.current.video.width = video_width;
        webcamRef.current.video.height = video_height;

        canvasRef.current.width = video_width;
        canvasRef.current.height = video_height;

        predict_blazeface(model, video, canvasRef, showProbability);
      }
    }
  };

  useEffect(() => {
    loadModel();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            width: 640,
            height: 480,
          }}
        />
      </header>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <div id="checkbox">
        <input type="checkbox" defaultChecked={showProbability} onChange={ () => {
          console.log(showProbability);
          setShowProbability(!showProbability);
        }} />
        <p>Display Probality?</p>
      </div>
      <div id="checkbox">
        <input type="number" onChange={
          (e) => {
            setFps(Number(e.target.value));
            console.log(fps);
          }
        }/>
        {'    '}
        <p>FPS</p>
      </div>
      </div>
    </div>
  );
}

export default Detector;
