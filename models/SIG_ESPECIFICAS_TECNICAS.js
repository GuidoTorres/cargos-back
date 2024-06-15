const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ESPECIFICAS_TECNICAS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ESPEC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO_ESPEC: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ESPECIFICAS_TECNICAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_E_T_01",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_ESPEC" },
        ]
      },
    ]
  });
};
