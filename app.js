let listaNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
function exibirNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

exibirNatela("h1","jogo do numero")
exibirNatela("p","escolha um numero entre 1 e 10")

function verificarChute(){
        let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirNatela("p", "você acertou o numero secreto");
        let mensagemTentativas = `você descobriu o numero secreto com ` +tentativas + " " + palavrasTentativas ;
        exibirNatela("p",mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto) {
            exibirNatela ("p","o numero secreto e menor que "+ chute);
        }else{
            exibirNatela ("p","o numero secreto e maior que "+ chute);
        }
        tentativas++;
        limparCampo();
    }

}

function reiniciarchute(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirNatela("h1","jogo do numero")
    exibirNatela("p","escolha um numero entre 1 e 10")
    document.getElementById("reiniciar").setAttribute("disabled", true )

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt (Math.random() *10 + 1);
   if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else {
    return numeroEscolhido;
   }

}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";

}
