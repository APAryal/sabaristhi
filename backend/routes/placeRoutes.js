// import express from "express";
// import {
//   getPlaces,
//   getPlaceById,
//   addPlace,
//   updatePlace,
//   deletePlace,
//   searchPlaces,
// } from "../controllers/placeController.js";

// const router = express.Router();

// // Get all places
// router.get("/", getPlaces);

// // Get a place by ID
// router.get("/:id", getPlaceById);

// // Add a new place
// router.post("/", addPlace);

// // Update an existing place
// router.put("/:id", updatePlace);

// // Delete a place
// router.delete("/:id", deletePlace);

// // Search places by name
// router.get("/search/:query", searchPlaces);

// export default router;
import express from "express";
import {
  getPlaces,
  getPlaceById,
  addPlace,
  updatePlace,
  deletePlace,
  searchPlaces,
} from "../controllers/placeController.js";

const router = express.Router();

// Routes for places
router.get("/", getPlaces);
router.get("/:id", getPlaceById);
router.post("/", addPlace);
router.put("/:id", updatePlace);
router.delete("/:id", deletePlace);
router.get("/search/:query", searchPlaces);

export default router;
