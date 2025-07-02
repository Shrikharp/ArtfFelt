import ArtSubmission from '../models/ArtSubmission.js';

export const createSubmission = async (req, res) => {
  try {
    const submission = await ArtSubmission.create({
      ...req.body,
      imageURL: req.file?.path,
    });
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await ArtSubmission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSubmission = async (req, res) => {
  try {
    const submission = await ArtSubmission.findById(req.params.id);
    if (!submission) return res.sendStatus(404);
    res.json(submission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSubmission = async (req, res) => {
  try {
    const updated = await ArtSubmission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteSubmission = async (req, res) => {
  try {
    await ArtSubmission.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
