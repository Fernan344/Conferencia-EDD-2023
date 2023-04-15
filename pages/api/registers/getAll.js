import errorMidleware from '../../../src/utils/http/http-error-handler';
import { HttpMiddleware } from '../../../src/utils/http/http-middleware';
import { binary } from "../../../globals";

async function GET (req, res) {    
  const results = binary.predictive.getMatches('')
  res.json(results);
}

export default async function api (req, res)  {
  try {
    return HttpMiddleware({GET}, req, res)
  }catch (err){
    errorMidleware(err, req, res)
  }
}