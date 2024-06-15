const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ppr_espserv', {
    sub_especialidad: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    des_sub_especialidad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_ppr_espserv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_ppr___31497B6F21524BC1",
        unique: true,
        fields: [
          { name: "sub_especialidad" },
        ]
      },
    ]
  });
};
