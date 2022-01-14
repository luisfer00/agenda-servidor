export class RequestError extends Error {
  public statusCode: number;

  constructor(_statusCode: number, message?: string) {
    super(message);
    this.statusCode = _statusCode;
  }
}
