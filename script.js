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

// Pra gerar eventListener de todas as letras
for(let x=0; x<botoes.length; x++){
   botoes[x].addEventListener("click", function(){
    letra = this.value;
        if(letrasEscolhidas.indexOf(letra) == -1){
            if(chances > 0){
            verificaLetra(letra);
            }
        }else{alert('Letra já escolhida, digite outra')
        }
   });
}
    //Inicialização do jogo
function recebePalavra(){
    letrasEscolhidas = [];
    let impr = '';
    chances = 5;
    chancesBox.innerHTML = chances;
    palavraSel = Math.floor(Math.random()*lista.length);
    tamPal = lista[palavraSel].length;
    palavraOculta = lista[palavraSel];
    console.log(`A palavra selecionada é ${palavraOculta}`);
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
        for(cont = 0; cont < tamPal; cont++){
            if(l == palavraOculta[cont]){
                espacos[cont] = l;
            }
        }
    alteraImpressao();
        if(palavraOculta.indexOf(l) == -1){
        chances -= 1;
        chancesBox.innerHTML = chances;
            if(chances == 0){
                alert('Você perdeu');
                if(confirm('Deseja jogar novamente?')){
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

