import Gallery from '../models/Gallery.js';

export const createGallery = async (req, res) => {
  try {
    const gallery = await Gallery.create(req.body);
    res.status(201).json(gallery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().populate('eventId');
    res.json(galleries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id).populate('eventId');
    if (!gallery) return res.sendStatus(404);
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateGallery = async (req, res) => {
  try {
    const updated = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
