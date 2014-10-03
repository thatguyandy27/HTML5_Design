function Vector2D(x, y){
    this.x = x;
    this.y = y; 
}

Vector2D.prototype ={
    lengthSquared: function lengthSquared(){
        return this.x* this.x + thisorm.y *this.y;
    },
    length: function length(){
        return Math.sqrt(this.lengthSquared());
    },
    clone: function clone(){
        return new Vector2D(this.x, this.y);
    },
    negate: function negate(){
        this.x = -this.x;
        this.y = -this.y;
    },
    normalize: function normalize(){
        var length = this.length();
        if (length > 0){
            this.x = this.x / length;
            this.y = this.y / length;
        }

        return length;
    },
    add: function add(vec){
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    },
    incrementBy: function incrementBy(vec){
        this.x += vec.x;
        this.y += vec.y;
    },
    subtract: function subtract(vec){
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    },
    decrementBy: function decrementBy(vec){
        this.x -= vec.x;
        this.y -= vec.y;
    },
    multiply: function multiply(num){
        return new Vector2D(this.x * num, this.y * num);
    },
    addScaled: function addScaled(vec, num){
        return this.add(vec.multiply(num));
    },
    scaleBy: function scaleBy(num){
        this.x *= num;
        this.y *= num;
    },
    dotProduct: function dotProduct(vec){
        return this.x*vec.x + this.y * vec.y;
    }

};



Vector2D.distance = function distance (vector1, vector2) {
    return vector1.subtract(vector2).length();
};

Vector2D.angleBetween = function angleBetween(vector1, vector2){
    return Math.acos(vector1.dotProduct(vector2)/ 
        (vector1.length()*vector2.length()));
}