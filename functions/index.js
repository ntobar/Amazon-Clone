const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTxCVDTDxndnwTNF7Q6cFqasqh8M98K1I5KvqTYpPs1GdTEjMZ6Pv7uRS9RLU7HfgNh54Nnv0a1IqDttrNEpAE400tSRzX8Ts"
);

// API setup

// - App Configuration
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hi"));

// - Listen command
exports.api = functions.https.onRequest(app);
