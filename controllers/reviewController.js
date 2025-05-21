import { createReview } from '../services/reviewService.js';

export const addReview = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash password before passing to service
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createReview({ name, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};