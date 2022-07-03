"use strict";
class A {
    constructor() {
        this.a = 3; //visibilityby default is 'public'
    }
}
const a_instance = new A();
console.log(a_instance.a);
class B {
    constructor() {
        this.b = 5;
    }
    log() {
        console.log(this.b);
    }
}
const b_instance = new B();
b_instance.log();
class C {
    constructor() {
        this.c = "Hello";
    }
}
class D extends C {
    log() {
        console.log(this.c);
    }
}
const d_instance = new D();
d_instance.log();
class Collection {
    //Specify a visibility to the argument of the constructor creates implicitly 
    //a class property 
    constructor(items) {
        this.items = items;
    }
    first() {
        return this.items[0] || null;
    }
}
const myCollection = new Collection([1, 2, 3, 4]);
const myfirstElt = myCollection.first();
console.log(myfirstElt);
