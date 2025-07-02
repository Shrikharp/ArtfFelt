import express from 'express';
import { createOCForm, getOCForms, deleteOCForm } from '../controllers/ocForms.js';

const router = express.Router();

router.post('/', createOCForm);
router.get('/', getOCForms);
router.delete('/:id', deleteOCForm);

export default router;
