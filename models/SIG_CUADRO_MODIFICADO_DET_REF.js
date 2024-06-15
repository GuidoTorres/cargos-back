const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_MODIFICADO_DET_REF', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_MODIFICADO_DET_REF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUA_MOD_DET_REF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEC_CUADRO" },
          { name: "SEC_ITEM" },
          { name: "ANNO_PROG" },
        ]
      },
    ]
  });
};
