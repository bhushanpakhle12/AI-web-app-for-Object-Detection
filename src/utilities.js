export const drawRect = (detections, ctx) => {
    detections.forEach(prediction=>{
        //Get Prediction Results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //Set Styling
        const color = '#' + Math.floor(Math.random()*16777220).toString(16);
        ctx.strokeSylt = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        //Draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}