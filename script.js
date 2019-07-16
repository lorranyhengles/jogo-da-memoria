// function aleatorio (min, max){ 
//     return Math.floor(Math.random()*(max - min + 1) )+ min; 
// }
let cartas = document.querySelectorAll("div");
let valorCor=0;
setTimeout(function esconder(){
    for (let carta of cartas){
        carta.style.backgroundColor = "black";
        
    }
}, 1000);

function mostrar(event){
    event.target.style.backgroundColor = null;
    // event.target.classList.toggle("vermelho");
    if(event.target.classList.contains("vermelho")){
        valorCor+=1;
        console.log('AAAAAAAAAAAAA');
    }
}
if (valorCor == 2){
        console.log("BBBBBBBBBBBB");
    
}
for (let carta of cartas) {
    carta.onclick = mostrar;
}
