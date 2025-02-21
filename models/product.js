"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Cart, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description:DataTypes.TEXT,
      imageUrl1: DataTypes.STRING,
      imageUrl2: DataTypes.STRING,
      videolink: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
