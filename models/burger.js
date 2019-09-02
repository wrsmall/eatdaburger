module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerNAme: DataTypes.STRING,
    isEatern: DataTypes.BOOLEAN
  });
  return Burger;
};
