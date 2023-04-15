import Predictivo from './src/utils/Arbol/Predictivo/Arbol';
import Binary from './src/utils/Arbol/Binario/Arbol';

const binary = new Binary('key', 'dato', new Predictivo());

module.exports = { binary };