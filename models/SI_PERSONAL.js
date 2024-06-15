const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PERSONAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_PERSONAL: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_DEPEND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_COMPLETO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    GRADO_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_GRADO_INST: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DOCUM_IDENT: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_PROF: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NOMBRE_PROF: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_EMPLEADO: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(5,3),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    COD_ESTABLEC_SIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_COD_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    COD_CATEGORIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    D_CORTO_COD_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_INGRESO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_NAC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEXO_EMPLEADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CIVIL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_COLEGIATURA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SITUACION_LABORAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DESCRIPCION_SITUACION_LABORAL: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    REGIMEN_LABORAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION_REGIMEN_LABORAL: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CONDICION_LABORAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION_CONDICION_LABORAL: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_INGRESO_SIAF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CESE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GRUPO_OCUPACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION_GRUPO_OCUPACIONAL: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CATEGORIA_OCUPACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    D_CAT_OCUPACIONAL: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PERSONAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_PERSONAL__54CD2BBD",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
          { name: "ID_SI_PERSONAL" },
        ]
      },
    ]
  });
};
