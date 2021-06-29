export interface IResponse{
  status: number;
  message: string;
  stack: any;
}

class Response implements IResponse{
  status: number;
  message: string;
  stack: any;

  constructor(args: IResponse){
    this.status = args.status;
    this.message = args.message;
    this.stack = args.stack;
  }

  toJSON(){
    const jsonData = {
      status: this.status,
      message: this.message,
      stack: this.stack
    }
    return JSON.parse(JSON.stringify(jsonData));
  }
}
export default Response;