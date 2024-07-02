const router = require("express").Router();
const { Op } = require("sequelize");
const sequelize = require("../../config/database");
const asignaciones = require("../controllers/asignaciones");
const {models} = require('./../../config/database')

router.get("/", asignaciones.getData)
router.get("/bienes", asignaciones.getDataBienes)
router.get("/prueba", asignaciones.resetearCorrelativos)
router.put("/actualizar", asignaciones.actualizarCorrelativos)
router.put('/probar-correlativos', async (req, res) => {
    const t = await sequelize.transaction();

    try {
      const currentYear = new Date().getFullYear();
  
      // Obtener el último correlativo del año actual
      const ultimoCorrelativo = await models.SIG_ASIGNACIONES.max('id_correlativo', {
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('fecha_asignacion')), currentYear),
      });
  
      // Obtener registros sin correlativo del año actual
      const registrosSinCorrelativo = await models.SIG_ASIGNACIONES.findAll({
        where: {
          id_correlativo: null,
          [Op.and]: sequelize.where(sequelize.fn('YEAR', sequelize.col('fecha_asig')), currentYear),
        },
        order: [['fecha_asignacion', 'ASC'], ['secuencia', 'ASC']],
        transaction: t,  // Incluir la transacción para asegurarnos de que estamos trabajando dentro de ella
      });
  
      let nuevoCorrelativo = ultimoCorrelativo || 0;
      const actualizaciones = [];
  
      // Asignar nuevos correlativos
      for (const registro of registrosSinCorrelativo) {
        nuevoCorrelativo += 1;
        registro.id_correlativo = nuevoCorrelativo;
        actualizaciones.push({
          id: registro.id,
          id_correlativo: nuevoCorrelativo,
          fecha_asignacion: registro.fecha_asignacion,
          // Asumiendo que tienes un campo 'persona' o similar que identifica a la persona
          persona: registro.persona
        });
      }
  
      // Revertir la transacción para que no se guarden los cambios
      await t.rollback();
  
      res.status(200).json({ message: 'Prueba de correlativos generados correctamente', total: registrosSinCorrelativo.length, actualizaciones });
    } catch (error) {
      // Revertir la transacción en caso de error
      await t.rollback();
      console.error('Error al probar la generación de correlativos:', error);
      res.status(500).json({ message: 'Error al probar la generación de correlativos', error });
    }
  
  });
router.put("/", asignaciones.updateObservacion)

module.exports = router