var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ball = new Ball(50, "#0000ff");

var g = 0.1; // acceleration due to gravity
ball.vx = 2; // initial horizontal speed
var vyBounce = -.8;
var vy = 0; // initial vertical speed

window.onload = function(){
    requestAnimationFrame(onEachStep);
}

function onEachStep(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.vy += g;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y > canvas.height - ball.radius){
        ball.y = canvas.height - ball.radius;
        ball.vy *= vyBounce;
    }

    if (ball.x > canvas.width + ball.radius){
        ball.x = -ball.radius;
    }

    ball.draw(context);
    requestAnimationFrame(onEachStep);
}
