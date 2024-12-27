import express from "express";
import {
  getVehicles,
  getVehicleById,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  searchVehicles,
} from "../controllers/vehicleController.js";

const router = express.Router();

// Get all vehicles
router.get("/", getVehicles);

// Get a vehicle by ID
router.get("/:id", getVehicleById);

// Add a new vehicle
router.post("/", addVehicle);

// Update an existing vehicle
router.put("/:id", updateVehicle);

// Delete a vehicle
router.delete("/:id", deleteVehicle);

// Search vehicles by name or type
router.get("/search/:query", searchVehicles);

export default router;
