import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    role: { type: String, enum: ['admin', 'oc', 'member'], default: 'member' },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
