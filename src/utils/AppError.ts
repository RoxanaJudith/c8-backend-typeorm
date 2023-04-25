interface AppErrorArgs {
  message?: string;
  httpCode: number;
}

export class AppError extends Error {
  public readonly httpCode: number;

  constructor({ message, httpCode }: AppErrorArgs) {
    super(message);
    this.httpCode = httpCode;
    Error.captureStackTrace(this);
  }
}
