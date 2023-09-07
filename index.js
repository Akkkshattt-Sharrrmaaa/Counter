const numdiv = document.querySelector('#count');


let inc = () => {
    let val = numdiv.innerText;
    val = parseInt(val);
    val = val + 1;
    numdiv.innerText = val;
}


let dec = () => {
    let val = numdiv.innerText;
    val = parseInt(val);
    val = val - 1;
    numdiv.innerText = val;
}