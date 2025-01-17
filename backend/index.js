import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from './routes/authRoutes.js';
import vehicleRoutes from "./routes/vehicleRoutes.js";
import placeRoutes from "./routes/placeRoutes.js";
import routeRoutes from "./routes/routeRoutes.js";
// import transportRoutes from './routes/transportRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error.message));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// Endpoint to register in the app
app.use('/api/auth', router);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/places", placeRoutes);
// app.use("/api/routes", routeRoutes);
app.use('/api/routes', routeRoutes);
// app.use('/api', transportRoutes);