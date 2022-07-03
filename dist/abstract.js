"use strict";
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class Rectangle extends Geometry {
    constructor() {
        super(...arguments);
        this.x = 2;
        this.y = 5;
    }
    surface() {
        return (this.x * this.y);
    }
}
