import { Sequelize, DataTypes } from 'sequelize';
import configObj from '../config/config.js';
import BookModel from './book.js';
import UserModel from './user.js';
import ReviewModel from './review.js';

const env = 'development';
const config = configObj[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Book = BookModel(sequelize, DataTypes);
db.User = UserModel(sequelize, DataTypes);
db.Review = ReviewModel(sequelize, DataTypes);
export default db;
