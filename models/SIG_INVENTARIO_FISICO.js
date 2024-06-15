const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INVENTARIO_FISICO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
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
    fecha_movimto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IND_TIPO_INVENTARIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_MODIF_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_PROC_COMP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_INVENT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INVENTARIO_FISICO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INV_FISICO_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "PK_SIG_INV_FISICO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "NRO_INVENTARIO" },
        ]
      },
    ]
  });
};
