const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const btncolor = document.querySelector('#btncolor');

function setColor() {
    const digitos = '0123456789ABCDEF';
    let colorRGB = '#';
    for(let i =0;i<6; i++){
        const indice = Math.floor(Math.random() * 16);
        colorRGB += digitos.charAt(indice);

    } 

    h2.innerHTML = colorRGB;
    h2.style.color = colorRGB;
    body.style.background = colorRGB;
}

setColor();
btncolor.addEventListener('click', setColor);
