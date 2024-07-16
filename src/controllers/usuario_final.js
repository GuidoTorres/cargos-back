const { Op, QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const {models} = require('./../../config/database')

const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };
  
const getData = async(req,res) =>{

    try {
        const sqlQuery = `
        SELECT 
        SIG_PERSONAL.EMPLEADO, 
        SIG_PERSONAL.APELLIDO_PATERNO, 
        SIG_PERSONAL.APELLIDO_MATERNO, 
        SIG_PERSONAL.NOMBRES
    FROM 
        SIG_PATRIMONIO
    JOIN 
        SIG_DETALLE_ACTIVOS ON SIG_PATRIMONIO.SEC_EJEC = SIG_DETALLE_ACTIVOS.SEC_EJEC
        AND SIG_PATRIMONIO.TIPO_MODALIDAD = SIG_DETALLE_ACTIVOS.TIPO_MODALIDAD
        AND SIG_PATRIMONIO.SECUENCIA = SIG_DETALLE_ACTIVOS.SECUENCIA
    JOIN 
        SIG_PERSONAL ON SIG_PERSONAL.SEC_EJEC = SIG_PATRIMONIO.SEC_EJEC
        AND SIG_PERSONAL.EMPLEADO = SIG_PATRIMONIO.EMPLEADO_FINAL
    WHERE 
        SIG_DETALLE_ACTIVOS.ANO_EJE = '2024' 
        AND SIG_DETALLE_ACTIVOS.SEC_EJEC = '1137'
        AND SIG_DETALLE_ACTIVOS.TIPO_MODALIDAD = '1'
        AND NOT EXISTS (
            SELECT 1 
            FROM SIG_ASIGNACIONES A 
            WHERE SIG_PATRIMONIO.SEC_EJEC = A.SEC_EJEC
                AND SIG_PATRIMONIO.TIPO_MODALIDAD = A.TIPO_MODALIDAD
                AND SIG_PATRIMONIO.EMPLEADO_FINAL = A.EMPLEADO_ENTREGA
                AND A.ANO_EJE = '2024'
        )
    UNION
    SELECT 
        SIG_PERSONAL.EMPLEADO, 
        SIG_PERSONAL.APELLIDO_PATERNO, 
        SIG_PERSONAL.APELLIDO_MATERNO, 
        SIG_PERSONAL.NOMBRES
    FROM 
        SIG_ASIGNACIONES
    JOIN 
        SIG_PERSONAL ON SIG_PERSONAL.SEC_EJEC = SIG_ASIGNACIONES.SEC_EJEC
        AND SIG_PERSONAL.EMPLEADO = SIG_ASIGNACIONES.EMPLEADO_FINAL_ENTR
    WHERE 
        SIG_ASIGNACIONES.ANO_EJE = '2024'
        AND SIG_ASIGNACIONES.SEC_EJEC = '1137'
        AND SIG_ASIGNACIONES.TIPO_MODALIDAD = '1'
        AND SIG_ASIGNACIONES.NRO_ASIGNAC = (
            SELECT MAX(A.NRO_ASIGNAC) 
            FROM SIG_ASIGNACIONES A 
            WHERE A.ANO_EJE = SIG_ASIGNACIONES.ANO_EJE
                AND A.SEC_EJEC = SIG_ASIGNACIONES.SEC_EJEC
                AND A.TIPO_MODALIDAD = SIG_ASIGNACIONES.TIPO_MODALIDAD
                AND A.SECUENCIA = SIG_ASIGNACIONES.SECUENCIA
        )
    GROUP BY 
        SIG_PERSONAL.EMPLEADO, 
        SIG_PERSONAL.NOMBRES,
        SIG_PERSONAL.APELLIDO_PATERNO, 
        SIG_PERSONAL.APELLIDO_MATERNO
    ORDER BY
        SIG_PERSONAL.APELLIDO_PATERNO ASC
      `;
      const users = await sequelize.query(sqlQuery, {
        type: QueryTypes.SELECT,
      });

      const uniqueUsers = [];
      const seenUsers = new Set();
  
      for (const user of users) {
        const uniqueKey = `${user.APELLIDO_PATERNO}-${user.APELLIDO_MATERNO}-${user.NOMBRES}`;
        if (!seenUsers.has(uniqueKey)) {
          uniqueUsers.push(user);
          seenUsers.add(uniqueKey);
        }
      }

      const formattedData = uniqueUsers.map(item => {
        return {
          empleado: item.EMPLEADO,
          AP_MATE: capitalizeFirstLetter(item.APELLIDO_MATERNO),
          AP_PATE: capitalizeFirstLetter(item.APELLIDO_PATERNO),
          DE_NOMB: capitalizeFirstLetter(item.NOMBRES),
        };
      })
      return res.status(200).json({ data: formattedData });
    } catch (error) {
        res.status(500).json();
        console.log(error);
    }



}
module.exports ={ getData}