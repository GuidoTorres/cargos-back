const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_usuario_ejecutora', {
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_ejecutora',
        key: 'sec_ejec'
      }
    },
    flag_ccosto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_ALMACEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_caja: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_caja_chica: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_usuario_ejecutora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_USUARIO_EJECUTORA",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "sec_ejec" },
        ]
      },
      {
        name: "ind_sig_usuario_ejec_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "ind_sig_usuario_ejec_02",
        fields: [
          { name: "cuser_id" },
        ]
      },
      {
        name: "PK_SIG_USUARIO_EJECUTORA",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
