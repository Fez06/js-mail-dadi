'use script';

const btn = document.querySelector('.btn');
let valore1 = '';
let valore2 = '';

btn.addEventListener('click', function(){
    valore1 = Math.floor((Math.random() * 6) + 1);
    console.log('valore1');

    valore2 = Math.floor((Math.random() * 6) + 1);
    console.log('valore1');

    if (valore1 > valore2) {
        alert('hai vinto');
    } else if (valore1 < valore2) {
        alert('hai perso');
    } else { 
        alert('pareggio');
    }
})