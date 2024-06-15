const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_MOVIMIENTO_ALMACEN_TRX', {
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
    ID_SI_MOV_ALM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_MOVIMIENTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_MOVIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_GUIA_NEA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PROVEEDOR_NRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    D_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_MOVIMIENTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NOMBRE_MOVIMIENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_EMPLEADO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_ALMACEN: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TIPO_PRESUPUESTO: {
      type: DataTypes.DECIMAL(1,0),
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
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_MOVIMIENTO_ALMACEN_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_MOVIMIENTO_AL__230EE053",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_MOV_ALM" },
        ]
      },
    ]
  });
};
