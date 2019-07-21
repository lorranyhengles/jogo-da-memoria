const cartas = document.querySelectorAll('.carta');
let cartaUm, cartaDois;

function virarCarta() {
  this.classList.toggle('virar');
  if (!cartaUm){
    cartaUm = this;

    return false;
  }
  cartaDois = this;
    
  }

(function aleatorio (){
  cartas.forEach(carta =>{
    let rand = Math.floor(Math.random() * 12);
    carta.style.order = rand;
  });
  })();




cartas.forEach(carta => carta.addEventListener('click', virarCarta));