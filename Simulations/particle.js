function Particle(mass,charge){
    if (mass == null) mass = 1;
    if (charge == null) charge = 1;

    this.mass = mass;
    this.charge = charge;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
}

Particle.prototype = {
    get pos2D(){
        return new Vector2D(this.x, this.y);
    },
    set pos2D(pos){
        this.x = pos.x;
        this.y = pos.y;
    },
    get velo2D(){
        return new Vector2D(this.vx, this.vy);
    },
    set velo2D(velocity){
        this.vx = velocity.x;
        this.vy = velocity.y;
    }
};