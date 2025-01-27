
// calculate and return circumference
function laskeym(a){
    return Math.PI * a;
}

// calculate and return area
function laskepa(a){
    return Math.PI * ((a/2)**2);
}
// calculates circumference and area for a given diameter and displays them
function ympa(halkaisija){
    console.log(halkaisija);

    // calculate circumference
    let ympm = laskeym(halkaisija);
    //console.log(ympm);

    // calculate area
    let pa = laskepa(halkaisija);
    //console.log(pa);

    // create elements for circumference and area, add them to the page
    let a = document.createElement('p');
    a.innerHTML = `Ympärysmitta: ${ympm} cm`;
    let b = document.createElement('p');
    b.innerHTML = `Pinta-ala: ${pa} cm^2`;
    let parent = document.querySelector('#tuloste');
    parent.appendChild(a);
    parent.appendChild(b);
}
