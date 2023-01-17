/*
    ===== Código de TypeScript =====
*/

import { Console } from "console"


function sumar(a:number, b:number):number{
    return (a + b)
}

const sumarFlecha = (a, b) => {
    return a + b
}


const resultado = sumar(2, 4)

const otroResultado = sumarFlecha("v","a")

console.log(resultado)

console.log(otroResultado)


function multiplicar(numero:number, otronumero?:number, base:number = 2): number{
    return numero * base
}

const resultadoMultiplicar = multiplicar(10)

// Si un argumento no se provee, ese argumento queda como Undefined
// Utilizar ? lo vuelve opcional, tambien puede hacerse uno default con "=".

console.log(resultadoMultiplicar)



// Objetos como entrada

interface PersonajeLoR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function Curar(personaje: PersonajeLoR, HPCurado: number):void{
    personaje.pv += HPCurado;
}

const nuevoPersonaje: PersonajeLoR = {
    nombre : "Strider",
    pv: 50,
    mostrarHP() {console.log("Puntos de vida:", this.pv)}
}

Curar(nuevoPersonaje, 10)

nuevoPersonaje.mostrarHP();





























