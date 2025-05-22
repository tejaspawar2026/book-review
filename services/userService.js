import db from '../models/index.js';
const { User } = db;

export const userService = {
  createUser: async (userData) => {
    return await User.create(userData);
  }
}
