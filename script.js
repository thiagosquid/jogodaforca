let lista = ['presunto', 'computador', 'carro', 'bicicleta','bola','sapato'];
let palavraSel;
let palavraOculta;
let tamPal;
let espacos = [];
let chances;
let letreiro = document.getElementById('impr');
let inicia = document.getElementById('btInicia');
let letra='';
let letrasEscolhidas = [];
let chancesBox = document.getElementById('chances');
inicia.addEventListener('click', recebePalavra);
let botoes = document.body.querySelectorAll(".word");
let btn = document.getElementsByTagName('button');


// Pra gerar eventListener de todas as letras
for(let x=0; x<botoes.length; x++){
    botoes[x].addEventListener("click", function(){
    letra = this.value;
    btn[x+1].setAttribute('style','background-color: #1a030188;');
        if(letrasEscolhidas.indexOf(letra) == -1){
            if(chances > 0){
            verificaLetra(letra);
            }
        }
   });
}


    //Inicialização do jogo
function recebePalavra(){
    //For para repor as cores das letras clicadas anteriormente
    for(let i of btn){
        i.removeAttribute('style');
    }
    letrasEscolhidas = [];
    let impr = '';
    chances = 5;
    chancesBox.innerHTML = chances;
    palavraSel = Math.floor(Math.random()*lista.length);
    tamPal = lista[palavraSel].length;
    palavraOculta = lista[palavraSel];
    
    for(var i = 0; i < tamPal; i++){
        espacos[i] = '_';
        impr += espacos[i];
    }
    imprimeTexto(impr)
}

    //impressão da palavra no mostrador
function imprimeTexto(pal){
    var upper = pal.toUpperCase();
    letreiro.innerHTML = upper;
    if(palavraOculta == impr){
        alert('Você Ganhou!!!')
    }
}

function verificaLetra(l){
    let cont = 0;
    var imp = '';    
    letrasEscolhidas.push(l);
    console.log(palavraOculta.includes(l)? "Tem" : "Não tem");
    if(palavraOculta.includes(l)){
        for(cont = 0; cont < tamPal; cont++){
            if(l == palavraOculta[cont]){
                espacos[cont] = l;
            }
        }
    }
        
    alteraImpressao();
    if(palavraOculta.indexOf(l) == -1){
    chances -= 1;
    chancesBox.innerHTML = chances;
        if(chances == 0){
            alert('Você perdeu');
            if(confirm('Deseja jogar novamente?\n')){
                recebePalavra();
            }
        }
    }
}

function alteraImpressao(){
    impr = '';
    for(var i = 0; i < tamPal; i++){
        impr += espacos[i];
    }
    imprimeTexto(impr)
}

