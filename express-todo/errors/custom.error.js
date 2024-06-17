// To distinguish if the error are thrown by developer
// or they are internal errors(syntax error, db error, type error, reference error)

class CustomError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, Error.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = CustomError;
