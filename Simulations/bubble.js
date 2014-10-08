function Bubble(radius, color, mass, charge, gradient){
    if (radius == null) radius = 20;
    if (color == null) color = "#0000ff";
    if (mass == null) mass = 1;
    if (charge == null) charge = 0;
    if (gradient == null) gradient = false;

    this.color = color;
    this.radius = radius;
    this.mass = mass;
    this.charge = charge;
    this.gradient = gradient;

    this.x = 0;
    this.y = 0;
    this.vx =0;
    this.vy = 0;
    this.state = Bubble.States.Active;
    this.popCount = 0;
    this.popLines = 10;
    this.popLineLength = 10;
}

Bubble.States = {
    Active : 0,
    Popping: 1,
    Inactive: 2
};
Bubble.PopDuration = 50;


Bubble.prototype = Object.create(Particle.prototype);
Bubble.prototype.constructor = Bubble;

Bubble.prototype.draw = function draw (context) {
    if (this.state === Bubble.States.Inactive){
        return;
    }

    if (this.state === Bubble.States.Active){

        if (this.gradient){
            grad = context.createRadialGradient(this.x, this.y, 
                0, this.x, this.y, this.radius);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(1, this.color);
            context.fillStyle = grad;
        }
        else{
            context.fillStyle = this.color;
        }

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    }

    if (this.state === Bubble.States.Popping){
        //angles
        var angleInDeg = 360 / this.popLines;
        var angleInRad = angleInDeg * Math.PI / 180;
        var currentAngle = 0;
 
        context.strokeStyle = this.color;

        for(var line = 0 ; line < this.popLines; line++){
            var cosX = Math.cos(currentAngle);
            var sinY = Math.sin(currentAngle);
            var startX = this.x + this.popCount * cosX;
            var startY = this.y + this.popCount * sinY;
            var endX = this.x + (this.popCount +  this.popLineLength) * cosX;
            var endY = this.y + (this.popCount + this.popLineLength) * sinY;

            context.beginPath();
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);

            context.stroke();
            currentAngle += angleInRad;
        }


        this.popCount += 1;

        if (this.popCount >= Bubble.PopDuration){
            this.state = Bubble.States.Inactive;
        }
    }

};

Bubble.prototype.isPointOnBubble = function isPointOnBubble(point){
    var diffX = this.x-point.x;
    var diffY = this.y-point.y;
    var distanceToPoint = Math.sqrt(diffX* diffX + diffY * diffY);
    return distanceToPoint <= this.radius;
}


Bubble.prototype.onclick = function onclick(draw){
    if (this.state == Bubble.States.Active){
        this.state = Bubble.States.Popping;
    }
}