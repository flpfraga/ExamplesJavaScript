const cartas = document.querySelectorAll('.card');
const btn = document.getElementsByClassName('reset')[0]
let pts = document.getElementsByClassName('pts')[0]
let cartaVirada = false
let primeira, segunda;
let points = 0
let lockBoard = false

function viraCarta(){
    if (lockBoard) return
    if (this === primeira) return
    lockBoard = true
    setTimeout(()=>{
        lockBoard = false
    }, 1000)
    this.classList.add('flip')
    if (!cartaVirada){
        cartaVirada = true;
        primeira = this;
        return
    }
    cartaVirada = false;
    segunda = this;
    match();


}

cartas.forEach((carta) => {
    carta.addEventListener('click', viraCarta);
    carta.style.order = Math.floor(Math.random()*cartas.length)
})
btn.addEventListener('click', resetGame);

function match(){
    if(primeira.dataset.card === segunda.dataset.card){
        disableCards()
        points+=10
        pts.innerHTML = "Pontuação: " + points
        return
    }
    desvirar()
}

function disableCards(){
    primeira.removeEventListener('click', viraCarta)
    segunda.removeEventListener('click', viraCarta)
}

function desvirar(){
    lockBoard = true
    setTimeout(()=>{
        lockBoard = false
    }, 1000)
    setTimeout(()=>{
        primeira.classList.remove('flip');
        segunda.classList.remove('flip');
    }, 1500)
}

function resetGame(){
    lockBoard = false
    cartaVirada = false
    cartas.forEach((carta) => {
        carta.classList.remove('flip');
    })
    points = 0;
    pts.innerHTML = "Pontuação: " + points
    cartas.forEach((carta) => {
        carta.addEventListener('click', viraCarta);
    })
    
}







