const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_HT_META', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SUBFASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_HT: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
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
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    MONTO_CN: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NOMBRE_META: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_HT_META',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_HT_META",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SUBFASE" },
          { name: "SEC_HT" },
        ]
      },
    ]
  });
};
