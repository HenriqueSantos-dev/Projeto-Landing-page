var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samanta = window.document.getElementById("samanta")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"

    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"

    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}