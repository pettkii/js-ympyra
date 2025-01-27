// get user input
let halkaisija = prompt("Syötä halkaisija(cm): ");
console.log("Halkaisija:" + halkaisija);

// calculate circumference
let ympm = Math.PI * halkaisija;

console.log(ympm);

// calculate area
let pa = Math.PI * ((halkaisija/2)**2);

console.log(pa);