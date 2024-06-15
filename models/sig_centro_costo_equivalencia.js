const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_centro_costo_equivalencia', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    centro_costo_ant: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_centro_costo_equivalencia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_CENTRO_COSTO_EQUIVALENCIA",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "centro_costo_ant" },
        ]
      },
      {
        name: "ind_sig_centro_costo_equival",
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
        ]
      },
      {
        name: "pk_sig_centro_costo_equivalencia",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "centro_costo_ant" },
        ]
      },
    ]
  });
};
