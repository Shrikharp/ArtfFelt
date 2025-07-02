import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    startDate: Date,
    endDate: Date,
    location: String,
    tags: [String],
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
