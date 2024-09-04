// src/data/api/apiClient.js

import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // configurez l'URL de base dans un fichier .env
  timeout: 10000, // configurez le délai d'attente
  headers: {
    "Content-Type": "application/json",
  },
});
