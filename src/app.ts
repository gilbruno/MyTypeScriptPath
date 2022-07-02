const compteur = document.querySelector('#compteur')

let i = 0

const increment = (e: Event) => {
    i++

    const span = compteur?.querySelector('span')

    if (span) {
        span.innerText = i.toString()
    }
    

}

compteur?.addEventListener('click', increment)


//Example of Type Narrowing
function printId(id:string | number) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase())
    }
    else {
        console.log(id.toString())
    }
}
