const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ejecutora_externa', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ubigeo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    localidad: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    lugar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    e_mail: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ruc_ejec: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    apartado_postal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cod_ciudad: {
      type: DataTypes.STRING(2),
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
    fecha_baja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_baja: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    siglas: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    tipo_unidad: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    departamento: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ejecutora_externa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_ejecutora_externa",
        unique: true,
        fields: [
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
