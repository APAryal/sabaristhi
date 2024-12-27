import Route from "../models/Route.js";

// Get all routes (with optional filters for "from" and "to" places)
export const getRoutes = async (req, res) => {
  try {
    const { from, to } = req.query;
    let query = {};

    if (from) query.from = from;
    if (to) query.to = to;

    const routes = await Route.find(query).populate("from to vehicle stops");
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a route by ID
export const getRouteById = async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findById(id).populate("from to vehicle stops");
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new route
export const addRoute = async (req, res) => {
  try {
    const { from, to, vehicle, fare, stops } = req.body;

    if (!from || !to || !vehicle || !fare) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRoute = new Route({ from, to, vehicle, fare, stops });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing route
export const updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const { from, to, vehicle, fare, stops } = req.body;

    const updatedRoute = await Route.findByIdAndUpdate(
      id,
      { from, to, vehicle, fare, stops },
      { new: true }
    ).populate("from to vehicle stops");

    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a route
export const deleteRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoute = await Route.findByIdAndDelete(id);
    if (!deletedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search routes involving a specific place
export const searchRoutesByPlace = async (req, res) => {
  try {
    const { query } = req.params; // Ensure this extracts the parameter
    if (!query) {
      return res.status(400).json({ message: "Please provide a query to search." });
    }

    const routes = await Route.find()
      .populate("from to vehicle stops")
      .then((routes) =>
        routes.filter(
          (route) =>
            route.from.name.toLowerCase().includes(query.toLowerCase()) ||
            route.to.name.toLowerCase().includes(query.toLowerCase()) ||
            route.stops.some((stop) => stop.name.toLowerCase().includes(query.toLowerCase()))
        )
      );

    if (routes.length === 0) {
      return res.status(404).json({ message: "No routes found for the given query." });
    }

    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


