import Nodo from "./Nodo";
import get from "lodash/get";
import graphviz from "graphviz";

export default class Arbol {
    raiz;

    constructor() {  
        this.raiz = new Nodo(null);
    }

    getRaiz() {
        return this.raiz;
    }

    setRaiz(value) {
        this.raiz = value;
    }

    agregarDato(value) {        
        const chars = get(value, 'value', '').split("");
        
        let actual = this.getRaiz()        

        for(let i=0; i<chars.length; i++){            
            let nodos = actual.getHijos();
            const char = chars[i];
            if (nodos.length) {
                for(let j=0; j<nodos.length; j++) {
                    if(get(nodos[j].getValor(), "index") === char){
                        if(i===chars.length-1){
                            nodos[j].setValor({...nodos[j].getValor(), ...value})
                            return {success: true, message: 'Nodo Ingresado Correctamente'}
                        }      
                        actual = nodos[j]          
                        break;       
                    }else{
                        if(j===nodos.length-1){
                            actual.getHijos().push(new Nodo({index: char}))
                            actual = actual.getHijos()[0];
                        }
                    }
                };
            }else{
                actual.setHijos([new Nodo({index: char})])
                i--;
            }
        }
        return {success: false, message: 'Nodo No Ingresado'}
    }

    getAllSince(padre = this.raiz, results){
        const nodos = padre.getHijos()
        if(get(padre.getValor(), 'value')) results.push(padre.getValor())

        for(let i=0; i<nodos.length; i++){
            const nodo = nodos[i];            
            this.getAllSince(nodo, results)
        }
    }

    getMatches(value){
        
        const chars = value.split("");
        
        let actual = this.getRaiz()        

        for(let i=0; i<chars.length; i++){
            let nodos = actual.getHijos();
            const char = chars[i];           

            for(let j=0; j<nodos.length; j++) {
                if(get(nodos[j].getValor(), 'index') === char){
                    actual = nodos[j]
                    break;
                }else{
                    if(j===nodos.length-1){
                        return {results: []}
                    }
                }
            }         
            
            if(i===chars.length-1) break;  
        }

        const results = []
        this.getAllSince(actual, results)
        return(results)
    }

    build() {
        const g = graphviz.digraph("G");
        this.raiz.build(g);       
        return g.to_dot();
    }
}