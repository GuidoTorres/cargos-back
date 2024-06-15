const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_ESTRATEGIA_NACIONAL_NOMBRE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    AMBITO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_PRESUPUESTAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_ESTRATEGIA_NACIONAL_NOMBRE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_ESTRATEGIA_NACIONAL_NOMBRE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "ESTRATEGIA_NACIONAL" },
        ]
      },
    ]
  });
};
