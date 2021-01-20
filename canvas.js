var canvas = document.querySelector( "canvas" );
window.addEventListener( "resize", setCanvasSize );
var c = canvas.getContext( "2d" );
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log( canvas.width );
    console.log( canvas.height );
    drawOnCanvas()
};
function drawOnCanvas() {
    c.fillRect( 10, 30, 50, 100 );
    // Lines
    c.beginPath();
    c.moveTo( 9, 29 );
    c.lineTo( 61, 29 );
    c.stroke();
};
setCanvasSize();
