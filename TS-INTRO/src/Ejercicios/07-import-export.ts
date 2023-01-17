/*
    ===== Código de TypeScript =====
*/

import { Producto, CalcularISV } from "./06-DesestructuracionDeFuncion";


const CarritoCompras: Producto[] = [
    {
        descripcion:"Telefono 1",
        precio: 100
    },
    {
        descripcion:"Telefono 2",
        precio: 150
    }
];

const [total, isv] = CalcularISV(CarritoCompras);

console.log("Total:", total);
console.log("ISV", isv);



