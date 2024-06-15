const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tmp_equivalencia_meta', {
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
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sub_programa: {
      type: DataTypes.STRING(4),
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
      type: DataTypes.STRING(5),
      allowNull: true
    },
    finalidad: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    unidad_med: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fecha_ing: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_ing: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_mod: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado_envio: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    archivo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ind_meta: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    sec_func_r: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tmp_equivalencia_meta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_stem_01",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_func" },
          { name: "ind_meta" },
        ]
      },
    ]
  });
};
