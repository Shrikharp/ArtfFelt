import mongoose from 'mongoose';

const OCFormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    year: String,
    branch: String,
    motivation: String,
    skillset: String,
  },
  { timestamps: true }
);

export default mongoose.model('OCForm', OCFormSchema);
