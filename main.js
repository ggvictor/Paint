const color = document.getElementById("input")
let canvas = document.querySelector('canvas')
const button = document.querySelector('button')

let defaultColor ="black"
let canDraw = false
let mouseX = 0
let mouseY = 0

let ctx = canvas.getContext('2d')

color.onchange = () => defaultColor = color.value;

canvas.addEventListener('mousedown', mouseDownEvent)
canvas.addEventListener('mousemove', mouseMoveEvent)
canvas.addEventListener('mouseup', mouseUpEvent)
button.addEventListener('click', clearBoard)

function mouseDownEvent(e){
    canDraw = true
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
}

function mouseMoveEvent (e){
    if(canDraw){
        draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent (){
    canDraw = false;
}

function draw (x,y){
    let pointX = x - canvas.offsetLeft
    let pointY = y - canvas.offsetTop

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
    
}

function clearBoard(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}