const jwt = require("jsonwebtoken");
const { secretKey } = require("../controllers/auth.controller");
const UnAuthorizedError = require("../errors/un-authorized");

const authenticate = (req, res, next) => {
  const { token } = req.headers;

  try {
    const { id, email } = jwt.verify(token, secretKey);
    req.user = { id, email };
    next();
  } catch (err) {
    console.log(err);
    throw new UnAuthorizedError("Invalid Credentials");
  }
};

module.exports = authenticate;
