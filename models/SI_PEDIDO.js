const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PEDIDO', {
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
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_PEDIDO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MOTIVO_PEDIDO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(100),
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
    ESTADO: {
      type: DataTypes.STRING(1),
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
    tableName: 'SI_PEDIDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_PEDIDO",
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
