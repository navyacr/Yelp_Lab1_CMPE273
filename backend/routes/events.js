const express = require("express");
const app = express.Router();
const events = require("../controllers/events.controller.js");
const eventAttendees = require("../controllers/eventAttendees.controller.js");

app.post('/info', events.create)
app.get('/info', events.findAll)
app.post('/eventsearch', events.search)

app.post('/:eventId/attendees', eventAttendees.create)
app.get('/:eventId/attendees', eventAttendees.findAll)
app.get('/:customerId/eventList', eventAttendees.customerEvents)



module.exports = app;
