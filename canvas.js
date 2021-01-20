var canvas = document.querySelector( "canvas" );
var c = canvas.getContext( "2d" );
c.fillRect( 10, 30, 50, 100 );
// Lines
c.beginPath();
c.moveTo( 9, 29 );
c.lineTo( 61, 29 );
c.stroke();
