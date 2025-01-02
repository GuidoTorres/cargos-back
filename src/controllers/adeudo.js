const sequelize = require("../../config/database3");
const { models } = require("./../../config/database3");

const getData = async (req, res, next) => {
  try {
    const get = await models.documento.findAll({order: [['id', 'DESC']]});
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

const postDocumento = async (req, res, next) => {
  try {
    // Obtener el año actual
    const añoActual = new Date().getFullYear();

    // Buscar el último documento del año actual
    const ultimoDocumento = await models.documento.findOne({
      attributes: ["correlativo"],
      where: { anio: añoActual }, // Filtrar por el año actual
      order: [["correlativo", "DESC"]], // Ordenar por correlativo en orden descendente
    });

    // Calcular el nuevo correlativo
    let correlativo = ultimoDocumento ? ultimoDocumento.correlativo + 1 : 1;

    // Añadir el año y el correlativo al body de la solicitud
    const dataConAñoYCorrelativo = { ...req.body, correlativo, año: añoActual };

    // Crear un nuevo registro en la tabla 'documento'
    await models.documento.create(dataConAñoYCorrelativo);

    // Enviar una respuesta con el nuevo registro creado
    return res.status(201).json({ msg: "Documento guardado con éxito!", correlativo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al guardar el documento.", error });
  }
};


module.exports = {
  getData,
  postDocumento
};
