// import Vehicle from "../models/Vehicle.js";

// // Get all vehicles
// export const getVehicles = async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.status(200).json(vehicles);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a vehicle by ID
// export const getVehicleById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const vehicle = await Vehicle.findById(id);
//     if (!vehicle) {
//       return res.status(404).json({ message: "Vehicle not found" });
//     }
//     res.status(200).json(vehicle);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Add a new vehicle
// export const addVehicle = async (req, res) => {
//   try {
//     const { name, type, startsAt, endsAt } = req.body;
//     const newVehicle = new Vehicle({ name, type, startsAt, endsAt });
//     await newVehicle.save();
//     res.status(201).json(newVehicle);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update an existing vehicle
// export const updateVehicle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, type, startsAt, endsAt } = req.body;
//     const updatedVehicle = await Vehicle.findByIdAndUpdate(
//       id,
//       { name, type, startsAt, endsAt },
//       { new: true }
//     );
//     if (!updatedVehicle) {
//       return res.status(404).json({ message: "Vehicle not found" });
//     }
//     res.status(200).json(updatedVehicle);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a vehicle
// export const deleteVehicle = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedVehicle = await Vehicle.findByIdAndDelete(id);
//     if (!deletedVehicle) {
//       return res.status(404).json({ message: "Vehicle not found" });
//     }
//     res.status(200).json({ message: "Vehicle deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Search vehicles by name or type
// export const searchVehicles = async (req, res) => {
//   try {
//     const { query } = req.params;
//     const vehicles = await Vehicle.find({
//       $or: [
//         { name: { $regex: query, $options: "i" } },
//         { type: { $regex: query, $options: "i" } },
//       ],
//     });
//     res.status(200).json(vehicles);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
import Vehicle from "../models/Vehicle.js";

// Get all vehicles
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a vehicle by ID
export const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new vehicle
export const addVehicle = async (req, res) => {
  try {
    const { name, type, startsAt, endsAt } = req.body;
    const newVehicle = new Vehicle({ name, type, startsAt, endsAt });
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing vehicle
export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, startsAt, endsAt } = req.body;
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      id,
      { name, type, startsAt, endsAt },
      { new: true }
    );
    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json(updatedVehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a vehicle
export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search vehicles by name or type
export const searchVehicles = async (req, res) => {
  try {
    const { query } = req.params;
    const vehicles = await Vehicle.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { type: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
