// alert("Hola")
// La alerta no es recomendable porque te detiene el codigo hasta que la quites


let numerico = 10
// Valor numerico

let texto = "Hola!"
// String (se debe introducir dentro de comillas)

let booleano = true
let booleano2 = false
// booleano

let arreglo = []
// arreglo

const perro = "salchicha"
// constante (si intento cambiar una constate me marcara un error)


// Usamos "let" para declarar una variable, existen los valores numericos, de texto (string, a las de texto de les debe incluir comillas), booleanos, arreglos y las consntante (estas no varian)

// Para realizar las operaciones usamos los simbolos: + - * / % 

let num1 = 10
let num2 = 50
num1 + num2
console.log(num1 + num2)
// Como JS nunca aparecera en la pagina, para poder ver los que deseamos, usamos "console.log" y en la pagina le damos inspeccionar y consola para ver lo que este dentro de esta etiqueta. En la consola podemos ver si el codigo esta funcionando

let nombre = "Daniel"
let saludo = "Hola"
console.log(saludo + " " + nombre)
// Concatenacion es la suma de textos

let resultado = (num1 + num2)
console.log(resultado)

let ingresa = prompt("Ingresa nombre")
// "prompt" como una alerta pero se le puede ingresar el texto
console.log(ingresa)
// A la hora de recargar la pagina estos datos se borraran para dar paso a los nuevos




// Challenge: preguntar al usuario su nombre, cumpleaños y correo, mostrarlo en 3 consolas diferentes.
let usuario = prompt("Ingresa nombre")
console.log(usuario)

let cumple = prompt("Ingresa cumpleaños")
console.log(cumple)

let correo = prompt("Ingresa correo pls")
console.log(correo)




// Otro challenge: Preguntar año de nacimiento y que aparezca la edad
let año_actual = 2019
let nacimiento = prompt("Ingrese año de nacimiento")
    Number(nacimiento)
let edad = año_actual - nacimiento
console.log(edad)
// Number te convierte cualquier valor a uno numerico




// Variables de tipo arreglo.   Se usa en vez de definir una por una. En los arreglos existen las posiciones, iniciando del cero. 
let arreglo2 = ["perrito", "tortura", "hipopotamo"]
console.log(arreglo2)
console.log(arreglo2[1])

arreglo2[3] = "gorila"
console.log(arreglo2)
// Esto se usa para sumarle una variable al arreglo, pero tambien si no esta bien el numero, puede sobre escribir un dato existente

arreglo2.push("Mono")
console.log(arreglo2)
// "Arregl.push" se usa para añadirle una varible al arreglo pero hasta el final

arreglo2.pop()
console.log(arreglo2)
// "Arreglo.pop" te elimina la ultima variable




// Challenge: Crear un arreglo de 10 alementos y que en la consola solo se vea el 5 y al 9 en la misma consola
let nombres = ["Rizos0", "Rizos1", "Rizos2", "Rizos3", "Rizos4", "Rizos5", "Rizos6", "Rizos7", "Rizos8", "Rizos9" ]
console.log(nombres)
console.log(nombres[5], nombres[9])

// Restarle uno y añadir 3
nombres.pop()
console.log(nombres)
nombres.push("Rizos10", "Rizos11", "Rizos12")
console.log(nombres)


let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

numeros.splice(0,2)
console.log(numeros)
// "splice" sirve para eliminar variables en el arreglo pero se tiene que definir desde que el lugar del elemento a borrar hasta el limite. ejemplo quiero borrar el numero 3 y 4: numeros.splice(3, 2) indicando que se borre desde el numero 3 y borre 2 espacios




// Variables tipo objeto.   Dentro de estas puede haber variables y arreglos
let objeto = {
    name: "Daniel",
    adress: "La Juarez",
    music: "electrocumbia",
    phone: "5539341249",
    libros: ["baldor", "pokedex"]
}
console.log(objeto)
console.log(objeto.adress)
console.log(objeto.libros[1])
// Diferentes maneras de "llamar" a los datos dentro de un objeto


// Challenge: 
let challenge = {
    name2: "Rizos",
    Adress2: "La Juarez",
    Email: "merobeestecorreo@hotmail.com",
    Phone2: "5539341249",
    Travel: {
        Nacionales: ["Cancun", "Pto. Vallarta", "Cuernavaca", "Sonora", "Monterrey"],
        Internacionales: ["UK", "USA", "Colombia", "Nueva Zelanda"],
    },
    Music: {
        Pop: ["banda uno", "banda dos"],
        rock: ["rock 1", "rock 2", "rock 3"],
        League_of_legends: ["KDA", "Pentakill"]
    },
    Pelis: {
        Terror: ["Zombie", "Vampiros", "Hombre lobo"],
        Comedia: ["Ted", "Mi abuelo es un peligro"],
        Accion: ["Rambo", "Conan"],
        Cienci_ficcion: ["Star wars", "Star treck", "hansel y gretel"]
    },

}

console.log(challenge)
console.log(challenge.Pelis.Comedia[0])
console.log(challenge.Travel.Nacionales[4])
console.log(challenge.Music.League_of_legends[1])

