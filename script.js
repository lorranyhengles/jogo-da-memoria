const carta = document.querySelector("#carta");
const imagens = ['cat.png', 'dog.png', 'frog.png', 'giraffe.png', 'lion.png', 'pig.png'];
let criarCartas = '';

imagens.forEach(img => {
    criarCartas +=
        `<div class="memoria" data-card="${img}">
        <img class="frente" src="img/${img}">
        <img class="verso" src="img/verso.png">
    </div>`
});

carta.innerHTML = criarCartas + criarCartas;

const cartas = document.querySelectorAll(".memoria");
let primeriaCarta, segundaCarta;
let tracarCarta = false;
let isMatch;

(function aleatorio() {
    cartas.forEach(carta => {
        let rand = Math.floor(Math.random() * 12);
        carta.style.order = rand;
    });
})();

setTimeout(function virarCartas() {
    for (carta of cartas) {
        virarCarta(carta);
    }
}, 3000);


function virarCarta() {
    if (tracarCarta) {
        return false;
    }
    this.classList.add('flip');

    if (!primeriaCarta) {
        primeriaCarta = this;

        return false;
    }
    segundaCarta = this;
    verificarCarta();
}

function verificarCarta() {
    if (primeriaCarta.dataset.card === segundaCarta.dataset.card) {
        isMatch = true;
    } else {
        isMatch = false;
    }

    if (isMatch == false) {
        desabilitaCarta();
    } else {
        limparCartas(isMatch);
    }
}

function desabilitaCarta() {
    tracarCarta = true;
    setTimeout(() => {
        primeriaCarta.classList.remove("flip");
        segundaCarta.classList.remove("flip");
        limparCartas();
    }, 1000)

}

function limparCartas(isMatch = false) {
    if (isMatch = true) {
        primeriaCarta.removeEventListener('click', verificarCarta);
        segundaCarta.removeEventListener('click', verificarCarta);
    }
    primeriaCarta = null;
    segundaCarta = null
    tracarCarta = false;
}
cartas.forEach(card => card.addEventListener("click", virarCarta));