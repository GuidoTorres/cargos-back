const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_ALMACEN_TRANS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSFERENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_TRANSFERENCIA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    MES_MOVIMTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORIG_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ORIG_SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ORIG_TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORIG_TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    ORIG_TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ORIG_NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ORIG_TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORIG_CLASIFICADOR: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ORIG_MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ORIG_SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DEST_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DEST_SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DEST_TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DEST_TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    DEST_TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    DEST_NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    DEST_TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DEST_CLASIFICADOR: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DEST_MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DEST_SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO_KARDEX: {
      type: DataTypes.STRING(1),
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
    },
    DEST_ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ORIG_ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_ALMACEN_TRANS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOV_ALM_TRAN_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SIG_MOVIM_ALMACEN_TRANS",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_TRANSFERENCIA" },
          { name: "NRO_TRANSFERENCIA" },
        ]
      },
    ]
  });
};
