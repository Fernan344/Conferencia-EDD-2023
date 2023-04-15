import toString from 'lodash/toString'
import crypto from 'crypto'

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

    build(g) {
        const node = g.addNode(this.generateHash(), { label: toString(`${this.valor.dato}-${this.valor.key}` || 'RAIZ') });
        node.set('style', 'filled');
        if(this.hijoIzquierdo){
            const sonG = this.hijoIzquierdo.build(g);
            const edge = g.addEdge(node, sonG);
            edge.set('color', 'red');
        }
        if(this.hijoDerecho){
            const sonG = this.hijoDerecho.build(g);
            const edge = g.addEdge(node, sonG);
            edge.set('color', 'red');
        }
        
        return node;
    }

    generateHash() {
        return crypto.createHash('sha256').update(JSON.stringify(this)).digest('hex');
    }
}