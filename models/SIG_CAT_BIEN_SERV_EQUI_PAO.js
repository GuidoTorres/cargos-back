const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CAT_BIEN_SERV_EQUI_PAO', {
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
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_BIEN_E: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN_E: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLASE_BIEN_E: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN_E: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN_E: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PRECIO_REF_E: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA_E: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FACTOR_CONV: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ESTADO_E: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CAT_BIEN_SERV_EQUI_PAO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CAT_BSERV_EQUI_PAO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
    ]
  });
};
