const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");
const dayjs = require("dayjs");

const getConsultaBienesSiga = async (req, res) => {
  try {
    const { sede_id, ubicacion_id, dni, sbn, serie } = req.query;

    // Construir dinámicamente la cláusula WHERE
    let whereClause = `
        DA.ANO_EJE='2024' AND (DA.TIPO_MOVIMTO IN ('A', 'I'))
      `;

    // Agregar filtros dinámicos si están presentes
    const replacements = {};

    if (sede_id) {
      whereClause += ` AND S.SEDE = :sede_id`;
      replacements.sede_id = sede_id;
    }
    if (ubicacion_id) {
      whereClause += ` AND CONCAT(UF.TIPO_UBICAC, UF.COD_UBICAC) = :ubicacion_id`;
      replacements.ubicacion_id = ubicacion_id;
    }
    if (dni) {
      whereClause += ` AND P.docum_ident = :dni`;
      replacements.dni = dni;
    }
    if (sbn) {
      whereClause += ` AND SP.CODIGO_ACTIVO = :sbn`;
      replacements.sbn = sbn;
    }
    if (serie) {
      whereClause += ` AND SP.NRO_SERIE = :serie`;
      replacements.serie = serie;
    }

    const sqlQuery = `
      SELECT SP.SECUENCIA, SP.CODIGO_ACTIVO, SP.DESCRIPCION, SP.ESTADO, SP.ESTADO_CONSERV, S.SEDE, S.nombre_sede, CC.CENTRO_COSTO, CC.NOMBRE_DEPEND, 
        UF.TIPO_UBICAC, UF.COD_UBICAC, UF.UBICAC_FISICA, P.docum_ident, P.nombre_completo, SP.NRO_SERIE, M.NOMBRE AS MARCA, SP.MODELO, SP.MEDIDAS, 
        SP.CARACTERISTICAS, SP.OBSERVACIONES  
      FROM SIG_PATRIMONIO AS SP
        INNER JOIN SIG_DETALLE_ACTIVOS AS DA ON (SP.ANO_EJE=DA.ANO_EJE AND SP.SEC_EJEC=DA.SEC_EJEC AND SP.SECUENCIA=DA.SECUENCIA AND SP.TIPO_MODALIDAD=DA.TIPO_MODALIDAD)
        INNER JOIN SIG_CENTRO_COSTO AS CC ON (CC.ANO_EJE = SP.ANO_EJE AND CC.SEC_EJEC=SP.SEC_EJEC AND CC.CENTRO_COSTO = SP.CENTRO_COSTO)
        INNER JOIN SIG_SEDES AS S ON (S.sede = SP.SEDE)
        INNER JOIN SIG_UBICAC_FISICA AS UF ON (UF.TIPO_UBICAC = SP.TIPO_UBICAC AND UF.COD_UBICAC = SP.COD_UBICAC)
        INNER JOIN SIG_PERSONAL P ON (P.sec_ejec = SP.SEC_EJEC AND P.empleado = SP.EMPLEADO)
        INNER JOIN MARCA M ON (M.MARCA = SP.MARCA AND M.TIPO_MARCA = SP.TIPO_MARCA)
      WHERE ${whereClause}
      ORDER BY SP.CODIGO_ACTIVO
      `;

    const etiquetas = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
      replacements, // Aquí pasamos los valores reemplazados
    });

    return res
      .status(200)
      .json({ cantidad: etiquetas.length, data: etiquetas });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getBienesPrueba = async (req, res) => {
  try {
    const sqlQuery = `
    WITH bienes_filtrados AS (
      SELECT 
        sig_patrimonio.sec_ejec,
        sig_patrimonio.tipo_modalidad,
        sig_patrimonio.secuencia,
        sig_patrimonio.codigo_activo,
        sig_patrimonio.descripcion,
        sig_personal_a.apellido_paterno,
        sig_personal_a.apellido_materno,
        sig_personal_a.nombres,
        sig_patrimonio.modelo,
        sig_patrimonio.marca,
        marca.nombre AS nombre_marca,
        sig_patrimonio.medidas,
        sig_patrimonio.caracteristicas,
        sig_patrimonio.estado_conserv,
        sig_patrimonio.grupo_bien,
        sig_patrimonio.clase_bien,
        sig_contratistas.nombre_prov,
        sig_patrimonio.nro_orden,
        sig_patrimonio.fecha_compra,
        sig_patrimonio.valor_compra,
        sig_personal_b.nombres AS nombre_usu,
        sig_personal_b.apellido_materno AS materno_usu,
        sig_personal_b.apellido_paterno AS paterno_usu,
        sig_patrimonio.valor_inicial,
        sig_patrimonio.nro_serie,
        sig_patrimonio.empleado_final,
        sig_patrimonio.codigo_barra,
        sig_patrimonio.FECHA_ALTA_ORIGEN,
        ROW_NUMBER() OVER (PARTITION BY sig_patrimonio.codigo_activo ORDER BY sig_patrimonio.codigo_activo) AS row_num
      FROM sig_patrimonio
      LEFT JOIN sig_contratistas ON sig_patrimonio.proveedor = sig_contratistas.proveedor
      LEFT JOIN sig_almacen ON sig_patrimonio.sec_ejec = sig_almacen.sec_ejec AND sig_patrimonio.almacen = sig_almacen.almacen AND sig_patrimonio.sec_almacen = sig_almacen.sec_almacen
      LEFT JOIN plan_ctb_sub_cta ON sig_patrimonio.ano_eje = plan_ctb_sub_cta.ano_eje AND sig_patrimonio.mayor = plan_ctb_sub_cta.mayor AND sig_patrimonio.sub_cta = plan_ctb_sub_cta.sub_cta
      LEFT JOIN marca ON sig_patrimonio.marca = marca.marca AND sig_patrimonio.tipo_marca = marca.tipo_marca
      LEFT JOIN sig_detalle_activos ON sig_patrimonio.sec_ejec = sig_detalle_activos.sec_ejec AND sig_patrimonio.tipo_modalidad = sig_detalle_activos.tipo_modalidad AND sig_patrimonio.secuencia = sig_detalle_activos.secuencia
      LEFT JOIN sig_asignaciones ON sig_asignaciones.ano_eje = sig_detalle_activos.ano_eje AND sig_asignaciones.sec_ejec = sig_detalle_activos.sec_ejec AND sig_asignaciones.tipo_modalidad = sig_detalle_activos.tipo_modalidad AND sig_asignaciones.secuencia = sig_detalle_activos.secuencia
      LEFT JOIN sig_centro_costo ON sig_asignaciones.ano_eje = sig_centro_costo.ano_eje AND sig_asignaciones.sec_ejec = sig_centro_costo.sec_ejec AND sig_asignaciones.centro_costo = sig_centro_costo.centro_costo
      LEFT JOIN sig_personal sig_personal_a ON sig_asignaciones.sec_ejec = sig_personal_a.sec_ejec AND sig_asignaciones.empleado = sig_personal_a.empleado
      LEFT JOIN sig_personal sig_personal_b ON sig_asignaciones.sec_ejec = sig_personal_b.sec_ejec AND sig_asignaciones.empleado_final = sig_personal_b.empleado
      LEFT JOIN sig_ubicac_fisica ON sig_asignaciones.tipo_ubicac = sig_ubicac_fisica.tipo_ubicac AND sig_asignaciones.cod_ubicac = sig_ubicac_fisica.cod_ubicac
      LEFT JOIN sig_sedes ON sig_asignaciones.pliego = sig_sedes.pliego AND sig_asignaciones.sede = sig_sedes.sede
      WHERE 
        sig_detalle_activos.ano_eje > 2010
        AND sig_detalle_activos.sec_ejec = 1137
        AND sig_detalle_activos.tipo_modalidad = 1
        AND (
            (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 8) OR
            (sig_patrimonio.grupo_bien = 95 AND sig_patrimonio.clase_bien = 22) OR
            (sig_patrimonio.grupo_bien = 74 AND sig_patrimonio.clase_bien = 22)
        )
    )
    SELECT *
    FROM bienes_filtrados
    WHERE row_num = 1;
      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    // Filtrar duplicados usando un Map para mejorar el rendimiento
    const filteredEtiquetas = [];
    const seenCodigos = new Map();

    for (const etiqueta of bienes) {
      if (!seenCodigos.has(etiqueta.codigo_activo)) {
        filteredEtiquetas.push(etiqueta);
        seenCodigos.set(etiqueta.codigo_activo, true); // Usar Map para almacenar códigos vistos
      }
    }

    // Formatear los datos
    const format = filteredEtiquetas.map((item) => {
      return {
        secuencia: item?.secuencia,
        sbn: item?.codigo_activo,
        descripcion: item?.descripcion,
        estado: item?.estado_conserv,
        modelo: item?.modelo,
        marca: item?.nombre_marca,
        caracteristicas: item?.caracteristicas,
        estado_conserv: item?.estado_conserv,
        nro_orden: item?.nro_orden,
        fecha_ingreso: item?.fecha_compra,
        valor_compra: item?.valor_compra,
        ubicac_fisica: item?.ubicac_fisica,
        empleado_final: item?.empleado_final,
        usuario_final: `${item?.nombre_usu} ${item?.paterno_usu} ${item?.materno_usu}`,
        nro_serie: item?.nro_serie,
        proveedor: item?.nombre_prov,
        grupo_bien: item.grupo_bien,
        clase_bien: item.clase_bien,
      };
    });

    return res.status(200).json({ cantidad: format.length, data: format });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};

module.exports = {
  getConsultaBienesSiga,
  getBienesPrueba,
};
