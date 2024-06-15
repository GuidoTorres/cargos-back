const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_UND_ACTIVO_ESP_TECNICA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_ESPEC_TECNICA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    RUBRO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.STRING(360),
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
    tableName: 'SIG_INM_UND_ACTIVO_ESP_TECNICA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_UND_ACTIVO_ESP",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
        ]
      },
      {
        name: "PK_SIG_INM_UND_ACTIVO_ESP",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_ESPEC_TECNICA" },
        ]
      },
    ]
  });
};
