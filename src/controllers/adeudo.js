const sequelize = require("../../config/database3");
const { models } = require("./../../config/database3");

const getData = async (req, res, next) => {
  try {
    const get = await models.documento.findAll({});
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

const postDocumento = async (req, res, next) => {
  try {
    // Obtener el último correlativo del año actual, si existe
    const ultimoDocumento = await models.documento.findOne({
      attributes: ["correlativo"],
      order: [["id", "DESC"]], // Ordenar por id en orden descendente
    });

    let correlativo = ultimoDocumento ? ultimoDocumento.correlativo + 1 : 1;

    // Añadir el correlativo al body de la solicitud
    const dataConCorrelativo = { ...req.body, correlativo };

    // Crear un nuevo registro en la tabla 'documento' con los datos del body de la solicitud
    await models.documento.create(dataConCorrelativo);

    // Enviar una respuesta con el nuevo registro creado
    return res.status(201).json({ data: "Adeudo guardado con éxito!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar el adeudo.", error });
  }
};

module.exports = {
  getData,
  postDocumento
};
