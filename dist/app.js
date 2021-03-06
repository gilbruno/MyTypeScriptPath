"use strict";
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
//Example of Type Narrowing
function printId(id) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toString());
    }
}
