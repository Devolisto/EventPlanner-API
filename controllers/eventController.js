const Event = require("../db/models/Event");


// Event List
exports.eventDetails = async (req, res) => {

    try {
        const events = await Event.findByPk(req.params.eventId);
        if(events) {
            res.status(200).json(events)
        } else {
             res.status(404).json({message: "Event is not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Event Create 

// Event Delete
exports.eventDelete = async (req, res) => {

    try {
        const events = await Event.findByPk(req.params.eventId);
        if(events) {
            await events.destroy();
            res.status(204).end();
        } else {
             res.status(404).json({message: "Event is not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
     }
};

// Event Details


// Event Update
exports.eventUpdate = async (req, res) => {
    try {
        const events = await Event.findByPk(req.params.eventId);
        if (events) {
            await events.update(req.body);
            res.status(204).json(events).end();
        } else res.status(404).json({ message: "Event is not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};