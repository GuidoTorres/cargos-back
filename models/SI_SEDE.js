const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_SEDE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    SEDE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ID_SI_SEDE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_SEDE: {
      type: DataTypes.STRING(50),
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
    tableName: 'SI_SEDE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_SEDE__3EDDEA9E",
        unique: true,
        fields: [
          { name: "SEDE" },
          { name: "PLIEGO" },
          { name: "ID_SI_SEDE" },
        ]
      },
    ]
  });
};
