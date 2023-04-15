import errorMidleware from '../../../../src/utils/http/http-error-handler';
import { HttpMiddleware } from '../../../../src/utils/http/http-middleware';
import { binary } from "../../../../globals";
import get from 'lodash/get'

const GET = async (req, res) => {
    const { value } = req.query;

    const result = binary.getValue(value)
    if(get(result, 'success')===false) res.status(404).json(result)
    else res.json(result)
}

export default async function api (req, res)  {
  try {
    return HttpMiddleware({GET}, req, res)
  }catch (err){
    errorMidleware(err, req, res)
  }
}