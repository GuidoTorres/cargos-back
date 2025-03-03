var DataTypes = require("sequelize").DataTypes;

var _TMPERS = require("./TMPERS");

function initModels(sequelize) {
  var TMPERS = _TMPERS(sequelize, DataTypes);

  return {
    TMPERS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
