const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_maestro', {
    cod_maestro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_dato: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    modificable: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    digito: {
      type: DataTypes.DECIMAL(1,0),
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
    tableName: 'sig_maestro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_MAESTRO",
        unique: true,
        fields: [
          { name: "cod_maestro" },
        ]
      },
      {
        name: "pk_sig_maestro",
        unique: true,
        fields: [
          { name: "cod_maestro" },
        ]
      },
    ]
  });
};
