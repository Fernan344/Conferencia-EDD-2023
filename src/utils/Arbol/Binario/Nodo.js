export default class Nodo{
    hijoIzquierdo;
    hijoDerecho;
    padre;
    valor;

    constructor(valor) {
        this.valor = valor;
    }

    getValor() {
        return this.valor;
    }

    setHijoDerecho(hijoDerecho) {
        this.hijoDerecho = hijoDerecho;
    }

    setHijoIzquierdo(hijoIzquierdo) {
        this.hijoIzquierdo = hijoIzquierdo;
    }

    setPadre(padre) {
        this.padre = padre;
    }

    getPadre() {
        return this.padre;
    }

    getHijoIzquierdo() {
        return this.hijoIzquierdo;
    }

    getHijoDerecho() {
        return this.hijoDerecho;
    }
}