import ErrorProcessor from "./processor";
import HTTPError from "../../models/error";

class ErrorHandler{
  static handle(err: HTTPError, req: any, res: any, next: any){
    const response = ErrorProcessor.prepareResponse(err);
    return res.status(response.status).json(response.toJSON()).end();
  }
}
export default ErrorHandler