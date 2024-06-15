const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_maestro_parametro', {
    cod_maestro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_maestro',
        key: 'cod_maestro'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    valor_cadena: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    valor_numerico: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_maestro_parametro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_MAESTRO_PARAMETRO",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "fecha" },
        ]
      },
      {
        name: "ind_sig_maestro_parametro_01",
        fields: [
          { name: "cod_maestro" },
        ]
      },
      {
        name: "pk_sig_maestro_parametro",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "fecha" },
        ]
      },
    ]
  });
};
