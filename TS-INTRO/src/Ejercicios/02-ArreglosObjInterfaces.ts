/*
    ===== Código de TypeScript =====
*/

// Array de objetos
let habilidades:string[] = ["bash", "counter", "healing"];

// habilidades.push();

// Interfaces

interface Personaje{
    nombre:string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: habilidades,
}

console.table(personaje)





