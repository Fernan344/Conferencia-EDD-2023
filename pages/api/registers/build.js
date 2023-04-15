import { StatusCodes } from "http-status-codes";
import errorMidleware from '../../../src/utils/http/http-error-handler';
import { HttpMiddleware } from '../../../src/utils/http/http-middleware';
import { binary } from "../../../globals";

async function GET (req, res) {        
    binary.agregarDato({dato: "Guatemala", descripcion: "Pais de la eterna primavera", key: 158, image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg'})    
    binary.agregarDato({dato: "Guadalupe", descripcion: "Nombre propio femenino Guadalupe", key: 205})    
    binary.agregarDato({dato: "Guadalajara", descripcion: "Nombre de un lugar en mexico",  key: 408})    
    binary.agregarDato({dato: 'Guatemalteco', descripcion: "Nacionalidad del pais de Guatemala", key: 409})    
    binary.agregarDato({dato: 'Manzana', descripcion: "Fruta de color rojo", key: 518})    
    binary.agregarDato({dato: 'Sandia', descripcion: "Fruta grande de color verde", key: 252})    
    binary.agregarDato({dato: 'Sindi', descripcion: 'Nombre propio femenino sindi', key: 111})    
    binary.agregarDato({dato: 'Sindy', descripcion: 'Nombre propio femenino sindy', key: 25})    
    binary.agregarDato({dato: 'Gutierrez', descripcion: 'Apellido de nombre propio', key: 12})    
    binary.agregarDato({dato: 'Manzanal', descripcion: 'Nombre del arbol que da de fruto las manzanas', key: 177})    
    binary.agregarDato({dato: 'Estructuras', descripcion: 'Datos u objetos ordenados de formas especificas', key: 586})     
    binary.agregarDato({dato: 'Estructurales', descripcion: 'Que realiza un análisis o estudio de una cosa considerándola una estructura o un conjunto de estructuras susceptibles de formalización.', key: 5})

    const predictiveBuilded = binary.predictive.build()
    console.log(predictiveBuilded);
    res.status(StatusCodes.OK).send({predictive: predictiveBuilded})  
}

export default async function api (req, res)  {
  try {
    return HttpMiddleware({GET}, req, res)
  }catch (err){
    errorMidleware(err, req, res)
  }
}