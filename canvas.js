var canvas = document.querySelector( "canvas" );
window.addEventListener( "resize", setCanvasSize );
var c = canvas.getContext( "2d" );
setCanvasSize();
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawOnCanvas();
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
    for ( i = 0; i < 10; i++ ) {
        drawCircle();
    };
    function drawCircle() {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        c.beginPath();
        c.arc( x, y, 30, 0, Math.PI * 2, false );
        c.strokeStyle = "blue";
        c.stroke();
    };
    // Move Circle
    var x = 200;
    var y = 200;
    var dx = 5 ;
    var dy = 5 ;
    var r = 30;
    function animate() {
        requestAnimationFrame( animate );
        c.clearRect( 0, 0, innerWidth, innerHeight );
        c.beginPath();
        c.arc( x, y, r, 0, Math.PI * 2, false );
        c.strokeStyle = "blue";
        c.stroke();
        if ( x >= innerWidth - r || x <= r ) {
            dx = - dx;
        };
        if ( y >= innerHeight - r || y <= r ) {
            dy = - dy;
        };
        x += dx;
        y += dy;
    };
    animate();
};
