import express from "express";
const cors = require("cors");
import productRoutes from "./routes/productRoutes";

const app = express();

// Utiliser CORS pour toutes les routes
app.use(cors());

// Ou configurer des options spécifiques
app.use(
  cors({
    origin: "http://localhost:5173", // Autoriser uniquement ce domaine
    methods: "GET,POST,PUT,DELETE", // Spécifiez les méthodes autorisées si nécessaire
    credentials: true, // Si vous avez besoin d'envoyer des cookies ou des autorisations
  })
);

app.use(express.json());
app.use("/api", productRoutes);

export default app;
