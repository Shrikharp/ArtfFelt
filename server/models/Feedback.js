import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema(
  {
    message: String,
    submittedBy: String,
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('Feedback', FeedbackSchema);
