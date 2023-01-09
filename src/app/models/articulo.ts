import { Categoria } from "./categoria";
import { Precio } from "./precio";

export interface Articulo {
    clave: string;
    categoria: Categoria
    nombre: string;
    precios: Array<Precio>; // 1 precio o mas
    activo: boolean;
    }