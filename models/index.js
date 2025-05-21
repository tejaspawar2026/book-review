import { Sequelize, DataTypes } from 'sequelize';
import configObj from '../config/config.js';
import BookModel from './book.js';
import UserModel from './user.js';

const env = 'development';
const config = configObj[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Book = BookModel(sequelize, DataTypes);
db.User = UserModel(sequelize, DataTypes);
export default db;
