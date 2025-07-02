import mongoose from 'mongoose';

const SubmittedBySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const ArtSubmissionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    imageURL: String,
    submittedBy: SubmittedBySchema,
    tags: [String],
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('ArtSubmission', ArtSubmissionSchema);
