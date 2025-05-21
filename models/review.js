export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  // Associations
  Review.associate = (models) => {
    Review.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Review.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
  };

  return Review;
};
