const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");

const getData = async (req, res, next) => {
  try {
    const get = await models.sig_sedes.findAll({
      attributes: ["sede", "nombre_sede"],
    });
    return res.status(200).json({ data: get });
  } catch (error) {
    res.status(500).json();
    console.log(error);
  }
};

const getEtiquetas = async (req, res) => {
  try {

    const sqlQuery = `
    SELECT DISTINCT 
        sig_patrimonio.secuencia,   
        sig_patrimonio.codigo_activo,   
        sig_patrimonio.codigo_barra,   
        sig_patrimonio.descripcion,   
        sig_patrimonio.nro_serie,
        sig_patrimonio.nro_orden
    FROM 
        sig_patrimonio
    JOIN 
        sig_detalle_activos ON
        sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec 
        AND sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad 
        AND sig_detalle_activos.secuencia = sig_patrimonio.secuencia 
    LEFT JOIN 
        ejecutora ON sig_patrimonio.sec_ejec = ejecutora.sec_ejec
    WHERE
        sig_detalle_activos.ano_eje = 2024 
        AND sig_detalle_activos.sec_ejec = 1137 
        AND sig_detalle_activos.tipo_modalidad = 1 
        AND sig_detalle_activos.tipo_movimto IN ('A','I') 
        AND sig_patrimonio.tipo_bien = 'B' 
        AND ('%' = '%' OR sig_patrimonio.grupo_bien = '%')
        AND ('%' = '%' OR sig_patrimonio.clase_bien = '%')
        AND (:familiaBien IS NULL OR sig_patrimonio.familia_bien = :familiaBien)
        AND (:startSeq IS NULL OR sig_patrimonio.secuencia >= :startSeq)
        AND (:endSeq IS NULL OR sig_patrimonio.secuencia <= :endSeq)
        AND (:startCodigoActivo IS NULL OR sig_patrimonio.codigo_activo >= :startCodigoActivo)
        AND (:endCodigoActivo IS NULL OR sig_patrimonio.codigo_activo <= :endCodigoActivo)
        AND (0 = 0 OR (:sede IS NULL OR sig_patrimonio.sede = :sede))
        AND (0 = 0 OR (:pliego IS NULL OR sig_patrimonio.pliego = :pliego))
        AND (:centroCosto IS NULL OR sig_patrimonio.centro_costo = :centroCosto)
        AND (0 = 0 OR (:tipoUbicac IS NULL OR sig_patrimonio.tipo_ubicac = :tipoUbicac AND sig_patrimonio.cod_ubicac = :codUbicac))
        AND (:empleadoFinal IS NULL OR sig_patrimonio.empleado_final = :empleadoFinal)
        AND (:desc IS NULL OR sig_patrimonio.descripcion LIKE :desc)
        AND NOT EXISTS (
            SELECT 1 
            FROM sig_patrimonio p
            JOIN sig_detalle_activos d ON
                p.sec_ejec = d.sec_ejec 
                AND p.tipo_modalidad = d.tipo_modalidad 
                AND p.secuencia = d.secuencia 
            JOIN sig_movimiento_activo m ON
                d.ano_eje = m.ano_eje 
                AND d.sec_ejec = m.sec_ejec 
                AND d.mes_proceso = m.mes_proceso 
                AND d.tipo_movimto = m.tipo_movimto 
                AND d.nro_movimto = m.nro_movimto 
            WHERE 
                p.sec_ejec = sig_patrimonio.sec_ejec 
                AND p.tipo_modalidad = sig_patrimonio.tipo_modalidad 
                AND p.secuencia = sig_patrimonio.secuencia 
                AND (m.tipo_movimto = 'S' AND m.tipo_transac = 5 OR m.tipo_movimto = 'I' AND m.tipo_transac = 12)
        )
        AND NOT EXISTS (
            SELECT 1 
            FROM sig_asignaciones a
            WHERE 
                sig_patrimonio.sec_ejec = a.sec_ejec 
                AND sig_patrimonio.tipo_modalidad = a.tipo_modalidad 
                AND sig_patrimonio.secuencia = a.secuencia 
                AND a.ano_eje = 2024
        )
    UNION
    SELECT DISTINCT 
        sig_patrimonio.secuencia,   
        sig_patrimonio.codigo_activo,   
        sig_patrimonio.codigo_barra,   
        sig_patrimonio.descripcion,   
        sig_patrimonio.nro_serie,
        sig_patrimonio.nro_orden 
    FROM 
        sig_patrimonio
    JOIN 
        sig_detalle_activos ON
        sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec 
        AND sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad 
        AND sig_detalle_activos.secuencia = sig_patrimonio.secuencia 
    JOIN 
        sig_asignaciones ON
        sig_asignaciones.ano_eje = sig_detalle_activos.ano_eje 
        AND sig_asignaciones.sec_ejec = sig_detalle_activos.sec_ejec 
        AND sig_asignaciones.tipo_modalidad = sig_detalle_activos.tipo_modalidad 
        AND sig_asignaciones.secuencia = sig_detalle_activos.secuencia
    WHERE 
        sig_patrimonio.sec_ejec = 1137 
        AND sig_patrimonio.tipo_modalidad = 1 
        AND sig_detalle_activos.tipo_movimto IN ('A','I') 
        AND sig_patrimonio.tipo_bien = 'B' 
        AND ('%' = '%' OR sig_patrimonio.grupo_bien = '%')
        AND ('%' = '%' OR sig_patrimonio.clase_bien = '%')
        AND (:familiaBien IS NULL OR sig_patrimonio.familia_bien = :familiaBien)
        AND sig_detalle_activos.ano_eje = 2024 
        AND (:startSeq IS NULL OR sig_patrimonio.secuencia >= :startSeq)
        AND (:endSeq IS NULL OR sig_patrimonio.secuencia <= :endSeq)
        AND (:startCodigoActivo IS NULL OR sig_patrimonio.codigo_activo >= :startCodigoActivo)
        AND (:endCodigoActivo IS NULL OR sig_patrimonio.codigo_activo <= :endCodigoActivo)
        AND (0 = 0 OR (:sede IS NULL OR sig_asignaciones.sede_entrega = :sede))
        AND (0 = 0 OR (:pliego IS NULL OR sig_asignaciones.pliego_entrega = :pliego))
        AND (:centroCosto IS NULL OR sig_asignaciones.centro_entrega = :centroCosto)
        AND (0 = 0 OR (:tipoUbicac IS NULL OR sig_asignaciones.tipo_ubicac_entr = :tipoUbicac AND sig_asignaciones.cod_ubicac_entr = :codUbicac))
        AND (:empleadoFinal IS NULL OR sig_asignaciones.empleado_final_entr = :empleadoFinal)
        AND (:desc IS NULL OR sig_patrimonio.descripcion LIKE :desc)
        AND sig_asignaciones.nro_asignac = (
            SELECT MAX(a.nro_asignac) 
            FROM sig_asignaciones a
            WHERE 
                sig_asignaciones.ano_eje = a.ano_eje 
                AND sig_asignaciones.sec_ejec = a.sec_ejec 
                AND sig_asignaciones.tipo_modalidad = a.tipo_modalidad 
                AND sig_asignaciones.secuencia = a.secuencia
        )
        AND NOT EXISTS (
            SELECT 1 
            FROM sig_patrimonio p
            JOIN sig_detalle_activos d ON
                p.sec_ejec = d.sec_ejec 
                AND p.tipo_modalidad = d.tipo_modalidad 
                AND p.secuencia = d.secuencia 
            JOIN sig_movimiento_activo m ON
                d.ano_eje = m.ano_eje 
                AND d.sec_ejec = m.sec_ejec 
                AND d.mes_proceso = m.mes_proceso 
                AND d.tipo_movimto = m.tipo_movimto 
                AND d.nro_movimto = m.nro_movimto 
            WHERE 
                p.sec_ejec = sig_patrimonio.sec_ejec 
                AND p.tipo_modalidad = sig_patrimonio.tipo_modalidad 
                AND p.secuencia = sig_patrimonio.secuencia 
                AND (m.tipo_movimto = 'S' AND m.tipo_transac = 5 OR m.tipo_movimto = 'I' AND m.tipo_transac = 12)
        )
        ORDER BY sig_patrimonio.secuencia DESC
  `;
  console.log('====================================');
  console.log({
    familiaBien: req.query.familiaBien || null,
    startSeq: req.query.startSeq || null,
    endSeq: req.query.endSeq || null,
    startCodigoActivo: req.query.startCodigoActivo || null,
    endCodigoActivo: req.query.endCodigoActivo || null,
    sede: req.query.sede || null,
    pliego: req.query.pliego || null,
    centroCosto: req.query.centroCosto || null,
    tipoUbicac: req.query.tipoUbicac || null,
    codUbicac: req.query.codUbicac || null,
    empleadoFinal: req.query.empleadoFinal || null,
    desc: req.query.desc ? `%${req.query.desc}%` : null
  });
  console.log('====================================');
    const etiquetas = await sequelize.query(sqlQuery, {
      replacements: {
        familiaBien: req.query.familiaBien || null,
        startSeq: req.query.startSeq || null,
        endSeq: req.query.endSeq || null,
        startCodigoActivo: req.query.startCodigoActivo || null,
        endCodigoActivo: req.query.endCodigoActivo || null,
        sede: req.query.sede || null,
        pliego: req.query.pliego || null,
        centroCosto: req.query.centroCosto || null,
        tipoUbicac: req.query.tipoUbicac || null,
        codUbicac: req.query.codUbicac || null,
        empleadoFinal: req.query.empleadoFinal || null,
        desc: req.query.desc ? `%${req.query.desc}%` : null
      },
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ data: etiquetas });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};

// const prueba = async (req, res, next) => {
//   try {
//     // Obtener registros del año actual incluyendo datos de sig_patrimonio
//     const sqlQuery = `

//     SELECT DISTINCT 
//     sig_patrimonio.secuencia,   
//     sig_patrimonio.codigo_activo,   
//     sig_patrimonio.codigo_barra,   
//     sig_patrimonio.descripcion,   
//     sig_patrimonio.nro_serie  
// FROM sig_patrimonio
// JOIN sig_detalle_activos ON
//     sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec AND  
//     sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad AND  
//     sig_detalle_activos.secuencia = sig_patrimonio.secuencia 
// LEFT JOIN ejecutora ON
//     sig_patrimonio.sec_ejec = ejecutora.sec_ejec
// WHERE
//     sig_detalle_activos.ano_eje = 2024 AND  
//     sig_detalle_activos.sec_ejec = 1137 AND  
//     sig_detalle_activos.tipo_modalidad = 1 AND  
//     sig_detalle_activos.tipo_movimto IN ('A','I') AND  
//     sig_patrimonio.tipo_bien = 'B' AND
//     ( ('%' = '%' OR '%' <> '%' AND sig_patrimonio.grupo_bien = '%') AND  
//     ('%' = '%' OR '%' <> '%' AND sig_patrimonio.clase_bien = '%') AND  
//     ('%' = '%' OR '%' <> '%' AND sig_patrimonio.familia_bien = '%') ) AND
//     ( ('0' = '0' OR 
//     ('0' = '1' AND sig_patrimonio.codigo_activo >= '' AND sig_patrimonio.codigo_activo <= '') OR  
//     ('0' = '2' AND sig_patrimonio.secuencia >= '' AND sig_patrimonio.secuencia <= '')) ) AND
//     ( 0 = 0 OR (0 <> 0 AND sig_patrimonio.sede = 0 AND sig_patrimonio.pliego = '') ) AND
//     ( '01.02.03' = '%' OR '01.02.03' <> '%' AND sig_patrimonio.centro_costo = '01.02.03' ) AND
//     ( 0 = 0 OR (0 <> 0 AND sig_patrimonio.tipo_ubicac = 0 AND sig_patrimonio.cod_ubicac = '') ) AND
//     ( '%' = '%' OR '%' <> '%' AND sig_patrimonio.empleado_final = '%' ) AND
//     NOT EXISTS (
//         SELECT p.secuencia 
//         FROM sig_patrimonio p
//         JOIN sig_detalle_activos d ON
//             p.sec_ejec = d.sec_ejec AND 
//             p.tipo_modalidad = d.tipo_modalidad AND 
//             p.secuencia = d.secuencia 
//         JOIN sig_movimiento_activo m ON
//             d.ano_eje = m.ano_eje AND 
//             d.sec_ejec = m.sec_ejec AND 
//             d.mes_proceso = m.mes_proceso AND 
//             d.tipo_movimto = m.tipo_movimto AND 
//             d.nro_movimto = m.nro_movimto 
//         WHERE 
//             p.sec_ejec = sig_patrimonio.sec_ejec AND 
//             p.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
//             p.secuencia = sig_patrimonio.secuencia AND 
//             m.tipo_movimto = 'S' AND m.tipo_transac = 5 
//     ) AND
//     NOT EXISTS (
//         SELECT p.secuencia 
//         FROM sig_patrimonio p
//         JOIN sig_detalle_activos d ON
//             p.sec_ejec = d.sec_ejec AND 
//             p.tipo_modalidad = d.tipo_modalidad AND 
//             p.secuencia = d.secuencia 
//         JOIN sig_movimiento_activo m ON
//             d.ano_eje = m.ano_eje AND 
//             d.sec_ejec = m.sec_ejec AND 
//             d.mes_proceso = m.mes_proceso AND 
//             d.tipo_movimto = m.tipo_movimto AND 
//             d.nro_movimto = m.nro_movimto 
//         WHERE 
//             p.sec_ejec = sig_patrimonio.sec_ejec AND 
//             p.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
//             p.secuencia = sig_patrimonio.secuencia AND 
//             m.tipo_movimto = 'I' AND m.tipo_transac = 12 
//     ) AND
//     NOT EXISTS (
//         SELECT a.secuencia 
//         FROM sig_asignaciones a
//         WHERE 
//             sig_patrimonio.sec_ejec = a.sec_ejec AND
//             sig_patrimonio.tipo_modalidad = a.tipo_modalidad AND
//             sig_patrimonio.secuencia = a.secuencia AND
//             a.ano_eje = 2024
//     )
// UNION
// SELECT DISTINCT 
//     sig_patrimonio.secuencia,   
//     sig_patrimonio.codigo_activo,   
//     sig_patrimonio.codigo_barra,   
//     sig_patrimonio.descripcion,   
//     sig_patrimonio.nro_serie  
// FROM sig_patrimonio
// JOIN sig_detalle_activos ON
//     sig_detalle_activos.sec_ejec = sig_patrimonio.sec_ejec AND  
//     sig_detalle_activos.tipo_modalidad = sig_patrimonio.tipo_modalidad AND  
//     sig_detalle_activos.secuencia = sig_patrimonio.secuencia 
// JOIN sig_asignaciones ON
//     sig_asignaciones.ano_eje = sig_detalle_activos.ano_eje AND
//     sig_asignaciones.sec_ejec = sig_detalle_activos.sec_ejec AND
//     sig_asignaciones.tipo_modalidad = sig_detalle_activos.tipo_modalidad AND
//     sig_asignaciones.secuencia = sig_detalle_activos.secuencia
// WHERE 
//     sig_patrimonio.sec_ejec = 1137 AND  
//     sig_patrimonio.tipo_modalidad = 1 AND  
//     sig_detalle_activos.tipo_movimto IN ('A','I') AND  
//     sig_patrimonio.tipo_bien = 'B' AND  
//     ('%' = '%' OR '%' <> '%' AND sig_patrimonio.grupo_bien = '%') AND  
//     ('%' = '%' OR '%' <> '%' AND sig_patrimonio.clase_bien = '%') AND  
//     ('%' = '%' OR '%' <> '%' AND sig_patrimonio.familia_bien = '%') AND  
//     sig_detalle_activos.ano_eje = 2024 AND  
//     sig_detalle_activos.sec_ejec = 1137 AND  
//     sig_detalle_activos.tipo_modalidad = 1 AND  
//     ('0' = '0' OR 
//     ('0' = '1' AND sig_patrimonio.codigo_activo >= '' AND sig_patrimonio.codigo_activo <= '') OR  
//     ('0' = '2' AND sig_patrimonio.secuencia >= '' AND sig_patrimonio.secuencia <= '')) AND  
//     (0 = 0 OR (0 <> 0 AND sig_asignaciones.sede_entrega = 0 AND sig_asignaciones.pliego_entrega = '')) AND
//     ('01.02.03' = '%' OR '01.02.03' <> '%' AND sig_asignaciones.centro_entrega = '01.02.03') AND
//     (0 = 0 OR (0 <> 0 AND sig_asignaciones.tipo_ubicac_entr = 0 AND sig_asignaciones.cod_ubicac_entr = '')) AND
//     ('%' = '%' OR '%' <> '%' AND sig_asignaciones.empleado_final_entr = '%') AND
//     sig_asignaciones.nro_asignac = (
//         SELECT MAX(a.nro_asignac) 
//         FROM sig_asignaciones a
//         WHERE 
//             sig_asignaciones.ano_eje = a.ano_eje AND 
//             sig_asignaciones.sec_ejec = a.sec_ejec AND
//             sig_asignaciones.tipo_modalidad = a.tipo_modalidad AND
//             sig_asignaciones.secuencia = a.secuencia
//     ) AND
//     NOT EXISTS (
//         SELECT p.secuencia 
//         FROM sig_patrimonio p
//         JOIN sig_detalle_activos d ON
//             p.sec_ejec = d.sec_ejec AND 
//             p.tipo_modalidad = d.tipo_modalidad AND 
//             p.secuencia = d.secuencia 
//         JOIN sig_movimiento_activo m ON
//             d.ano_eje = m.ano_eje AND 
//             d.sec_ejec = m.sec_ejec AND 
//             d.mes_proceso = m.mes_proceso AND 
//             d.tipo_movimto = m.tipo_movimto AND 
//             d.nro_movimto = m.nro_movimto 
//         WHERE 
//             p.sec_ejec = sig_patrimonio.sec_ejec AND 
//             p.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
//             p.secuencia = sig_patrimonio.secuencia AND 
//             m.tipo_movimto = 'S' AND m.tipo_transac = 5 
//     ) AND
//     NOT EXISTS (
//         SELECT p.secuencia 
//         FROM sig_patrimonio p
//         JOIN sig_detalle_activos d ON
//             p.sec_ejec = d.sec_ejec AND 
//             p.tipo_modalidad = d.tipo_modalidad AND 
//             p.secuencia = d.secuencia 
//         JOIN sig_movimiento_activo m ON
//             d.ano_eje = m.ano_eje AND 
//             d.sec_ejec = m.sec_ejec AND 
//             d.mes_proceso = m.mes_proceso AND 
//             d.tipo_movimto = m.tipo_movimto AND 
//             d.nro_movimto = m.nro_movimto 
//         WHERE 
//             p.sec_ejec = sig_patrimonio.sec_ejec AND 
//             p.tipo_modalidad = sig_patrimonio.tipo_modalidad AND 
//             p.secuencia = sig_patrimonio.secuencia AND 
//             m.tipo_movimto = 'I' AND m.tipo_transac = 12 
//     )

//     `;

//     const registros = await sequelize.query(sqlQuery, {
//       type: QueryTypes.SELECT,
//     });

//     res.status(200).json({
//       msg: "Correlativos generados correctamente.",
//       data: registros,
//     });
//   } catch (error) {
//     console.error("Error al generar los correlativos:", error);
//     res.status(500).json({ message: "Error ", error });
//   }
// };

module.exports = {
  getData,
  getEtiquetas,
//   prueba,
};
