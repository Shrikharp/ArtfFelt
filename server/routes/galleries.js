import express from 'express';
import {
  createGallery,
  getGalleries,
  getGallery,
  updateGallery,
  deleteGallery,
} from '../controllers/galleries.js';

const router = express.Router();

router.post('/', createGallery);
router.get('/', getGalleries);
router.get('/:id', getGallery);
router.put('/:id', updateGallery);
router.delete('/:id', deleteGallery);

export default router;
