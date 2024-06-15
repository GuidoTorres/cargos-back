const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meta_encargo', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    sub_programa: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    componente: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    meta: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    finalidad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unidad_med: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    departamento: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_ing: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    fecha_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_mod: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    monto_saldo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    archivo: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    distrito: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'meta_encargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_meta_encargo",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
    ]
  });
};
