const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_TMP_JOB', {
    Job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_est: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    Job_fec: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Job_msj: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_TMP_JOB',
    schema: 'dbo',
    timestamps: false
  });
};
