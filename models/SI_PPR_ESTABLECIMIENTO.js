const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_ESTABLECIMIENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_PPR_ESTABLECIMIENTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    DESC_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TIPO_ESTABLEC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    COD_INTERNO: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UBIGEO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    COD_OGEI: {
      type: DataTypes.STRING(20),
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
    tableName: 'SI_PPR_ESTABLECIMIENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_PPR_ESTABLECI__40C63310",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_ESTABLEC" },
          { name: "ID_SI_PPR_ESTABLECIMIENTO" },
        ]
      },
    ]
  });
};
