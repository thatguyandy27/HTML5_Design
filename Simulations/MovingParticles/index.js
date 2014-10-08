var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var balls = [],
    numBalls = 50,
    t0, t;

window.onload = init;


function init(){
    for(var i =0; i < numBalls; i++){
        var radius = (Math.random() + .5)* 20;
        var color = 'hsl(' + Math.random() * 180 + ',100%, 50%)';
        var ball = new Ball(radius, color, 1, 0, true);
        ball.pos2D = new Vector2D(canvas.width/2, canvas.height/2);
        ball.velo2D = new Vector2D( (Math.random() - .5)*20, 
            (Math.random() - .5) *20 );
        ball.draw(context);
        balls.push(ball);
    }
    t0 = new Date().getTime();
    t = 0;

    requestAnimationFrame(move);
}


function move(){
    context.clearRect(0,0,canvas.width, canvas.height);
    for(var i =0; i < balls.length; i++){
        var ball = balls[i];
        ball.pos2D = ball.pos2D.addScaled(ball.velo2D, 1);
        if(ball.pos2D.x > canvas.width + ball.radius){
            ball.x = 0 - ball.radius;
        }
        if(ball.pos2D.x < - ball.radius){
            ball.x = canvas.width + ball.radius;
        }
        if(ball.pos2D.y > canvas.height + ball.radius){
            ball.y = 0 - ball.radius;
        }
        if(ball.pos2D.y < - ball.radius){
            ball.y = canvas.height + ball.radius;
        }


        ball.draw(context);
    }

    requestAnimationFrame(move);
}