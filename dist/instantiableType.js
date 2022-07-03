"use strict";
class Triangle {
    constructor(name) {
        this.shape = 'triangle';
        this.name = name;
    }
    getPointscount() {
        return 3;
    }
}
class Square {
    constructor(name) {
        this.shape = 'square';
        this.name = name;
    }
    getPointscount() {
        return 4;
    }
}
function shapeGenerator(shapeType, name) {
    return new shapeType(name);
}
//Call examples 
shapeGenerator(Triangle, 'myTriangle');
shapeGenerator(Square, 'mySquare');
