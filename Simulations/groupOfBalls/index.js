var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var color = "#0000ff";
var radius = 50;
var numberOfBalls = 10;

var g = 0.1; // acceleration due to gravity
var vyBounce = -.8;
var vy = 0; // initial vertical speed
var balls = [];
window.onload = function(){
    init();
    requestAnimationFrame(onEachStep);
}

function init(){
    for(var i=0; i < numberOfBalls; i++){
        var ball = new Ball(radius, color);

        ball.x = 50;
        ball.y = 75;
        ball.vx = Math.random() *5;
        ball.vy = (Math.random() - .5) * 4;
        ball.draw(context);

        balls.push(ball);

    }

    canvas.addEventListener('mousedown', function () {
        canvas.addEventListener('mousemove',onDrag,false);
        canvas.addEventListener('mouseup',onDrop,false);
    }, false);
}

function onEachStep(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = balls.length - 1; i >= 0; i--) {
        var ball = balls[i];
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
    }



    requestAnimationFrame(onEachStep);
}
