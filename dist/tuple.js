"use strict";
const a = ['tomate', 3];
const b = ['banane', 2];
function merge(a, b) {
    return [...a, ...b];
}
const c = merge(a, b);
console.log(c);
