import { NormalizedFace } from "./../types/types.d";

const drawCanvas = (
  ctx: CanvasRenderingContext2D,
  prediction: NormalizedFace[],
  displayConfidence: boolean
) => {
  for (let i = 0; i < prediction.length; i++) {
    const probability = prediction[i].probability;
    const topleft = prediction[i].topLeft;
    const bottomright = prediction[i].bottomRight;
    const width = bottomright[0] - topleft[0];
    const height = bottomright[1] - topleft[1];
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.lineWidth = 3;
    // console.log(prediction[i].landmarks);
    prediction[i].landmarks?.forEach(([x, y]) => {
      // mark point x and y on ctx
      ctx.fillRect(x, y, 3, 3);
    })
    if(displayConfidence){
      ctx.fillText(String(probability).substring(0, 3), topleft[0], topleft[1]);
    }
    ctx.rect(topleft[0], topleft[1], width, height);
    ctx.stroke();
  }
};

export default drawCanvas;
