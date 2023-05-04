import { Producto } from "./Producto.js";


export class Calzado extends Producto {
    #tipoCalzado;
    #talla;
    constructor(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento, tCalzado, talla) {
        super(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento);
        this.#tipoCalzado = tCalzado;
        this.#talla = talla;
    }
    set tipoCalzado(nuevaCalzado) {
        this.#tipoCalzado = nuevaCalzado;
    }
    get tipoCalzado() {
        return this.#tipoCalzado;
    }
    set talla(nuevaTalla) {
        this.#talla = nuevaTalla;
    }
    get talla() {
        return this.#talla;
    }


}
