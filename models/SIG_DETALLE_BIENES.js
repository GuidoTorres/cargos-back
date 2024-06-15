const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_BIENES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_BIENES',
        key: 'TIPO_MOVIMTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_BIENES',
        key: 'TIPO_MOVIMTO'
      }
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_BIENES',
        key: 'TIPO_MOVIMTO'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_BIENES',
        key: 'TIPO_MOVIMTO'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MOVIMIENTO_BIENES',
        key: 'TIPO_MOVIMTO'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_BIENES_DURADEROS',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_BIENES_DURADEROS',
        key: 'TIPO_MODALIDAD'
      }
    },
    ESTADO_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_RETORNO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_RETORNO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_RETORNO: {
      type: DataTypes.STRING(250),
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
    tableName: 'SIG_DETALLE_BIENES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DETALLE_BD_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_BD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
          { name: "NRO_SECUENCIA" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
