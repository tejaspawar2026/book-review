import jwt from 'jsonwebtoken';

export const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: '1d', // Token valid for 1 day
  });
};
