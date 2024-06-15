const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONSTRUCCIONES_MOVIMTO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSTRUCCIONES_DET',
        key: 'SEC_EJEC'
      }
    },
    COD_CONSTRUC: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSTRUCCIONES_DET',
        key: 'SEC_EJEC'
      }
    },
    NRO_CODIGO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSTRUCCIONES_DET',
        key: 'SEC_EJEC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MONTO_MOVIMTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_BIENES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_SERVICIOS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_OTROS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PRESTAMO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_ESTRUCTURA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONSTRUCCIONES_MOVIMTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IF_SIG_CONSTRUC_DET_MOVIMTO",
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CONSTRUC" },
          { name: "NRO_CODIGO" },
        ]
      },
      {
        name: "PK_SIG_CONSTRUC_MOVIMTO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CONSTRUC" },
          { name: "NRO_CODIGO" },
          { name: "NRO_MOVIMTO" },
          { name: "TIPO_MOVIMTO" },
        ]
      },
    ]
  });
};
