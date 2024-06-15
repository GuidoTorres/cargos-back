const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ALMACEN_CUF', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    almacen: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    subalmacen: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    zona: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    zona_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    almacenaje: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nivel: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    secuencia: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    estante: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fila: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    columna: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    casillero: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado_zona: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado_cuf: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipo_reg: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fecha_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cuser_mod: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    equipo_mod: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ALMACEN_CUF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_almacen_cuf",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "almacen" },
          { name: "subalmacen" },
          { name: "zona" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
