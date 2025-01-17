import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  startsAt: { type: String, required: true },
  endsAt: { type: String, required: true },
  fare: { type: Number, required: true },
  distance: { type: String, required: true },
  timing: { type: String, required: true },
});

const Transport = mongoose.model('Transport', transportSchema);

export default Transport;