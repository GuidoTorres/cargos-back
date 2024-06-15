const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PEDIDO_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ID_SI_PEDIDO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FECHA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MES_PEDIDO: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    MOTIVO_PEDIDO: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: false
    },
    FINALIDAD: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    META: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    UNIDAD_MEDIDA_META: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    D_UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_EMPLEADO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PEDIDO_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_PEDIDO_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_PEDIDO" },
        ]
      },
    ]
  });
};
