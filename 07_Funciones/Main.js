// Funciones
function suma (){
    console.log(5 + 5)
}
suma()
// La funcion no aparecera en la consola, se le tiene que "llamar", y se le llama con "suma()". Alert y prompt son tambien funciones

function suma (a, b){
    console.log(a + b)
}
suma(5, 6)
suma(6, 6)
suma(10, 10)


function resta (a, b){
    return a - b
}
console.log(resta(10,4))
console.log(resta(resta(50,10),10))

// Funcion que me diga el aarea de un cuadrado
function area (a, b){
    return a * b
}
console.log(area(10,10))




const areaC = (a) =>{
    return a * a
}
console.log(areaC(4))
// La flechita "=>" significa "arrow function", osea una funcion, al diferencia es que te ahorra codigo


// Área de un triangulo
const triang = () => {
    let b = prompt("Ingresa base")
    let h = prompt("Ingresa altura")
    return (b*h)/2
}
console.log(triang())
