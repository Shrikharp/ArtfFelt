import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  url: String,
  caption: String,
});

const GallerySchema = new mongoose.Schema(
  {
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    images: [ImageSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Gallery', GallerySchema);
