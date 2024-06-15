const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Act_Proy_Nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    tipo_act_proy: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Act_Proy_Nombre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACT_PROY_NOMBRE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "act_proy" },
        ]
      },
    ]
  });
};
