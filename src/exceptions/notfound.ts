import { BaseError } from './base';
export class NotFoundError extends BaseError {
  constructor(message = 'Not Found', details = {}) {
      super(message, 404, details)
  }
}