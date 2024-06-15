const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PARAMETRO_EJECUTORA_ANIO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_ejecutora',
        key: 'sec_ejec'
      }
    },
    cod_maestro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_maestro',
        key: 'cod_maestro'
      }
    },
    valor: {
      type: DataTypes.STRING(100),
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
    fecha_maestro: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PARAMETRO_EJECUTORA_ANIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PARAMETRO_EJEC_ANIO_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_SIG_PARAMETRO_EJEC_ANIO_02",
        fields: [
          { name: "cod_maestro" },
        ]
      },
      {
        name: "PK_SIG_PARAMETRO_EJECUTORA_ANIO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "cod_maestro" },
        ]
      },
    ]
  });
};
