import Predictivo from './src/utils/Arbol/Predictivo/Arbol';
import Binary from './src/utils/Arbol/Binario/Arbol';

const predictive = new Predictivo();
const binary = new Binary('key');

module.exports = { predictive, binary };