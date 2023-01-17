interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor:string;
    año:number;
}

const reproductor:Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles:{
        autor: "Ed Sheeran",
        año: 2015
    }
}

// Desestructuración de objetos

//const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log(`El volumen actual es de ${volumen}`)
console.log(`El segundo actual es ${segundo}`)
console.log(`la cancion actual es ${cancion}`)
console.log(`El autor actual es ${autor}`)


// Desestructuración de arrays

const dbz: string[] = ["Goku", "Vegetta", "Trunks"];

const [ p1, , p3 ] = dbz;

console.log(`El personaje 1 es ${p1}`)
//console.log(`El personaje 1 es ${p2}`)
console.log(`El personaje 1 es ${p3}`)