const container = document.querySelector('.container');

let greetText = document.createElement('div')
greetText.innerHTML = "<div class='temp-text'><h1 class='responsive'>Hi</h1><h3 class='responsive'> to start, please click your mouse here and then pick the color mode above.</h3></div>"
container.appendChild(greetText)
greetText.addEventListener("click", () => {
    clean()
    sketch();
})

function sketch(number = 16){
    for(let i = 0; i < (number ** 2); i++){
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

function randomRGB(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

let blackPickBtn = document.querySelector('.black');
blackPickBtn.addEventListener('click', () => {
    let sqr = document.querySelectorAll('.square');
    sqr.forEach( (div) => {
        let color2 = 255;
        div.addEventListener('mouseenter', () => {
            color2 = color2 - 255 / 10;
            div.style.backgroundColor = `rgb(${color2},${color2},${color2}`;
        });
    } );
});

let rainbowPickBtn = document.querySelector('.rainbow');
rainbowPickBtn.addEventListener('click', () => {
    let sqr = document.querySelectorAll('.square');
    sqr.forEach( (div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = randomRGB();
        });
    } );
});

function clean() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener( 'click', () => {
    clean()
    let amount = prompt('How many grid do you want?\n 1 - 100');
    if(amount > 100 || amount <= 0){
        alert('Grid cant be more than 100 or less than 1 bruh');
        sketch();
    }else{
        sketch(amount);
    }
});