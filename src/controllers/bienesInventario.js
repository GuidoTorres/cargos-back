const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { models } = require("./../../config/database");
const dayjs = require("dayjs");

const getConsultaBienesSiga = async (req, res) => {
  try {
    const sbnsPrueba = [
      "046436500102",
      "046436500104",
      "046436500113",
      "046436500115",
      "112236140001",
      "112236140012",
      "112236140013",
      "112236140025",
      "112263860232",
      "112263860235",
      "112271780136",
      "112271780139",
      "112271780359",
      "112271780366",
      "112279700018",
      "112279700066",
      "112279700067",
      "112279700073",
      "112279700117",
      "112279700118",
      "140400040015",
      "140400040016",
      "140400040017",
      "140400040018",
      "140400040019",
      "140400040020",
      "140400040021",
      "140400040022",
      "140400040023",
      "140400040024",
      "140400040025",
      "140400040026",
      "140400040027",
      "140400040028",
      "140400040029",
      "140400040030",
      "140400040031",
      "140400040032",
      "140400040033",
      "140400040034",
      "140400040035",
      "140400040036",
      "140400040037",
      "140400040038",
      "140400040039",
      "140400040040",
      "140400040041",
      "140400040042",
      "140400040043",
      "140400040044",
      "140400040046",
      "140400040047",
      "140400040048",
      "140400040049",
      "140400040050",
      "140400040051",
      "140400040052",
      "140400040053",
      "140400040054",
      "140400040055",
      "140400040056",
      "140400040057",
      "140400040058",
      "140400040059",
      "140400040061",
      "140400040063",
      "140400040064",
      "140400040065",
      "140400040066",
      "140400040067",
      "140400040068",
      "140400040069",
      "140400040070",
      "140400040071",
      "140400040072",
      "140400040073",
      "140400040074",
      "252232320007",
      "252235860026",
      "252235860030",
      "322200500004",
      "322218180040",
      "322218180043",
      "322218180080",
      "322221710038",
      "322239390689",
      "322239390690",
      "322239390692",
      "322257070018",
      "322257070021",
      "322260610002",
      "322260610018",
      "322260610022",
      "322260610028",
      "322264140022",
      "322264140024",
      "322264140029",
      "326483000021",
      "326483000230",
      "462200500110",
      "462200500113",
      "462200500118",
      "462200500128",
      "462200500131",
      "462200500138",
      "462200500141",
      "462200500150",
      "462200500151",
      "462200500159",
      "462200500160",
      "462200500170",
      "462200500172",
      "462200500209",
      "462200500210",
      "462200500211",
      "462200500219",
      "462213410037",
      "462243540002",
      "462243540003",
      "462247850001",
      "462252150007",
      "462252150014",
      "462252150028",
      "462252150034",
      "462252150077",
      "462252150089",
      "462252150174",
      "462252150229",
      "462252150239",
      "462252150243",
      "462252150245",
      "462252150247",
      "462252150285",
      "462252150295",
      "462252150326",
      "462260760030",
      "462260760031",
      "462261830013",
      "462265070117",
      "462265070122",
      "462265070126",
      "462286590014",
      "462290890054",
      "462295200008",
    ];

    const replacements = { sbns: sbnsPrueba };

    const sqlQuery = `
      SELECT SP.CODIGO_ACTIVO
      FROM SIG_PATRIMONIO AS SP
      WHERE SP.CODIGO_ACTIVO IN (:sbns)
    `;

    const encontrados = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
      replacements,
    });

    // Extraer los SBNs encontrados en la base de datos
    const sbnsEncontrados = encontrados.map((item) => item.CODIGO_ACTIVO);

    // Identificar los SBNs no encontrados
    const sbnsNoEncontrados = sbnsPrueba.filter(
      (sbn) => !sbnsEncontrados.includes(sbn)
    );

    // Responder con los SBNs encontrados y no encontrados
    return res.status(200).json({
      cantidadEncontrados: sbnsEncontrados.length,
      sbnsEncontrados,
      sbnsNoEncontrados,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

const getConsultaBienesSigaSbn = async (req, res) => {
  try {
    const currentYear = "2025";

    const { sede_id, ubicacion_id, dni, sbn, serie } = req.query;

    // Construir dinámicamente la cláusula WHERE
    let whereClause = `
        DA.ANO_EJE= :currentYear AND (DA.TIPO_MOVIMTO IN ('A', 'I'))
      `;

    // Agregar filtros dinámicos si están presentes
    const replacements = { currentYear };

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
    const currentYear = "2025";

    const sqlQuery = `
    SELECT SP.SECUENCIA, SP.CODIGO_ACTIVO, SP.DESCRIPCION, SP.ESTADO, SP.ESTADO_CONSERV, S.SEDE, S.nombre_sede, CC.CENTRO_COSTO, CC.NOMBRE_DEPEND, 
    UF.TIPO_UBICAC, UF.COD_UBICAC, UF.UBICAC_FISICA, P.docum_ident, P.nombre_completo, SP.NRO_SERIE, M.NOMBRE AS MARCA, SP.MODELO, SP.MEDIDAS, 
    SP.CARACTERISTICAS, SP.OBSERVACIONES  FROM	SIG_PATRIMONIO AS SP
INNER JOIN SIG_DETALLE_ACTIVOS AS DA ON (SP.ANO_EJE=DA.ANO_EJE AND SP.SEC_EJEC =DA.SEC_EJEC AND SP.SECUENCIA=DA.SECUENCIA AND SP.TIPO_MODALIDAD=DA.TIPO_MODALIDAD)
INNER JOIN SIG_CENTRO_COSTO AS CC ON (CC.ANO_EJE = SP.ANO_EJE AND CC.SEC_EJEC=SP.SEC_EJEC AND CC.CENTRO_COSTO = SP. CENTRO_COSTO)
INNER JOIN SIG_SEDES AS S ON (S.sede = SP.SEDE)
INNER JOIN SIG_UBICAC_FISICA AS UF ON (UF.TIPO_UBICAC= SP.TIPO_UBICAC AND UF.COD_UBICAC=SP.COD_UBICAC)
INNER JOIN sig_personal P ON (P.sec_ejec= SP.SEC_EJEC AND P.empleado=SP.EMPLEADO)
INNER JOIN MARCA M ON (M.MARCA= SP.MARCA AND M.TIPO_MARCA=SP.TIPO_MARCA)
where  DA.ANO_EJE='2025' AND (DA.TIPO_MOVIMTO IN ('A', 'I')) 
ORDER BY SP.CODIGO_ACTIVO
      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      replacements: { currentYear },
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

const PREFIXES = [
  "74222358",
  "95228627",
  "74089500",
  "74084100",
  "74088187",
  "74083200",
  "95228287",
  "74089950",
  "95228117",
  "95221467",
  "74081850",
  "95225812",
  "74087700",
  "74080500",
  "74088224",
  "95226644",
  "74083650",
  "95227834",
  "74089556",
  "95226742",
  "74222726",
  "74088037",
  "74084550",
  "74087250",
  "95228363",
  "74229950",
  "95221561",
  "95225815",
  "74080050",
  "95223791",
  "74083875",
  "74085000",
  "74227274",
  "95227536",
  "95221470",
  "74080950",
  "74089200",
  "95225907",
  "95221816",
  "95222166",
  "95226115",
  "74080275",
  "95227044",
];

async function getBienesFiltrados(req, res) {
  try {
    
    const currentYear =new Date().getFullYear()
    const year = parseInt(req.query.anio, 10) || new Date().getFullYear();

    // Construimos la lista de literales para el IN (...)
    const inList = PREFIXES.map((p) => `'${p}'`).join(",");

    const sql = `
      SELECT
        SP.SECUENCIA,
        SP.CODIGO_ACTIVO,
        SP.DESCRIPCION,
        SP.ESTADO,
        SP.ESTADO_CONSERV,
        S.SEDE,
        S.nombre_sede,
        CC.CENTRO_COSTO,
        CC.NOMBRE_DEPEND,
        UF.TIPO_UBICAC,
        UF.COD_UBICAC,
        UF.UBICAC_FISICA,
        P.docum_ident,
        P.nombre_completo,
        SP.NRO_SERIE,
        M.NOMBRE       AS MARCA,
        SP.MODELO,
        SP.MEDIDAS,
        SP.CARACTERISTICAS,
        SP.OBSERVACIONES,
        SP.FECHA_REG
      FROM SIG_PATRIMONIO SP
      INNER JOIN SIG_DETALLE_ACTIVOS DA
        ON SP.ANO_EJE        = DA.ANO_EJE
       AND SP.SEC_EJEC       = DA.SEC_EJEC
       AND SP.SECUENCIA      = DA.SECUENCIA
       AND SP.TIPO_MODALIDAD = DA.TIPO_MODALIDAD
      INNER JOIN SIG_CENTRO_COSTO CC
        ON CC.ANO_EJE       = SP.ANO_EJE
       AND CC.SEC_EJEC      = SP.SEC_EJEC
       AND CC.CENTRO_COSTO  = SP.CENTRO_COSTO
      INNER JOIN SIG_SEDES S
        ON S.sede = SP.SEDE
      INNER JOIN SIG_UBICAC_FISICA UF
        ON UF.TIPO_UBICAC = SP.TIPO_UBICAC
       AND UF.COD_UBICAC  = SP.COD_UBICAC
      INNER JOIN sig_personal P
        ON P.sec_ejec = SP.SEC_EJEC
       AND P.empleado = SP.EMPLEADO
      INNER JOIN MARCA M
        ON M.MARCA      = SP.MARCA
       AND M.TIPO_MARCA = SP.TIPO_MARCA
      WHERE DA.ANO_EJE= :currentYear
        AND DA.TIPO_MOVIMTO   IN ('A','I')
        AND LEFT(SP.CODIGO_ACTIVO, 8) IN (${inList})
        AND YEAR(SP.FECHA_REG) = :year
      ORDER BY SP.CODIGO_ACTIVO;
    `;

    const bienes = await sequelize.query(sql, {
      replacements: { currentYear, year },
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({
      cantidad: bienes.length,
      data: bienes,
    });
  } catch (error) {
    console.error("Error en getBienesFiltrados:", error);
    return res.status(500).json({
      message: "Error al obtener bienes filtrados.",
    });
  }
}

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
    const currentYear = "2024";
    ///

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
    SP.ANO_EJE = :currentYear
ORDER BY 
    SP.CODIGO_ACTIVO;



      
    `;

    // Ejecutar la consulta
    const bienes = await sequelize.query(sqlQuery, {
      replacements: { currentYear },
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
  getBienesFiltrados,
};
