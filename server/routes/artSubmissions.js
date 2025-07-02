import express from 'express';
import upload from '../middleware/upload.js';
import {
  createSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  deleteSubmission,
} from '../controllers/artSubmissions.js';

const router = express.Router();

router.post('/', upload.single('image'), createSubmission);
router.get('/', getSubmissions);
router.get('/:id', getSubmission);
router.put('/:id', updateSubmission);
router.delete('/:id', deleteSubmission);

export default router;
