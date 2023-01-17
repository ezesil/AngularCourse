interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    MostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion:{
        calle: "Main St",
        pais: "USA",
        ciudad: "NY",
    },
    MostrarDireccion(){
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

let direccion:String = superHeroe.MostrarDireccion();
console.log(direccion)















