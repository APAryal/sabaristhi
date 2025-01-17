// // import mongoose from "mongoose";

// // const routeSchema = new mongoose.Schema({
// //   from: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "Place",
// //     required: true,
// //   },
// //   to: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "Place",
// //     required: true,
// //   },
// //   vehicle: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "Vehicle",
// //     required: true,
// //   },
// //   fare: {
// //     type: Number,
// //     required: true,
// //   },
// //   stops: [
// //     {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "Place",
// //     },
// //   ],
// // });

// // export default mongoose.model("Route", routeSchema);
// import mongoose from "mongoose";

// const routeSchema = new mongoose.Schema({
//   from: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Place",
//     required: true,
//   },
//   to: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Place",
//     required: true,
//   },
//   vehicle: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Vehicle",
//     required: true,
//   },
//   fare: {
//     type: Number,
//     required: true,
//   },
//   stops: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Place",
//     },
//   ],
// });

// export default mongoose.model("Route", routeSchema);
import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    index: true
  },
  to: {
    type: String,
    required: true,
    index: true
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  fare: {
    type: Number,
    required: true
  },
  stops: [{
    type: String,
    index: true
  }],
  estimatedTime: {
    type: String
  },
  distance: {
    type: Number
  }
}, {
  timestamps: true
});

// Create indexes for better search performance
routeSchema.index({ from: 'text', to: 'text', stops: 'text' });

const Route = mongoose.model("Route", routeSchema);

export default Route;