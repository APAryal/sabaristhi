// import mongoose from "mongoose";

// const vehicleSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   startsAt: {
//     type: String,
//     required: true,
//   },
//   endsAt: {
//     type: String,
//     required: true,
//   },
// });

// export default mongoose.model("Vehicle", vehicleSchema);
// filepath: /D:/sabristhi/backend/models/Vehicle.js
import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  startsAt: {
    type: String,
    required: true,
  },
  endsAt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: 'default-vehicle.jpg'
  }
});

export default mongoose.model("Vehicle", vehicleSchema);

