import Event from "../models/eventModel.js"
import User from "../models/userModel.js"



const getAllUsers = async (req, res) => {

    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error("Users Not Found!")
    }

    res.status(200).json(users)

}


const getAllEvents = async (req, res) => {
    const events = await Event.find().populate('user')

    if (!events) {
        res.status(404)
        throw new Error("Events Not Found!")
    }

    res.status(200).json(events)
}


const updateEvent = async (req, res) => {

    const eventId = req.params.eid

    const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true }).populate('user')

    if (!updatedEvent) {
        res.status(409)
        throw new Error('Event Not Updated')
    }

    res.status(200).json(updatedEvent)

}



const getAllRatings = (req, res) => {
    res.send("All Ratings!")
}


const getAllOrders = (req, res) => {
    res.send("All Orders!")
}


const getAllCoupons = (req, res) => {
    res.send("All Coupons!")
}



const adminController = { getAllUsers, getAllEvents, getAllRatings, getAllOrders, getAllCoupons, updateEvent }

export default adminController