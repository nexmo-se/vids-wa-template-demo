class HTTPError extends Error{
  code: number;

  constructor(code: number, message: string){
    super(message);
    this.code = code;
  }
}

export class ConflictError extends HTTPError{
  code: number;

  constructor(message: string = "Conflict"){
    super(409, message);
  }
}

export class NotFoundError extends HTTPError{
  constructor(message: string = "Not Found"){
    super(404, message);
  }
}

export class UnauthorizedError extends HTTPError{
  constructor(message: string = "Unauthorized"){
    super(401, message);
  }
}

export class ForbiddenError extends HTTPError{
  constructor(message: string = "Forbidden"){
    super(403, message);
  }
}

export default HTTPError;