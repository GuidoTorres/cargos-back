const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_subactividad', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PROYECTO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_POA: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SUBCOMPONENTE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ACTIVIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SUBACTIVIDAD: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FONDO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PROYECTO_MAE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    FECHA_TCAMBIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    UNIDAD_MF: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CANTIDAD_MF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    GENERICO_POA: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    PERIODO_INICIO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    PERIODO_FIN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    VALOR_MON_RPROG: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    VALOR_SOL_RPROG: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_subactividad',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_subacti__104D18E7",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "PROYECTO" },
          { name: "CODIGO_POA" },
        ]
      },
    ]
  });
};
