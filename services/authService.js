import db from '../models/index.js';

export const authService = {
  login: async ({ email }) => {
    return await db.User.findOne({ where: { email } });
  }
}
