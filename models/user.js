const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Result, {
        foreignKey: {
          name: 'ResultId',
          allowNull: false
        }
      });
    }

    static async createWithResult(name, email, resultId) {
      const user = await User.create({ name, email, ResultId: resultId });
      return user;
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    ResultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};