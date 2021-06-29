import Response from "./response";
import HTTPError from "../../models/error";

class ErrorProcessor{
  static prepareResponse(error: HTTPError){
    return new Response({
      status: (isNaN(error.code)? 500: error.code ?? 500),
      message: error.message,
      stack: error.stack
    });
  }
}
export default ErrorProcessor;