const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PROGRAMACION_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ID_SI_PROGRAMACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
    },
    NRO_FASE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
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
      allowNull: true
    },
    D_META: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    D_SUB_FINALIDAD: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    D_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    D_COD_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    COD_CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    D_COD_CATEGORIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    D_CORTO_COD_CATEGORIA: {
      type: DataTypes.STRING(20),
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
    tableName: 'SI_PROGRAMACION_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
