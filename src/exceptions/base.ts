export class BaseError extends Error {
  status?: number
  details?: string
  data?: any
  response?: any

  constructor(message: string, status: number, details: any) {
      super(message)
      // Value for checking what level of error this is
      this.status = status

      // Store some meta information about the error
      this.details = details

      // Ensure the name of this error is the same as the class name
      this.name = this.constructor.name

      // This clips the constructor invocation from the stack trace.
      // It's not absolutely essential, but it does make the stack trace a little nicer.
      Error.captureStackTrace(this, this.constructor)
  }

  toString() {
      return `${this.name}(message="${this.message}", status="${this.status}")\n${JSON.stringify(
          this.details,
          null,
          4,
      )}`
  }
}