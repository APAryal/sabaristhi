import express from "express";
import {
  getRoutes,
  getRouteById,
  addRoute,
  updateRoute,
  deleteRoute,
  searchRoutesByPlace

} from "../controllers/routeController.js";

const router = express.Router();

// Get all routes
router.get("/", getRoutes);

// Get a route by ID
router.get("/:id", getRouteById);

// Add a new route
router.post("/", addRoute);

// Update an existing route
router.put("/:id", updateRoute);

// Delete a route
router.delete("/:id", deleteRoute);

router.get("/search/:query", searchRoutesByPlace);


export default router;
