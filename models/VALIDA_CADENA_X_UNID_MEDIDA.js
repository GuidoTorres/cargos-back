const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VALIDA_CADENA_X_UNID_MEDIDA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VALIDA_CADENA_X_UNID_MEDIDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VALIDA_CADENA_X_UNID_MEDIDA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "ESTRATEGIA_NACIONAL" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
