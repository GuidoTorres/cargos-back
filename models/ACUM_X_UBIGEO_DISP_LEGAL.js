const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACUM_X_UBIGEO_DISP_LEGAL', {
    ID_REGISTRO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    DISPOSITIVO_LEGAL: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TIPO_TRANSACCION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GENERICA: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ACUM_X_UBIGEO_DISP_LEGAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACUM_X_UBIGEO_DISP_LEGAL",
        unique: true,
        fields: [
          { name: "ID_REGISTRO" },
        ]
      },
    ]
  });
};
