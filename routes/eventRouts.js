const express = require("express");
const { eventDetails, eventDelete, eventUpdate } = require("../controllers/eventController");


const router = express.Router();

// ALL EVENTS ROUTE
router.get("/", eventDetails);

// DELETE EVENTS ROUTE
router.delete("/:eventId", eventDelete);

// UPDATE EVENTS ROUTE
router.put("/:eventId", eventUpdate);

// CREATE EVENTS ROUTE

// EVENT DETAILS ROUTE
