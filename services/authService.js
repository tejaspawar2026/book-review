import db from '../models/index.js';

export const login = async ({ email }) => {
  return await db.User.findOne({ where: { email } });
};
