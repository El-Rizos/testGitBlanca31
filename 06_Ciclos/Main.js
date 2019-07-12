// Existen 2 diferentes tipos de ciclos "for" y "while"

// for(inicio ; final o limite ; secuencia){
//     bloque de codigo
// }




let i = 0
for (i; i <= 100; i = i + 1 ){
    console.log(i)
}

for(let e = 10; e <=50; e = e + 5){
console.log(e)
}




// Hacer ciclo que empiece en 3, llegue a 500 y sea de 9 en 9
// Hacer ciclo que empiece en -100, llegue a 0 y sea de 1 en 1
// Hacer ciclo que empiece en 500, llegue a 2000 y sea de 100 en 100




// 1
for(let a = 3; a <= 500; a = a + 9){
    console.log(a)
}

// 2
for(let b = -100; b <= 0; b = b + 1){
    console.log(b)
}

// 3
for(let c = 500; c <= 2000; c = c + 100){
    console.log(c)
}

// Ciclo hasta el 100 saltando con el numero que el usuario decida
let e = prompt("Indica la secuencia")
let f = Number(e)
for(let d = 0; d <= 100; d = d + f){
    console.log(d)
}




for(let r = 1; r <= 100; r = r + 1){
    if (r % 2 === 0 ){
        console.log(r + " es par")
    }else{
        console.log(r + " no es par")
    }
}


// Si el numero es divisible entre 3: fizz, entre 5: buzz, entre 3 y 5: fizzbuzz

for(let z = 1; z <= 100; z = z + 1){
    if(z % 3 === 0 && z % 5 === 0){
        console.log(z + " FizzBuzz")
    }else if(z % 3 === 0){
        console.log(z + " Fizz")
    }else if(z % 5 === 0){
        console.log(z + " Buzz")
    }else{
        console.log(z)
    }
}


let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(array.length)
for(let j = 0; j < array.length; j++){
    console.log(array[j])
}

// length es la longitud del arreglo
// j++ es como decir "j = j + 1
// Esto es para ue te ponga cada uno de las variables del arreglo en una consola diferente

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for(let mult = 1; mult < num.length; mult++){
    for(let res = 1; res < num.length; res++){
        console.log(mult + " x " + res + " = " + mult*res)
    }
    
}


// Conseguir el factorial
let start = 1
for(let x = 1; x <= 5; x++){
    console.log(start = start * x)
}