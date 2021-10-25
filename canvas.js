let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


let pencilColor=document.querySelectorAll(".pencil-color");
let pencilWidthElem=document.querySelector(".pencil-width");
let eraserWidthElem=document.querySelector(".eraser-width");


let penColor="red";
let eraserColor="white";
let penWidth=pencilWidthElem.value;
let eraserWidth=eraserWidthElem.value;


let mouseDown=false;
// API
let tool=canvas.getContext("2d");

tool.strokeStyle=penColor;
tool.lineWidth=penWidth;
// tool.beginPath(); // new Graphic (path) (line)
// tool.moveTo(10,10); // start point
// tool.lineTo(100,150); //end point
// tool.stroke(); // fill color (fill graphic)

// // tool.beginPath();
// // tool.moveTo(10,10);
// // tool.lineTo(200,200);
// // tool.stroke();

// mousedown -> start new path

// mouse move -> path fill(graphics)

canvas.addEventListener("mousedown",(e)=>{
    mouseDown=true;
   beginPath({
       x:e.clientX,
       y:e.clientY
   })
})

canvas.addEventListener("mousemove",(e)=>{
    if(mouseDown){
        drawStroke({
            x:e.clientX,
            y:e.clientY
        })
    }
})

canvas.addEventListener("mouseup",(e)=>{
    mouseDown=false;
})

function beginPath(strokeObj){
    tool.beginPath();
    tool.moveTo(strokeObj.x,strokeObj.y);
}


function drawStroke(strokeObj){
    tool.lineTo(strokeObj.x,strokeObj.y);
    tool.stroke();
}

pencilColor.forEach((colorElem)=>{
    colorElem.addEventListener("click",(e)=>{
        let color=colorElem.classList[0];
        penColor=color;
        tool.strokeStyle=penColor;
    })
})

pencilWidthElem.addEventListener("change",(e)=>{
    penWidth=pencilWidthElem.value;
    tool.lineWidth=penWidth;
})

eraserWidthElem.addEventListener("change",(e)=>{
    eraserWidth=eraserWidthElem.value;
    tool.lineWidth=eraserWidth;
})

eraser.addEventListener("click",(e)=>{
    if(eraserFlag){
        tool.strokeStyle=eraserColor;
        tool.lineWidth=eraserWidth;
    }else{
        tool.strokeStyle=penColor;
        tool.linewidth=penWidth;
    }
})