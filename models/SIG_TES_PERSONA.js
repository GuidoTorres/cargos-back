const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_PERSONA', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    cod_persona: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_id: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    num_doc: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    flag_epublica: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_PERSONA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_PERSONA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "cod_persona" },
        ]
      },
    ]
  });
};
