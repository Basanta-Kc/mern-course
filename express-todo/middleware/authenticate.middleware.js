const jwt = require("jsonwebtoken");
const { secretKey } = require("../controllers/auth.controller");

const authenticate = (req, res, next) => {
  const { token } = req.headers;

  try {
    const { id, email } = jwt.verify(token, secretKey);
    req.user = { id, email };
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = authenticate;
