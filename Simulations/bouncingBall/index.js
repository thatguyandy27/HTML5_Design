var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 20;
var color = "#0000ff";
var g = 0.1; // acceleration due to gravity
var x = 50; // initial horizontal position
var y = 50; // initial vertical position
var vx = 2; // initial horizontal speed
var vyBounce = -.8;
var vy = 0; // initial vertical speed



window.onload = function(){

    requestAnimationFrame(onEachStep);
}

function onEachStep(){

    vy += g;
    x += vx;
    y += vy;
    if (y > canvas.height - radius){
        y = canvas.height - radius;
        vy *= vyBounce;
    }

    if (x > canvas.width + radius){
        x = -radius;
    }

    drawBall();
    requestAnimationFrame(onEachStep);
}


function drawBall() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height);
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};