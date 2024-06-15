const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PROGRAMACION_ID_KIT', {
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
    ID_SI_PROGRAMACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_PROGRAMACION_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ID_ITEM_ID: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ID_KIT: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD_UNITARIA: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
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
    tableName: 'SI_PROGRAMACION_ID_KIT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_PROGRAMACION___4F145267",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_PROGRAMACION" },
          { name: "ID_SI_PROGRAMACION_DETA" },
          { name: "ID_ITEM_ID" },
        ]
      },
    ]
  });
};
