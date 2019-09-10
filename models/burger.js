module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerName: DataTypes.STRING,
    isEaten: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  return Burger;
};
