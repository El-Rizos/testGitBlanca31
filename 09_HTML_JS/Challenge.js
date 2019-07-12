let piedra1 = document.getElementById("piedra_player1")
let papel1 = document.getElementById("papel_player1")
let tijeras1 = document.getElementById("tijeras_player1")

let piedra2 = document.getElementById("piedra_player2")
let papel2 = document.getElementById("papel_player2")
let tijeras2 = document.getElementById("tijeras_player2")

let resultado = document.getElementById("resultado")
let ganador = document.getElementById("ganador")
let again = document.getElementById("again")

let card = document.getElementById("card")

let mario = document.getElementById("ganaplayer1")
let empate = document.getElementById("empate")
let luigi = document.getElementById("ganaplayer2")

let player1 = 0

const roca_activado1 = () => {
    player1 = 1
}
const papel_activado1 = () => {
    player1 = 2
}
const tijeras_activado1 = () => {
    player1 = 3
}

const roca_activado2 = () => {
    player2 = 1
}
const papel_activado2 = () => {
    player2 = 2
}
const tijeras_activado2 = () => {
    player2 = 3
}

piedra1.addEventListener("click", roca_activado1)
papel1.addEventListener("click", papel_activado1)
tijeras1.addEventListener("click", tijeras_activado1)

piedra2.addEventListener("click", roca_activado2)
papel2.addEventListener("click", papel_activado2)
tijeras2.addEventListener("click", tijeras_activado2)


const result = () => {
    if(player1 === player2){
        resultado.innerHTML = "Es empate :c"
        empate.classList.remove("desaparecer")
    }else if (player1 === 1 && player2 === 2) {
        resultado.innerHTML = "Gana Jugador 2"
        luigi.classList.remove("desaparecer")
    }else if (player1 === 1 && player2 === 3) {
        resultado.innerHTML = "Gana Jugador 1"
        mario.classList.remove("desaparecer")
    }else if (player1 === 2 && player2 === 1) {
        resultado.innerHTML = "Gana Jugador 1"
        mario.classList.remove("desaparecer")
    }else if (player1 === 2 && player2 === 3) {
        resultado.innerHTML = "Gana Jugador 2"
        luigi.classList.remove("desaparecer")
    }else if (player1 === 3 && player2 === 1) {
        resultado.innerHTML = "Gana Jugador 2"
        luigi.classList.remove("desaparecer")
    }else if (player1 === 3 && player2 === 2) {
        resultado.innerHTML = "Gana Jugador 1"
        mario.classList.remove("desaparecer")
    }
    card.classList.remove("desaparecer")
    
}

ganador.addEventListener("click", result)

const recarga = () => {
    location.reload()
}

again.addEventListener("click", recarga)



