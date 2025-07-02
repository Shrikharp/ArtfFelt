import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import artSubmissionRoutes from './routes/artSubmissions.js';
import eventRoutes from './routes/events.js';
import galleryRoutes from './routes/galleries.js';
import ocFormRoutes from './routes/ocForms.js';
import userRoutes from './routes/users.js';
import feedbackRoutes from './routes/feedbacks.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/submissions', artSubmissionRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/galleries', galleryRoutes);
app.use('/api/ocforms', ocFormRoutes);
app.use('/api/users', userRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
