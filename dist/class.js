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
