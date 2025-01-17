// import Place from "../models/Place.js";

// // Get all places
// export const getPlaces = async (req, res) => {
//   try {
//     const places = await Place.find();
//     res.status(200).json(places);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a place by ID
// export const getPlaceById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const place = await Place.findById(id);
//     if (!place) {
//       return res.status(404).json({ message: "Place not found" });
//     }
//     res.status(200).json(place);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Add a new place
// export const addPlace = async (req, res) => {
//   try {
//     const { name, latitude, longitude } = req.body;
//     const newPlace = new Place({ name, latitude, longitude });
//     await newPlace.save();
//     res.status(201).json(newPlace);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update an existing place
// export const updatePlace = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, latitude, longitude } = req.body;
//     const updatedPlace = await Place.findByIdAndUpdate(
//       id,
//       { name, latitude, longitude },
//       { new: true }
//     );
//     if (!updatedPlace) {
//       return res.status(404).json({ message: "Place not found" });
//     }
//     res.status(200).json(updatedPlace);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a place
// export const deletePlace = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPlace = await Place.findByIdAndDelete(id);
//     if (!deletedPlace) {
//       return res.status(404).json({ message: "Place not found" });
//     }
//     res.status(200).json({ message: "Place deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Search places by name
// export const searchPlaces = async (req, res) => {
//   try {
//     const { query } = req.params;
//     const places = await Place.find({ name: { $regex: query, $options: "i" } });
//     res.status(200).json(places);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };// filepath: /D:/sabristhi/backend/controllers/placeController.js
import Place from "../models/Place.js";

// Get all places
export const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a place by ID
export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new place
export const addPlace = async (req, res) => {
  try {
    const { name, latitude, longitude } = req.body;
    const newPlace = new Place({ name, latitude, longitude });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing place
export const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude } = req.body;
    const updatedPlace = await Place.findByIdAndUpdate(
      id,
      { name, latitude, longitude },
      { new: true }
    );
    if (!updatedPlace) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a place
export const deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlace = await Place.findByIdAndDelete(id);
    if (!deletedPlace) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json({ message: "Place deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search places by name
export const searchPlaces = async (req, res) => {
  try {
    const { query } = req.params;
    const places = await Place.find({ name: { $regex: query, $options: "i" } });
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
