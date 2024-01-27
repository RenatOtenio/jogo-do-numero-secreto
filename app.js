let listaNumerosSorteados = []
let numeroLimite = 9
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)   //document.querySelector = para acessar um elemento do html
    campo.innerHTML = texto                   //innerHTML = atribui um valor ao elemento do html
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", " Jogo do Numero Secreto")
    exibirTextoNaTela("p", " Escolha um numero de 1 a 10")
}

function verificarChute() {
    let chute = document.querySelector("input").value // Recebe o valor dentro do input
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!")
        let palavraTentativas = tentativa > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativas}!`
        exibirTextoNaTela("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled") //getElementById - chama um id no html
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", `O numero é número secreto é MENOR!`)
        } else {
            exibirTextoNaTela("p", `O numero é número secreto é MAIOR!`)
        }
        tentativa++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeElementosArray = listaNumerosSorteados.length

    if (quantidadeElementosArray  == numeroLimite) {
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) { //includes - verifica se o elemento já existe na lista
        return gerarNumeroAleatorio
    }else {
        listaNumerosSorteados.push(numeroEscolhido) //push - adicionao elemento ao final da lista
        console.log(listaNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector("input")
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto =gerarNumeroAleatorio()
    limparCampo()
    tentativa = 1
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled",true)
}

exibirMensagemInicial()