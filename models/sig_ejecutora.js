const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_ejecutora', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    sector: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'sig_pliego',
        key: 'sector'
      }
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'sig_pliego',
        key: 'sector'
      }
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_WEB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SP_WEB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PILOTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    COD_PILOTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_ejecutora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_EJECUTORA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "ind_sig_ejecutora_01",
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
      {
        name: "pk_sig_ejecutora",
        unique: true,
        fields: [
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
