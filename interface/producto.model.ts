import { Rating } from "./rating.model";

export interface Producto{

    id: number,
    marca: string,
    modelo: string,
    color: string,
    puertas: number,
    matricula: string,
    categoria: string,
    precio: number,
    vendedor: string,

    img: string,
    rating:Rating
   

}