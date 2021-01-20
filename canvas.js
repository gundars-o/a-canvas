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
    var numberOfCircles = 20;
    var r = 30;
    var maxSpeed = 10;
    var circles = [];
    for ( i = 0; i < numberOfCircles; i ++ ) {
        var x = Math.random() * ( innerWidth - 2 * r ) + r;
        var y = Math.random() * ( innerHeight - 2 * r ) + r;
        var dx = 0;
        while ( dx === 0 ) {
            dx = ( Math.random() - 0.5 ) * maxSpeed;
        };
        var dy = 0;
        while ( dy === 0 ) {
            dy = ( Math.random() - 0.5 ) * maxSpeed;
        };
        circles.push( new Circle( x, y, dx, dy, r ) );
        circles[ i ].draw();
    };
    animate();
    function Circle( x, y, dx, dy, r ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.draw = function() {
            c.beginPath();
            c.arc( this.x, this.y, this.r, 0, Math.PI * 2, false );
            c.strokeStyle = "blue";
            c.stroke();
            c.fill();
        };
        this.update = function() {
            if ( this.x >= innerWidth - this.r || this.x <= this.r ) {
                this.dx = - this.dx;
            };
            if ( this.y >= innerHeight - this.r || this.y <= this.r ) {
                this.dy = - this.dy;
            };
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
    };
    function animate() {
        requestAnimationFrame( animate );
        c.clearRect( 0, 0, innerWidth, innerHeight );
        for ( i = 0; i < circles.length; i ++ ) {
            circles[ i ].update();
        };
    };
};
