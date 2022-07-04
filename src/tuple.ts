//tuple is like an arry with fixed size
// Below we define a type which is an array of size 2.
//First element is a string and 2nd element is a number
type ListItem = [string, number]

const a: ListItem = ['tomate', 3]
const b: ListItem = ['banane', 2]


function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U] {
    return [...a, ...b]
}


const c = merge(a, b)

console.log(c)