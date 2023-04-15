import Nodo from "./Nodo";
import lodash from "lodash";
import crypto from "crypto";
import graphviz from 'graphviz';

export default class Arbol {
    raiz;
    key;

    constructor(key) {  
        this.key = key;
        this.graphIndex = 0;
    }

    getKey() {
        return this.key;
    }

    getRaiz() {
        return this.raiz;
    }

    setRaiz(value) {
        this.raiz = value;
    }

    agregarDato(value) {
        if(!this.raiz){
            this.setRaiz(new Nodo(value))
            return {success: true, message: 'Dato ingrasado correctamente.'}
        }else{
            let actual = this.getRaiz()
            const valueKey = lodash.get(value, this.key).toString()
            while(actual){
                const actualKey = lodash.get(actual.getValor(), this.key).toString()                

                if(actualKey === valueKey){
                    return {success: false, message: 'La llave ya existe en el arbol.'}
                }else if(valueKey < actualKey){
                    if(!actual.getHijoIzquierdo()){
                        actual.setHijoIzquierdo(new Nodo(value))         
                        break;               
                    }
                    actual = actual.getHijoIzquierdo();
                }else if(valueKey > actualKey){
                    if(!actual.getHijoDerecho()){
                        actual.setHijoDerecho(new Nodo(value))
                        break;   
                    }
                    actual = actual.getHijoDerecho();
                }else{
                    return {success: false, message: 'Error al ingresar el dato.'}
                }
            }
            return {success: true, message: 'Nodo Ingresado Correctamente'}
        }
    }

    getValue(key) {
        if(!this.raiz){            
            return {success: false, message: 'Actualmente no existen datos.'}
        }else{
            let actual = this.getRaiz()
            const valueKey = key.toString()
            while(actual){
                const actualKey = lodash.get(actual.getValor(), this.key).toString()                

                if(actualKey === valueKey){
                    return {success: true, message: actual.getValor()}
                }else if(valueKey < actualKey){
                    actual = actual.getHijoIzquierdo();
                }else if(valueKey > actualKey){
                    actual = actual.getHijoDerecho();
                }else{
                    return {success: false, message: 'El dato no puede ser localizado'}
                }
            }
            return {success: false, message: 'Dato no encontrado'}
        }
    }

    build() {
        const g = graphviz.digraph("G");
        this.node.build(g);
        return g.to_dot();
    }

    generateHash() {
        return crypto.createHash('sha256').update(JSON.stringify(this)).digest('hex');
    }
}