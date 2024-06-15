const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_KARDEX_CUF', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    codigo_bien: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    marca: {
      type: DataTypes.DECIMAL(5,0),
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
    tableName: 'SIG_KARDEX_CUF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_kardex_cuf",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "codigo_bien" },
          { name: "marca" },
          { name: "almacen" },
          { name: "subalmacen" },
          { name: "zona" },
          { name: "secuencia" },
        ]
      },
    ]
  });
};
