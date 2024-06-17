const sequelize = require("../../config/database");
const { models } = require("./../../config/database");
const { tokenSign } = require("../helpers/generateToken");
const { compare } = require("../helpers/handleBcrypt");

const authLogin = async (req, res, next) => {
  try {
    const { usuario, contrasenia } = req.body;
    const get = await models.users.findOne({
      where: { cuser_id: usuario },
      attributes: ["cuser_id", "cuserlname", "cpassword"],
    });
    console.log(get);
    if (!get) {
      return res
        .status(404)
        .send({ msg: "Usuario no encontrado!", status: 404 });
    }

    const checkPassword = await compare(contrasenia, get.dataValues.cpassword);
    const tokenSession = await tokenSign(get.dataValues);
    if (get.estado === false) {
      return res.status(500).send({ msg: "Usuario inactivo!", status: 500 });
    }

    if (checkPassword) {
      return res.send({
        data: get,
        tokenSession,
        msg: `Bienvenido ${get.cuserlname}!`,
        status: 200,
      });
    }

    if (!checkPassword) {
      return res
        .status(409)
        .send({ msg: "Contraseña incorrecta!", status: 409 });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Hubo un error.", status: 500 });
  }
};

module.exports = {
  authLogin,
};
