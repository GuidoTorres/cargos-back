const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cert_det', {
    secuencial: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'cert_cab',
        key: 'secuencial'
      }
    },
    id_clasifi: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    clasifniv1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasifniv2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasifniv3: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv4: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv5: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv6: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_mn: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    dato_ori: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cert_det',
    schema: 'dbo',
    timestamps: false
  });
};
