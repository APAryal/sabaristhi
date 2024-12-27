import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  stops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  ],
});

export default mongoose.model("Route", routeSchema);
