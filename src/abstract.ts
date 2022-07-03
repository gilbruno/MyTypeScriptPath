abstract class Geometry {
    x = 0
    y = 0
    
    abstract surface(): number 
}

class Rectangle extends Geometry {

    x = 2
    y = 5

    surface(): number {
        return (this.x * this.y)
    }
}