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

const getConsultaBienesSigaSbn = async (req, res) => {
  try {
    const { sede_id, ubicacion_id, dni, sbn, serie } = req.query;

    // Construir dinámicamente la cláusula WHERE
    let whereClause = `
        DA.ANO_EJE='2024' AND (DA.TIPO_MOVIMTO IN ('A', 'I'))
      `;

    // Agregar filtros dinámicos si están presentes
    const replacements = {};

    if (sbn) {
      whereClause += ` AND SP.CODIGO_ACTIVO = :sbn`;
      replacements.sbn = sbn;
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

    return res.status(200).json({ data: etiquetas });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getBienesPrueba = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT SP.SECUENCIA, SP.CODIGO_ACTIVO, SP.DESCRIPCION, SP.SECUENCIA, SP.ESTADO, SP.ESTADO_CONSERV, S.SEDE, S.nombre_sede, CC.CENTRO_COSTO, CC.NOMBRE_DEPEND, 
        UF.TIPO_UBICAC, UF.COD_UBICAC, UF.UBICAC_FISICA, P.docum_ident, P.nombre_completo, SP.NRO_SERIE, M.NOMBRE AS MARCA, SP.MODELO, SP.MEDIDAS, 
        SP.CARACTERISTICAS, SP.OBSERVACIONES  FROM	SIG_PATRIMONIO AS SP
	INNER JOIN SIG_DETALLE_ACTIVOS AS DA ON (SP.ANO_EJE=DA.ANO_EJE AND SP.SEC_EJEC =DA.SEC_EJEC AND SP.SECUENCIA=DA.SECUENCIA AND SP.TIPO_MODALIDAD=DA.TIPO_MODALIDAD)
	INNER JOIN SIG_CENTRO_COSTO AS CC ON (CC.ANO_EJE = SP.ANO_EJE AND CC.SEC_EJEC=SP.SEC_EJEC AND CC.CENTRO_COSTO = SP. CENTRO_COSTO)
	INNER JOIN SIG_SEDES AS S ON (S.sede = SP.SEDE)
	INNER JOIN SIG_UBICAC_FISICA AS UF ON (UF.TIPO_UBICAC= SP.TIPO_UBICAC AND UF.COD_UBICAC=SP.COD_UBICAC)
	INNER JOIN sig_personal P ON (P.sec_ejec= SP.SEC_EJEC AND P.empleado=SP.EMPLEADO)
	INNER JOIN MARCA M ON (M.MARCA= SP.MARCA AND M.TIPO_MARCA=SP.TIPO_MARCA)
where  DA.ANO_EJE='2024' AND (DA.TIPO_MOVIMTO IN ('A', 'I')) 
ORDER BY SP.CODIGO_ACTIVO
      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ cantidad: bienes.length, data: bienes });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};

const getDependencias = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT TIPO_UBICAC, COD_UBICAC, UBICAC_FISICA

FROM 
    SIG_UBICAC_FISICA


      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ cantidad: bienes.length, data: bienes });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};

const getMarcas = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT *
    FROM 
    SIG_UBICAC_FISICA

    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ cantidad: bienes.length, data: bienes });
  } catch (error) {
    res.status(500).json();
    console.error("====================================");
    console.error(error);
    console.error("====================================");
  }
};
const getUbicacion = async (req, res) => {
  try {
    const sqlQuery = `
    SELECT 
    CC.CENTRO_COSTO, 
    CC.NOMBRE_DEPEND, 
    UF.TIPO_UBICAC, 
    UF.COD_UBICAC, 
    UF.UBICAC_FISICA
FROM 
    SIG_PATRIMONIO AS SP
INNER JOIN 
    SIG_CENTRO_COSTO AS CC 
    ON CC.ANO_EJE = SP.ANO_EJE 
    AND CC.SEC_EJEC = SP.SEC_EJEC 
    AND CC.CENTRO_COSTO = SP.CENTRO_COSTO
INNER JOIN 
    SIG_UBICAC_FISICA AS UF 
    ON UF.TIPO_UBICAC = SP.TIPO_UBICAC 
    AND UF.COD_UBICAC = SP.COD_UBICAC
WHERE 
    SP.ANO_EJE = '2024'
ORDER BY 
    SP.CODIGO_ACTIVO;



      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    const uniqueCentroCosto = bienes

      .filter((item) => item.COD_UBICAC === "0") // Filtrar por COD_UBICAC
      .reduce((acc, current) => {
        const exists = acc.find(
          (item) => item.CENTRO_COSTO === current.CENTRO_COSTO
        );
        if (!exists) {
          acc.push(current); // Solo añadir si no existe ya ese CENTRO_COSTO
        }
        return acc;
      }, []);

    uniqueCentroCosto.sort((a, b) => a.TIPO_UBICAC - b.TIPO_UBICAC);
    return res
      .status(200)
      .json({ cantidad: uniqueCentroCosto.length, data: uniqueCentroCosto });
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
  getDependencias,
  getUbicacion,
  getMarcas,
  getConsultaBienesSigaSbn,
};
