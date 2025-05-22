import { userService } from '../services/userService.js';
import bcrypt from 'bcrypt';

export const userController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await userService.createUser({ name, email, password: hashedPassword });
      return res.status(201).json({ status: true, message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}