const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_SEDE', {
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
    SEC_ESTABLEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    ID_SI_PPR_SEDE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
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
    tableName: 'SI_PPR_SEDE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_PPR_SEDE__42AE7B82",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ESTABLEC" },
          { name: "ID_SI_PPR_SEDE" },
        ]
      },
    ]
  });
};
