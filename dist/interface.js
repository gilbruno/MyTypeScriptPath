"use strict";
//Interfacein TS can be implemented exactly like in Java
class Point2D {
    constructor() {
        this.x = 6;
        this.y = 10;
    }
}
function draw(p) {
    console.log("Coordinates are : X= " + p.x + " - Y=" + p.y);
}
draw(new Point2D());
