const CustomError = require("../errors/custom.error");
class UnAuthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
module.exports = UnAuthorizedError;
