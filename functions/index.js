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

// - API routes

// - Listen command
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
