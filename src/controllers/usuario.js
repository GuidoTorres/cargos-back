const { encrypt } = require("../helpers/handleBcrypt");

const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

const getUsuario = async (req, res, next) => {
  try {
    const all = await models.users.findAll();
    const format = all.map((item, i) => {
      return {
        nro: i + 1,
        ...item.dataValues,
      };
    });
    return res.status(200).json({ data: format });
  } catch (error) {
    res.status(500).json();
  }
};

const postUsuario = async (req, res, next) => {
  const { nombre, contrasenia, estado, usuario } = req.body;
  if (!nombre || !contrasenia) {
    return res.status(400).json({ msg: "Faltan campos requeridos" });
  }
  const passwordHash = await encrypt(contrasenia);
  let info = {
    cuserlname: nombre,
    cuser_id: usuario,
    cpassword: passwordHash,
    cestado: estado || true,
    CUSER_ID_REG:"ADMIN"
  };
  try {
    const getUser = await models.users.findAll({
      where: { cuser_id: usuario },
    });

    if (getUser.length > 0) {
      return res.status(409).json({
        msg: "El nombre de usuario ya existe, intente con otro!",
        status: 500,
      });
    } else {
      const nuevoUsuario = await models.users.create(info);
      return res.status(200).json({
        data: nuevoUsuario,
        msg: "Usuario creado con éxito!",
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "No se pudo crear.", status: 500 });
    console.log(error);
  }
};

const updateUsuario = async (req, res, next) => {
  let id = req.params.id;

  let info = {
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    estado: Boolean(req.body.estado),
  };
  try {
    await models.users.update(info, { where: { id: id } });
    return res
      .status(200)
      .json({ msg: "Usuario actualizado con éxito!", status: 200 });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo actualizar", status: 500 });
  }
};

const deleteUsuario = async (req, res, next) => {
  let id = req.params.id;
  try {
    await models.users.destroy({ where: { id: id } });
    return res
      .status(200)
      .json({ msg: "Usuario eliminado con éxito!", status: 200 });
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar", status: 500 });
  }
};

module.exports = {
  getUsuario,
  postUsuario,
  updateUsuario,
  deleteUsuario,
};
