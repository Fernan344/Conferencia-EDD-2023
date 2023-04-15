import { StatusCodes } from "http-status-codes";
import errorMidleware from '../../../src/utils/http/http-error-handler';
import { HttpMiddleware } from '../../../src/utils/http/http-middleware';

async function GET (req, res) {    
    res.status(StatusCodes.OK).json({hola: "mundo"})  
}

export default async function api (req, res)  {
  try {
    return HttpMiddleware({GET}, req, res)
  }catch (err){
    errorMidleware(err, req, res)
  }
}