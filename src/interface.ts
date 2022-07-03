interface Point {
    x: number;
}

//The interface 'Point' can be modified later by adding some extras properties for instance
// We call it 'Fusion'
interface Point{
    y: number;
}

interface Coordinates {
    x: number
    y: number
}

//Interfacein TS can be implemented exactly like in Java
class Point2D implements Coordinates {
    x = 6
    y = 10
}

function draw(p: Coordinates) {
    console.log("Coordinates are : X= " + p.x + " - Y=" + p.y)
}

draw(new Point2D())
