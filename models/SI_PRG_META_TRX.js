const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PRG_META_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_FASE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    D_UNIDAD_MEDIDA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TAREA_GENERAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_FUNC_REQ: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
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
    tableName: 'SI_PRG_META_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRG_META_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "NRO_FASE" },
          { name: "SEC_FUNC" },
          { name: "SEC_EJEC" },
        ]
      },
    ]
  });
};
