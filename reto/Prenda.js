import { Producto } from "./Producto.js"; 


export class Prendas extends Producto {
    #tipoPrenda;
    #talla;

    constructor(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento, tPrenda, talla) {
        super(codi, descripcion, pCompra, pVenta, cBodega, cMinima, cMaxima, descuento);
        this.#tipoPrenda = tPrenda;
        this.#talla = talla;
    }
    set tipoPrenda(nuevaPrenda) {
        this.#tipoPrenda = nuevaPrenda;
    }
    get tipoPrenda() {
        return this.#tipoPrenda;
    }
    set talla(nuevaTalla) {
        this.#talla = nuevaTalla;
    }
    get talla() {
        return this.#talla;
    }

    puedePlanchar() {

    }

}
