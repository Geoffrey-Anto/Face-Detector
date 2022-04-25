import drawCanvas from "./DrawCanvas";

const predict_blazeface = async (
  model: any,
  video: HTMLVideoElement,
  canvasRef: React.RefObject<HTMLCanvasElement>,
  displayConfidence: boolean ,
) => {
    if(canvasRef.current){
        const obj = await model.estimateFaces(video);
        const ctx = canvasRef.current.getContext("2d");
      
        if (ctx) {
          drawCanvas(ctx, obj, displayConfidence);
        }
    }
};

export default predict_blazeface;
