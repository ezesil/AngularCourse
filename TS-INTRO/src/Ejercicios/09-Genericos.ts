/*
    ===== Código de TypeScript =====
*/


function QueTipoSoy<T>(argumento: T) {
    return argumento;
}



let soyString = QueTipoSoy("Hola Mundo");

let soyNumero = QueTipoSoy(100);

let soyArray = QueTipoSoy([1, 2, 3, 4, 5]);

let soyExplicito = QueTipoSoy<number>(100);









