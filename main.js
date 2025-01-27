// get user input
/*let halkaisija = prompt("Syötä halkaisija(cm): ");
console.log("Halkaisija:" + halkaisija);
*/

// calculate and return circumference
function laskeym(a){
    return Math.PI * a;
}

// calculate and returnr area
function laskepa(a){
    return Math.PI * ((a/2)**2);
}
// calculates circumference and area for a given value
function ympa(halkaisija){
    console.log(halkaisija);

    let ympm = laskeym(halkaisija);

    console.log(ympm);

    let pa = laskepa(halkaisija);

    console.log(pa);

    const a = document.createElement('p');
    a.setAttribute('innerHTML', ympm);
    const b = document.createElement('p');
    b.setAttribute('innerHTML', pa);

    document.body.appendChild(a);
    document.body.appendChild(b);
}


/*
// calculate circumference
let ympm = Math.PI * halkaisija;

console.log(ympm);

// calculate area
let pa = Math.PI * ((halkaisija/2)**2);

console.log(pa);
*/