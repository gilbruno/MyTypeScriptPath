
class Triangle {

    private shape = 'triangle'
    private name: string

    constructor(name: string) {
        this.name = name
    }

    public getPointscount(): number {
        return 3
    }
}

class Square {

    private shape = 'square';
    private name: string

    constructor(name: string) {
        this.name = name
    }
    public getPointscount(): number {
        return 4
    }
}


//We create a type that can be instantiated.
// The instance must from a class that has a constructor with 'name' arg oftype string
// and must contain a 'getPointscount' that returns a number
type IntantiableShape = {
    new (name: string): {
       getPointscount: () => number
    }    
}

function shapeGenerator(shapeType: IntantiableShape, name: string){
    return new shapeType(name)
}


//Call examples 
shapeGenerator(Triangle, 'myTriangle')
shapeGenerator(Square, 'mySquare')
