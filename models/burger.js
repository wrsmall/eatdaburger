module.exports=function(sequelize, dataTypes){
    let Burger=sequelize.define("Burger",{
        burgerName:dataTypes.STRING,
        isEaten:dataTypes.BOOLEAN
    });
    return Burger;
}