import Transport from '../models/Transport.js';

// Get transport details by ID
export const getTransportDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findById(id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search routes involving specific places
export const searchRoutesByPlace = async (req, res) => {
  try {
    const { from, to } = req.params;
    if (!from || !to) {
      return res.status(400).json({ message: "Please provide both 'from' and 'to' locations to search." });
    }

    const routes = await Transport.find()
      .then((routes) =>
        routes.filter(
          (route) =>
            route.startsAt.toLowerCase().includes(from.toLowerCase()) &&
            route.endsAt.toLowerCase().includes(to.toLowerCase())
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