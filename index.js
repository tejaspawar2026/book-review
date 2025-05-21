import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import masterRouter from './router/masterRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', masterRouter);

db.sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to DB:', err);
});
