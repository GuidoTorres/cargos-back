const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_MARCA', {
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
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
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
    tableName: 'SI_MARCA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_MARCA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
      {
        name: "XPKSI_MARCA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
    ]
  });
};
