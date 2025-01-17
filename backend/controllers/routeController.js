// // import Route from "../models/Route.js";

// // // Get all routes (with optional filters for "from" and "to" places)
// // export const getRoutes = async (req, res) => {
// //   try {
// //     const { from, to } = req.query;
// //     let query = {};

// //     if (from) query.from = from;
// //     if (to) query.to = to;

// //     const routes = await Route.find(query).populate("from to vehicle stops");
// //     res.status(200).json(routes);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Get a route by ID
// // export const getRouteById = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const route = await Route.findById(id).populate("from to vehicle stops");
// //     if (!route) {
// //       return res.status(404).json({ message: "Route not found" });
// //     }
// //     res.status(200).json(route);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Add a new route
// // export const addRoute = async (req, res) => {
// //   try {
// //     const { from, to, vehicle, fare, stops } = req.body;

// //     if (!from || !to || !vehicle || !fare) {
// //       return res.status(400).json({ message: "Missing required fields" });
// //     }

// //     const newRoute = new Route({ from, to, vehicle, fare, stops });
// //     await newRoute.save();
// //     res.status(201).json(newRoute);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // // Update an existing route
// // export const updateRoute = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { from, to, vehicle, fare, stops } = req.body;

// //     const updatedRoute = await Route.findByIdAndUpdate(
// //       id,
// //       { from, to, vehicle, fare, stops },
// //       { new: true }
// //     ).populate("from to vehicle stops");

// //     if (!updatedRoute) {
// //       return res.status(404).json({ message: "Route not found" });
// //     }

// //     res.status(200).json(updatedRoute);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // // Delete a route
// // export const deleteRoute = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const deletedRoute = await Route.findByIdAndDelete(id);
// //     if (!deletedRoute) {
// //       return res.status(404).json({ message: "Route not found" });
// //     }
// //     res.status(200).json({ message: "Route deleted successfully" });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // // Search routes involving a specific place
// // export const searchRoutesByPlace = async (req, res) => {
// //   try {
// //     const { query } = req.params; // Ensure this extracts the parameter
// //     if (!query) {
// //       return res.status(400).json({ message: "Please provide a query to search." });
// //     }

// //     const routes = await Route.find()
// //       .populate("from to vehicle stops")
// //       .then((routes) =>
// //         routes.filter(
// //           (route) =>
// //             route.from.name.toLowerCase().includes(query.toLowerCase()) ||
// //             route.to.name.toLowerCase().includes(query.toLowerCase()) ||
// //             route.stops.some((stop) => stop.name.toLowerCase().includes(query.toLowerCase()))
// //         )
// //       );

// //     if (routes.length === 0) {
// //       return res.status(404).json({ message: "No routes found for the given query." });
// //     }

// //     res.status(200).json(routes);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // filepath: /D:/sabristhi/backend/controllers/routeController.js
// import mongoose from "mongoose";
// import Route from "../models/Route.js";

// // Get all routes (with optional filters for "from" and "to" places)
// export const getRoutes = async (req, res) => {
//   try {
//     const { from, to } = req.query;
//     const query = {};

//     if (from) query.from = mongoose.Types.ObjectId(from);
//     if (to) query.to = mongoose.Types.ObjectId(to);

//     const routes = await Route.find(query).populate("from to vehicle stops");
//     res.status(200).json(routes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a route by ID
// export const getRouteById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const route = await Route.findById(id).populate("from to vehicle stops");
//     if (!route) {
//       return res.status(404).json({ message: "Route not found" });
//     }
//     res.status(200).json(route);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Add a new route
// export const addRoute = async (req, res) => {
//   try {
//     const { from, to, vehicle, fare, stops } = req.body;

//     if (!from || !to || !vehicle || !fare) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const newRoute = new Route({ from, to, vehicle, fare, stops });
//     await newRoute.save();
//     res.status(201).json(newRoute);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update an existing route
// export const updateRoute = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { from, to, vehicle, fare, stops } = req.body;

//     const updatedRoute = await Route.findByIdAndUpdate(
//       id,
//       { from, to, vehicle, fare, stops },
//       { new: true }
//     ).populate("from to vehicle stops");

//     if (!updatedRoute) {
//       return res.status(404).json({ message: "Route not found" });
//     }

//     res.status(200).json(updatedRoute);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a route
// export const deleteRoute = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedRoute = await Route.findByIdAndDelete(id);
//     if (!deletedRoute) {
//       return res.status(404).json({ message: "Route not found" });
//     }
//     res.status(200).json({ message: "Route deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Search routes involving specific places
// export const searchRoutesByPlace = async (req, res) => {
//   try {
//     const { from, to } = req.params;

//     // Validate input
//     if (!from || !to) {
//       return res.status(400).json({ message: "Please provide both 'from' and 'to' locations to search." });
//     }

//     const routes = await Route.find({
//       from: mongoose.Types.ObjectId(from),
//       to: mongoose.Types.ObjectId(to),
//     }).populate("from to vehicle stops");

//     if (routes.length === 0) {
//       return res.status(404).json({ message: "No routes found for the given query." });
//     }

//     res.status(200).json(routes);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
import mongoose from "mongoose";
import Route from "../models/Route.js";
import Place from "../models/Place.js"; // Assuming you have a Place model

// Get all routes
export const getRoutes = async (req, res) => {
  try {
    const { from, to } = req.query;
    const query = {};

    if (from) query.from = from;
    if (to) query.to = to;

    const routes = await Route.find(query)
      .populate('vehicle')
      .sort({ createdAt: -1 });
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a route by ID
export const getRouteById = async (req, res) => {
  try {
    const { id } = req.params;
    const route = await Route.findById(id).populate('vehicle');
    
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
    const { from, to, vehicle, fare, stops, estimatedTime, distance } = req.body;

    if (!from || !to || !vehicle || !fare) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRoute = new Route({
      from,
      to,
      vehicle,
      fare,
      stops: stops || [],
      estimatedTime,
      distance
    });

    await newRoute.save();
    const populatedRoute = await Route.findById(newRoute._id).populate('vehicle');
    res.status(201).json(populatedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a route
export const updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedRoute = await Route.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    ).populate('vehicle');

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

// Search routes by place names
export const searchRoutesByPlace = async (req, res) => {
  try {
    const { from, to } = req.params;

    // Validate input
    if (!from || !to) {
      return res.status(400).json({
        message: "Please provide both 'from' and 'to' locations to search."
      });
    }

    // Case-insensitive search for routes
    const routes = await Route.find({
      from: { $regex: new RegExp(from, 'i') },
      to: { $regex: new RegExp(to, 'i') }
    }).populate('vehicle');

    if (routes.length === 0) {
      return res.status(404).json({
        message: `No routes found from ${from} to ${to}.`
      });
    }

    res.status(200).json(routes);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search routes with flexible matching
export const searchRoutes = async (req, res) => {
  try {
    const { query } = req.params;
    
    const routes = await Route.find({
      $or: [
        { from: { $regex: new RegExp(query, 'i') } },
        { to: { $regex: new RegExp(query, 'i') } },
        { 'stops': { $regex: new RegExp(query, 'i') } }
      ]
    }).populate('vehicle');

    if (routes.length === 0) {
      return res.status(404).json({
        message: `No routes found matching "${query}"`
      });
    }

    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};