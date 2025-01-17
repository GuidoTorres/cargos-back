const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
  return jwt.sign(
    {
      id: user.cuser_id,
      usuario: user.cuserlname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "12h",
    }
  );
};
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const error = new Error("Token inválido");
      error.status = 409;
      throw error;
    }
    return null;
  }
};

module.exports = {tokenSign, verifyToken};
