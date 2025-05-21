import { createUser, getAllUsers, getUserById } from '../services/userService.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ name, email, password: hashedPassword });
    return res.status(201).json({ status: true, message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
