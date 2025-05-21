import bcrypt from 'bcrypt';
import { login } from '../services/authService.js';
import { generateToken } from '../utils/jwt.js';

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await login({ email });

    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({status: false, message: 'Invalid email or password' });
    }

    const token = generateToken({ user_id: user.id });

    res.status(200).json({status: true, message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
