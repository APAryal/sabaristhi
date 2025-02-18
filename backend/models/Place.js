// import mongoose from "mongoose";

// const placeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   latitude: {
//     type: Number,
//     required: true,
//   },
//   longitude: {
//     type: Number,
//     required: true,
//   },
// });

// export default mongoose.model("Place", placeSchema);
import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Place", placeSchema);
