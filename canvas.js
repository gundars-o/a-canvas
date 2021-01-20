var canvas = document.querySelector( "canvas" );
window.addEventListener( "resize", setCanvasSize );
var c = canvas.getContext( "2d" );
setCanvasSize();
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawOnCanvas()
};
function drawOnCanvas() {
    c.fillStyle = "rgba( 255, 0, 0, 0.5 )";
    c.fillRect( 10, 30, 50, 100 );
    c.fillStyle = "rgba( 0, 0, 255, 0.5 )";
    c.fillRect( 400, 100, 100, 100 );
    c.fillRect( 300, 300, 100, 100 );
    // Lines
    c.beginPath();
    c.moveTo( 9, 29 );
    c.lineTo( 61, 29 );
    c.lineTo( 400, 100 );
    c.lineTo( 300, 300 );
    c.strokeStyle = "#fa34a3";
    c.stroke();
    // Circle
    c.beginPath();
    c.arc( 300,300, 30, 0, Math.PI * 2, false );
    c.strokeStyle = "blue";
    c.stroke();
};
