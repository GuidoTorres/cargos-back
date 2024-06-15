const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TRANSPORTISTA', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    cod_transportista: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    nombre_transportista: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    licencia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TRANSPORTISTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_transportista",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "cod_transportista" },
        ]
      },
    ]
  });
};
