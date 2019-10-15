// function Surrogate() { }
// Surrogate.prototype = SuperClass.prototype;
// SubClass.prototype = new Surrogate();
// SubClass.prototype.constructor = SubClass;




//pre-ES5
Function.prototype.inherits = function(SuperClass) {
    function Surrogate() { }
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

//refactor ES5
Function.prototype.inherits = function (SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
}


function MovingObject() { 
    constructor(name, speed, direction) {
        this.name = name;
    }
}


function Ship(name, speed) {
    this.speed = speed;
}

Ship.inherits(MovingObject);

Ship.prototype.radio() {
    console.log("Roger that");
}

function Asteroid(name, direction) { 
    this.direction = direction;
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.() {
    console.log("");
}