const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_USUARIO_ALMACEN', {
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_USUARIO_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_USUARIO_ALMACEN_01",
        fields: [
          { name: "CUSER_ID" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "ind_usuario_almacen_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
      {
        name: "PK_SIG_USUARIO_ALMACEN",
        unique: true,
        fields: [
          { name: "CUSER_ID" },
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
    ]
  });
};
