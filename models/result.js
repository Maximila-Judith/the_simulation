const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsTo(models.User, { foreignKey: 'UserId' });
    }

    static async createWithUser(results, userId) {
      const result = await Result.create({ ...results, UserId: userId });
      return result;
    }
  }
  Result.init({
    tax_name: DataTypes.STRING,
    tax_base: DataTypes.STRING,
    amount: DataTypes.STRING,
    rate: DataTypes.STRING,
    minimum: DataTypes.INTEGER,
    price_add: DataTypes.INTEGER,
    tax_price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
