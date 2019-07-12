let etiqueta = document.getElementById("etiqueta")
let texto = document.getElementById("texto")
let input = document.getElementById("input")
let button = document.getElementById("button")
let new_button = document.getElementById("mostrar")
let p = document.getElementById("p")


console.log(etiqueta)
console.log(texto)
// Tomar algo por ID, al decirle document nos referimos al archivo HTML


// etiqueta.innerHTML = "Es un nuevo saludo"
// texto.innerHTML = "Cambiamos el texto xd"
// ".innerHTML" te cambia lo que haya en la etiqueta, ya que la declaramos como variable

const cambiar = () =>{
    etiqueta.innerHTML = "Es un nuevo saludo"
    texto.innerHTML = "Cambiamos el texto xd"
}
// console.log(cambiar())

button.addEventListener("click", cambiar)
// Que cuando se ejecute y solo cuando se ejecute
// Quiere decir que cuando le demos click se ejecute la funcion

// Challenge #1
let inserte = prompt("Inserte contraseña")
const nose = () =>{
    if(inserte === "gatito13"){
        return "Bienvenido"
    }else{
        return "Intente de nuevo"
    }    
    
}
console.log(nose())

// Aqui al ingresar algo en el input y darle click, lo que se escribio pasara al parrafo (p)
const mostrarInput = () => {
    let text = input.value
        p.innerHTML = text
}
new_button.addEventListener("click", mostrarInput)

// Iniciamos Challenge #2, poner 3 inputs y al darle click que aparezcan los datos en una tarjeta de bootstrap
let input01 = document.getElementById("input01")
let input02 = document.getElementById("input02")
let input03 = document.getElementById("input03")
let botonchallenge = document.getElementById("boton_challenge")

let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let piña = document.getElementById("piña")

let card = document.getElementById("card")
// card

const challengeuwu = () => {
    let text01 = input01.value
    let text02 = input02.value
    let text03 = input03.value

    let upper = text03.toUpperCase()

    titulo.innerHTML = text01
    subtitulo.innerHTML = text02
    // piña.innerHTML = text03

    if(upper === "SI"){
        piña.innerHTML = "c:"
    }else if(upper === "NO"){
        piña.innerHTML = ":c"
    }else{
        piña.innerHTML = "Intente de nuevo"
    }

    card.classList.remove("desaparecer")
    // Con esto remuevo la clase que hace desaparecer a mi card. Si en vex de remove, escribimos "add"
}
botonchallenge.addEventListener("click", challengeuwu)
// variable.toUpperCase() y .toLowerCase() te cambian los valores que se hayan introducido a mayusculas y minusculas respectivamente





