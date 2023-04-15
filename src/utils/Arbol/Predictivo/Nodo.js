import moment from 'moment';
import crypto from 'crypto';
import get from 'lodash/get'

export default class Nodo{
    hijos;
    padre;
    valor;
    timestamp;

    constructor(valor) {
        this.valor = valor;
        this.timestamp = moment()
        this.hijos = [];
    }

    getValor() {
        return this.valor;
    }

    setValor(valor) {
        this.valor = valor;
    }

    setHijos(hijos) {
        this.hijos = hijos;
    }

    setPadre(padre) {
        this.padre = padre;
    }

    getPadre() {
        return this.padre;
    }

    getHijos() {
        return this.hijos;
    }

    build(g) {
        const node = g.addNode(this.generateHash(), { label: get(this.valor, 'value') ||get(this.valor, 'index') || 'RAIZ' });
        node.set('style', 'filled');
        this.getHijos() && this.getHijos().forEach(son => {
            const sonG = son.build(g);
            const edge = g.addEdge(node, sonG);
            edge.set('color', 'red');
        })
        return node;
    }

    generateHash() {
        return crypto.createHash('sha256').update(JSON.stringify(this)).digest('hex');
    }
}