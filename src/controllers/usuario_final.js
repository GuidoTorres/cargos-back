const { Op, QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");
const {models} = require('./../../config/database3');
const { encrypt } = require("../helpers/handleBcrypt");

const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  };
  
const getData = async(req,res) =>{
  const currentYear = new Date().getFullYear();

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
        SIG_DETALLE_ACTIVOS.ANO_EJE = :currentYear 
        AND SIG_DETALLE_ACTIVOS.SEC_EJEC = '1137'
        AND SIG_DETALLE_ACTIVOS.TIPO_MODALIDAD = '1'
        AND NOT EXISTS (
            SELECT 1 
            FROM SIG_ASIGNACIONES A 
            WHERE SIG_PATRIMONIO.SEC_EJEC = A.SEC_EJEC
                AND SIG_PATRIMONIO.TIPO_MODALIDAD = A.TIPO_MODALIDAD
                AND SIG_PATRIMONIO.EMPLEADO_FINAL = A.EMPLEADO_ENTREGA
                AND A.ANO_EJE = :currentYear
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
        SIG_ASIGNACIONES.ANO_EJE = :currentYear
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
        replacements:{currentYear},
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

const postUsuario = async (req, res, next) => {
    const { nombre, contrasenia, estado, usuario } = req.body;
    if (!nombre || !contrasenia) {
      return res.status(400).json({ msg: "Faltan campos requeridos" });
    }
    const passwordHash = await encrypt(contrasenia);
    let info = {
      nombre: nombre,
      usuario: usuario,
      contrasenia: passwordHash,
      estado: estado || true,
    };
    try {
      const getUser = await models.usuarios.findAll({
        where: { usuario: usuario },
      });
  
      if (getUser.length > 0) {
        return res.status(409).json({
          msg: "El nombre de usuario ya existe, intente con otro!",
          status: 500,
        });
      } else {
        const nuevoUsuario = await models.usuarios.create(info);
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
  
    if (req.body.contrasenia) {
      try {
        const passwordHash = await encrypt(req.body.contrasenia);
        info.contrasenia = passwordHash;
      } catch (error) {
        return res.status(500).json({ msg: "Error al encriptar la contraseña", status: 500 });
      }
    }
  
    try {
      // Actualizar la información del usuario
      await models.usuarios.update(info, { where: { id: id } });
      return res
        .status(200)
        .json({ msg: "Usuario actualizado con éxito!", status: 200 });
    } catch (error) {
      res.status(500).json({ msg: "No se pudo actualizar", status: 500 });
      console.log(error);
    }
  };
  
  const deleteUsuario = async (req, res, next) => {
    let id = req.params.id;
    try {
      await models.usuarios.destroy({ where: { id: id } });
      return res
        .status(200)
        .json({ msg: "Usuario eliminado con éxito!", status: 200 });
    } catch (error) {
      res.status(500).json({ msg: "No se pudo eliminar", status: 500 });
    }
  };

module.exports ={ getData, postUsuario, updateUsuario, deleteUsuario}