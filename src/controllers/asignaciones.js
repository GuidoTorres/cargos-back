const { Op, QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);

const getData = async (req, res) => {
  try {
    let { inicio, fin, search } = req.query;
    const inicial = inicio || "2020-01-01";
    const final = fin || "2024-12-31";
    const busqueda = search ? search.toLowerCase() : "";

    const sqlQuery = `
    SELECT DISTINCT 
      sa.nro_interno,   
      (CASE WHEN 'S'='S' THEN spa.nombre_completo ELSE spc.nombre_completo END) AS de_usuario,   
      (CASE WHEN 'S'='S' THEN spb.nombre_completo ELSE spd.nombre_completo END) AS para_usuario,   
      sa.fecha_asig,   
      sa.sede_entrega,   
      sa.pliego_entrega,  
      sa.id_correlativo,
      sa.secuencia,
      sa.ano_eje, 
      sa.sec_ejec, 
      sa.tipo_modalidad, 
      sa.nro_asignac, 
      sa.centro_costo,
      sa.cod_ubicac,
      sa.centro_entrega,
      sa.tipo_ubicac,
      sa.id_correlativo,
      (CASE WHEN 'S'='S' THEN sa.empleado_final ELSE sa.empleado END) AS de_cod_usuario,   
      (CASE WHEN 'S'='S' THEN sa.empleado_final_entr ELSE sa.empleado_entrega END) AS para_cod_usuario,
      CAST(sa.observaciones AS varchar(max)) AS observaciones  
    FROM sig_asignaciones sa
    JOIN sig_personal spa ON
        sa.sec_ejec = spa.sec_ejec AND  
        sa.empleado_final = spa.empleado 
    JOIN sig_personal spb ON
        sa.sec_ejec = spb.sec_ejec AND 
        sa.empleado_final_entr = spb.empleado
    JOIN sig_personal spc ON
        sa.sec_ejec = spc.sec_ejec AND  
        sa.empleado = spc.empleado 
    JOIN sig_personal spd ON
        sa.sec_ejec = spd.sec_ejec AND 
        sa.empleado_entrega = spd.empleado 
    WHERE sa.ano_eje = 2024
      AND sa.sec_ejec = 1137
      AND sa.tipo_modalidad = 1
      AND sa.nro_interno IS NOT NULL
      AND sa.fecha_asig >= :inicial
      AND sa.fecha_asig <= :final
      AND (
          :search = '%' OR (
              :search <> '%' AND (
                  sa.centro_costo IN (
                      SELECT a.centro_costo
                      FROM sig_usuario_ccosto a
                      WHERE a.ano_eje = 2024
                          AND a.cuser_id = 'DMARIN'
                          AND a.sec_ejec = 1137
                  ) OR EXISTS (
                      SELECT CUSER_ID
                      FROM SIG_USUARIO_EJECUTORA
                      WHERE SIG_USUARIO_EJECUTORA.CUSER_ID = 'DMARIN'
                          AND SIG_USUARIO_EJECUTORA.SEC_EJEC = 1137
                          AND SIG_USUARIO_EJECUTORA.FLAG_CCOSTO = 'S'
                  )
              )
          )
      )
      ORDER BY sa.fecha_asig DESC, sa.secuencia ASC
    `;

    const users = await sequelize.query(sqlQuery, {
      replacements: { inicial, final, search: busqueda },
      type: QueryTypes.SELECT,
    });

    // Filtrar duplicados basados en una combinación de columnas
    const seen = new Set();
    const filteredUsers = users.filter((user) => {
      const key = `${user.nro_interno}-${user.fecha_asig}-${user.de_cod_usuario}-${user.para_cod_usuario}`;
      if (seen.has(key)) {
        return false;
      } else {
        seen.add(key);
        return true;
      }
    });

    let format = filteredUsers.map((item) => {
      return {
        ...item,
        fecha_asig: dayjs.utc(item.fecha_asig).format("DD-MM-YYYY"),
        fecha_asigna: dayjs.utc(item.fecha_asig).format("YYYY-MM-DD"),
      };
    });

    if (busqueda) {
      format = busqueda
        ? format.filter(
            (item) =>
              item.nro_interno.toString()?.toLowerCase()?.includes(busqueda) ||
              item?.de_usuario?.toLowerCase()?.includes(busqueda) ||
              item?.para_usuario?.toLowerCase()?.includes(busqueda) ||
              item?.observaciones?.toLowerCase()?.includes(busqueda)
          )
        : format;
    }

    return res.status(200).json({ data: format });
  } catch (error) {
    res.status(500).json();
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

module.exports = getData;

const getDataBienes = async (req, res) => {
  try {
    let { cod_usuario, fecha_asig, nro_interno } = req.query;
    const fecha = dayjs.utc(fecha_asig).format("DD-MM-YYYY");
    const sqlQuery = `
    SELECT 
        sig_patrimonio.secuencia,
        sig_patrimonio.codigo_activo,
        sig_patrimonio.descripcion,
        marca.nombre AS nombre_marca, -- Alias para evitar ambigüedad
        sig_patrimonio.marca, -- Campo agregado
        sig_patrimonio.modelo,
        sig_patrimonio.medidas,
        sig_patrimonio.invent_scaner,
        sig_patrimonio.tipo_activo,
        sig_patrimonio.fecha_alta,
        sig_personal.apellido_paterno,
        sig_personal.apellido_materno,
        sig_personal.nombres,
        sig_patrimonio.tipo_modalidad,
        sig_patrimonio.estado,
        sig_movimiento_activo.mes_proceso,
        sig_movimiento_activo.tipo_movimto,
        sig_movimiento_activo.nro_movimto,
        sig_movimiento_activo.tipo_transac,
        sig_item_marca_modelo.nombre AS nombre_modelo, -- Alias para evitar ambigüedad
        sig_patrimonio.sec_modelo,
        sig_patrimonio.flag_esni,
        sig_patrimonio.nro_serie,
        sig_patrimonio.codigo_barra
    FROM 
        sig_patrimonio 
    LEFT JOIN 
        sig_item_marca_modelo 
        ON sig_patrimonio.tipo_bien = sig_item_marca_modelo.tipo_bien 
        AND sig_patrimonio.grupo_bien = sig_item_marca_modelo.grupo_bien 
        AND sig_patrimonio.clase_bien = sig_item_marca_modelo.clase_bien 
        AND sig_patrimonio.familia_bien = sig_item_marca_modelo.familia_bien 
        AND sig_patrimonio.item_bien = sig_item_marca_modelo.item_bien 
        AND sig_patrimonio.tipo_marca = sig_item_marca_modelo.tipo_marca 
        AND sig_patrimonio.marca = sig_item_marca_modelo.marca 
        AND sig_patrimonio.sec_modelo = sig_item_marca_modelo.sec_modelo
    LEFT JOIN 
        sig_personal 
        ON sig_patrimonio.sec_ejec = sig_personal.sec_ejec 
        AND sig_patrimonio.empleado_final = sig_personal.empleado, 
        marca, 
        sig_detalle_activos, 
        sig_movimiento_activo    
    WHERE 
        sig_patrimonio.marca = marca.marca
        AND sig_patrimonio.tipo_marca = marca.tipo_marca
        AND sig_movimiento_activo.ano_eje = sig_detalle_activos.ano_eje
        AND sig_movimiento_activo.sec_ejec = sig_detalle_activos.sec_ejec
        AND sig_movimiento_activo.mes_proceso = sig_detalle_activos.mes_proceso
        AND sig_movimiento_activo.tipo_movimto = sig_detalle_activos.tipo_movimto
        AND sig_movimiento_activo.nro_movimto = sig_detalle_activos.nro_movimto
        AND sig_patrimonio.sec_ejec = sig_detalle_activos.sec_ejec
        AND sig_patrimonio.tipo_modalidad = sig_detalle_activos.tipo_modalidad
        AND sig_patrimonio.secuencia = sig_detalle_activos.secuencia
        AND sig_detalle_activos.sec_ejec = 1137
        AND sig_detalle_activos.tipo_modalidad = 1
        AND sig_patrimonio.sede = 1
        AND sig_patrimonio.pliego = '443'
        AND sig_detalle_activos.ano_eje = 2024
        AND sig_patrimonio.centro_costo IN ('01.06.01.02', '01.06.02.01')
        AND NOT EXISTS (
            SELECT a.secuencia 
            FROM sig_asignaciones a 
            WHERE a.ano_eje = 2024 
            AND a.sec_ejec = sig_patrimonio.sec_ejec 
            AND a.tipo_modalidad = sig_patrimonio.tipo_modalidad 
            AND a.secuencia = sig_patrimonio.secuencia
        )
        AND NOT EXISTS (
            SELECT p.secuencia 
            FROM sig_patrimonio p 
            WHERE p.sec_ejec = sig_patrimonio.sec_ejec 
            AND p.tipo_modalidad = sig_patrimonio.tipo_modalidad 
            AND p.secuencia = sig_patrimonio.secuencia 
            AND (p.mayor IS NULL OR p.mayor = '')
        )
        AND sig_movimiento_activo.ano_eje = 2024
        AND sig_movimiento_activo.sec_ejec = 1137
        AND sig_movimiento_activo.tipo_movimto IN ('A', 'I')
        AND NOT EXISTS (
            SELECT y.secuencia 
            FROM sig_movimiento_activo x, sig_detalle_activos y 
            WHERE x.ano_eje = y.ano_eje 
            AND x.sec_ejec = y.sec_ejec 
            AND x.mes_proceso = y.mes_proceso 
            AND x.tipo_movimto = y.tipo_movimto 
            AND x.nro_movimto = y.nro_movimto 
            AND sig_patrimonio.sec_ejec = y.sec_ejec 
            AND sig_patrimonio.tipo_modalidad = y.tipo_modalidad 
            AND sig_patrimonio.secuencia = y.secuencia 
            AND x.tipo_movimto = 'S' 
            AND x.tipo_transac = 5
        )
        AND sig_patrimonio.empleado_final = :cod
    
    UNION
    
    SELECT 
        sig_patrimonio.secuencia,
        sig_patrimonio.codigo_activo,
        sig_patrimonio.descripcion,
        marca.nombre AS nombre_marca, -- Alias para evitar ambigüedad
        sig_patrimonio.marca, -- Campo agregado
        sig_patrimonio.modelo,
        sig_patrimonio.medidas,
        sig_patrimonio.invent_scaner,
        sig_patrimonio.tipo_activo,
        sig_patrimonio.fecha_alta,
        sig_personal.apellido_paterno,
        sig_personal.apellido_materno,
        sig_personal.nombres,
        sig_patrimonio.tipo_modalidad,
        sig_patrimonio.estado,
        sig_movimiento_activo.mes_proceso,
        sig_movimiento_activo.tipo_movimto,
        sig_movimiento_activo.nro_movimto,
        sig_movimiento_activo.tipo_transac,
        sig_item_marca_modelo.nombre AS nombre_modelo, -- Alias para evitar ambigüedad
        sig_patrimonio.sec_modelo,
        sig_patrimonio.flag_esni,
        sig_patrimonio.nro_serie,
        sig_patrimonio.codigo_barra
    FROM 
        sig_asignaciones 
    LEFT JOIN 
        sig_centro_costo 
        ON sig_asignaciones.ano_eje = sig_centro_costo.ano_eje 
        AND sig_asignaciones.sec_ejec = sig_centro_costo.sec_ejec 
        AND sig_asignaciones.centro_entrega = sig_centro_costo.centro_costo
    JOIN 
        sig_patrimonio 
        ON sig_patrimonio.sec_ejec = sig_asignaciones.sec_ejec  
        AND sig_patrimonio.tipo_modalidad = sig_asignaciones.tipo_modalidad 
        AND sig_patrimonio.secuencia = sig_asignaciones.secuencia
    LEFT JOIN 
        sig_item_marca_modelo 
        ON sig_patrimonio.tipo_bien = sig_item_marca_modelo.tipo_bien 
        AND sig_patrimonio.grupo_bien = sig_item_marca_modelo.grupo_bien 
        AND sig_patrimonio.clase_bien = sig_item_marca_modelo.clase_bien 
        AND sig_patrimonio.familia_bien = sig_item_marca_modelo.familia_bien 
        AND sig_patrimonio.item_bien = sig_item_marca_modelo.item_bien 
        AND sig_patrimonio.tipo_marca = sig_item_marca_modelo.tipo_marca 
        AND sig_patrimonio.marca = sig_item_marca_modelo.marca
    LEFT JOIN 
        sig_personal 
        ON sig_asignaciones.sec_ejec = sig_personal.sec_ejec 
        AND sig_asignaciones.empleado_final_entr = sig_personal.empleado, 
        marca, 
        sig_detalle_activos, 
        sig_movimiento_activo
    WHERE 
        marca.tipo_marca = sig_patrimonio.tipo_marca 
        AND marca.marca = sig_patrimonio.marca
        AND sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec 
        AND sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad 
        AND sig_detalle_activos.secuencia = sig_patrimonio.secuencia 
        AND sig_movimiento_activo.ano_eje = sig_detalle_activos.ano_eje 
        AND sig_movimiento_activo.sec_ejec = sig_detalle_activos.sec_ejec 
        AND sig_movimiento_activo.mes_proceso = sig_detalle_activos.mes_proceso 
        AND sig_movimiento_activo.tipo_movimto = sig_detalle_activos.tipo_movimto 
        AND sig_movimiento_activo.nro_movimto = sig_detalle_activos.nro_movimto 
        AND sig_asignaciones.empleado_final_entr = :cod2 
        AND ((1 = 0) OR (sig_asignaciones.nro_interno = :nro)) 
        AND (('S' = 'N') OR ('S' = 'S' AND sig_asignaciones.fecha_asig = :fecha))
    `;

    const bienes = await sequelize.query(sqlQuery, {
      replacements: {
        cod: cod_usuario,
        cod2: cod_usuario,
        fecha: fecha_asig,
        nro:nro_interno
      },
      type: QueryTypes.SELECT,
    });
    const seen = new Set();
    const format = bienes.filter((item) => {
      const duplicate = seen.has(item.secuencia);
      seen.add(item.secuencia);
      return !duplicate;
    });

    return res.status(200).json({ data: format });
  } catch (error) {
    res.status(500).json();
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
const updateObservacion = async (req, res, next) => {
  try {
    // Extraer los campos de la clave primaria y otros campos para actualizar
    const {
      ANO_EJE,
      SEC_EJEC,
      TIPO_MODALIDAD,
      SECUENCIA,
      NRO_ASIGNAC,
      ...updateFields
    } = req.body;

    // Verificar que todos los campos de la clave primaria están presentes
    if (
      !ANO_EJE ||
      !SEC_EJEC ||
      !TIPO_MODALIDAD ||
      !SECUENCIA ||
      !NRO_ASIGNAC
    ) {
      return res
        .status(400)
        .json({ msg: "Faltan campos de la clave primaria." });
    }

    // Verificar que hay campos para actualizar
    if (Object.keys(updateFields).length === 0) {
      return res
        .status(400)
        .json({ msg: "No se proporcionaron datos para actualizar." });
    }

    const [updated] = await models.SIG_ASIGNACIONES.update(updateFields, {
      where: {
        ANO_EJE,
        SEC_EJEC,
        TIPO_MODALIDAD,
        SECUENCIA,
        NRO_ASIGNAC,
      },
    });

    if (updated) {
      return res.status(200).json({ msg: "Actualizado con éxito!" });
    } else {
      return res
        .status(404)
        .json({ msg: "No se encontró el registro para actualizar." });
    }
  } catch (error) {
    console.error("Error al actualizar:", error);
    return res.status(500).json({ msg: "No se pudo actualizar." });
  }
};

const actualizarCorrelativos = async (req, res, next) => {
  try {
    const currentYear = new Date().getFullYear();

    // Obtener el último correlativo del año actual, si existe
    const ultimoCorrelativoStr = await models.SIG_ASIGNACIONES.max(
      "ID_CORRELATIVO",
      {
        where: sequelize.where(
          sequelize.fn("YEAR", sequelize.col("fecha_asig")),
          currentYear
        ),
      }
    );

    // Convertir el último correlativo a número, si existe, o iniciar en 0
    const ultimoCorrelativo = ultimoCorrelativoStr
      ? parseInt(ultimoCorrelativoStr, 10)
      : 0;

    // Obtener registros sin correlativo del año actual
    const registrosSinCorrelativo = await models.SIG_ASIGNACIONES.findAll({
      where: {
        ID_CORRELATIVO: null,
        [Op.and]: sequelize.where(
          sequelize.fn("YEAR", sequelize.col("fecha_asig")),
          currentYear
        ),
      },
      order: [
        ["fecha_asig", "ASC"],
        ["SECUENCIA", "ASC"],
      ],
    });

    // Agrupar registros por empleado_final y fecha_asig
    const grupos = registrosSinCorrelativo.reduce((acc, registro) => {
      const key = `${registro.EMPLEADO_FINAL}-${registro.FECHA_ASIG}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(registro);
      return acc;
    }, {});

    let nuevoCorrelativo = ultimoCorrelativo;

    // Asignar nuevos correlativos por grupo
    for (const key in grupos) {
      console.log(
        `Procesando grupo: ${key} con ${grupos[key].length} registros`
      );
      for (const registro of grupos[key]) {
        nuevoCorrelativo += 1;

        const condiciones = {
          ANO_EJE: registro.ANO_EJE,
          SEC_EJEC: registro.SEC_EJEC,
          TIPO_MODALIDAD: registro.TIPO_MODALIDAD,
          SECUENCIA: registro.SECUENCIA,
          NRO_ASIGNAC: registro.NRO_ASIGNAC,
        };

        const resultado = await models.SIG_ASIGNACIONES.update(
          { ID_CORRELATIVO: nuevoCorrelativo.toString() }, // Convertir a cadena
          { where: condiciones }
        );
      }
    }

    // Verificar los registros actualizados
    const registrosActualizados = await models.SIG_ASIGNACIONES.findAll({
      where: {
        ID_CORRELATIVO: {
          [Op.ne]: null,
        },
        [Op.and]: sequelize.where(
          sequelize.fn("YEAR", sequelize.col("fecha_asig")),
          currentYear
        ),
      },
      order: [
        [sequelize.cast(sequelize.col("ID_CORRELATIVO"), "INTEGER"), "ASC"],
      ],
    });

    res.status(200).json({
      msg: "Correlativos generados correctamente.",
      total: registrosSinCorrelativo.length,
      actualizaciones: registrosActualizados,
    });
  } catch (error) {
    console.error("Error al generar los correlativos:", error);
    res
      .status(500)
      .json({ message: "Error al generar los correlativos", error });
  }
};

module.exports = {
  getData,
  getDataBienes,
  updateObservacion,
  actualizarCorrelativos,
};
