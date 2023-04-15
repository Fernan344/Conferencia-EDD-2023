import { HttpStatusCodeError } from "./http-status-code-error";
import { StatusCodes } from "http-status-codes";
import get from 'lodash/get'

export const HttpMiddleware = async (methods, req, res) => {

    const methodNotImplemented = () => { throw new HttpStatusCodeError(StatusCodes.NOT_IMPLEMENTED) }

    const method = get(methods, req.method, methodNotImplemented)
            
    return method(req, res);
}