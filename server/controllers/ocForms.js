import OCForm from '../models/OCForm.js';

export const createOCForm = async (req, res) => {
  try {
    const form = await OCForm.create(req.body);
    res.status(201).json(form);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getOCForms = async (req, res) => {
  try {
    const forms = await OCForm.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOCForm = async (req, res) => {
  try {
    await OCForm.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
