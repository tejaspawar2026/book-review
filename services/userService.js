import db from '../models/index.js';
const { User } = db;

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const getAllUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};
