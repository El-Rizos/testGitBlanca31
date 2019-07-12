// if(*condicion*){
    // bloque de codigo por si se cumple la condicion
// }else{
    // bloque de codigo en caso de que no se cumpla la condicion
// }

// if(condicion){
//     console.log(":D")
// }else{
//     console.log(":c")
// }

//  > < ===

if("10" === 10){
    console.log("Son identicos")
}else{
    console.log("Algo anda mal :c")
}

// Challenge: preguntar si el usuario es mayor de edad, si lo es entra a bar, sino, llama a sus padres

let edad = prompt("Inserte edad")
if(edad >= 18){
    console.log("Puede pasar")
}else{
    console.log("Saquese alv")
}

let age = prompt("Ingresa edad")
if(age < 16){
    console.log("No puedes sacar tu licencia")
}else if(age === 16 || edad === 17 ){
    console.log("Puedes sacar permiso para conducir")
}else{
    console.log("Puedes conducir")
}
// para decir y, usamos &&, para decir o, usamos ||

// Si mi numero es par: Escribir en la consola *numero* es par, si es impar: *numero* es impar
// modulo: %, el residuo de una division de numeros, para este caso "si el residuo de dividir num entre 2 da cero, es par, sino, no es par"
let num = prompt("Ingrese un numero")
if (num % 2 === 0 ){
    console.log(num + " es par")
}else{
    console.log(num + " no es par")
}


// Jugar piedra papel o tijera
let player1 = prompt("Piedra, papel o tijera?")
let player2 = prompt("Piedra, papel o tijera?")
let win1 = "Gana jugador 1"
let win2 = "Gana jugador 2"
if(player1 === player2){
    console.log("Empate xd")
}else if(player1 === "piedra" && player2 ==="papel"){
    console.log(win2)
}else if(player1 === "piedra" && player2 === "tijera"){
    console.log(win1)
}else if(player1 === "papel" && player2 ==="piedra"){
    console.log(win1)
}else if(player1 === "papel" && player2 === "tijera"){
    console.log(win2)
}else if(player1 === "tijera" && player2 ==="piedra"){
    console.log(win2)
}else if(player1 === "tijera" && player2 === "papel"){
    console.log(win1)
}else{
    console.log("Reingrese datos por favor")
}





