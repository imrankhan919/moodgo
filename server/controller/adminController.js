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
    const events = await Event.find()

    if (!events) {
        res.status(404)
        throw new Error("Events Not Found!")
    }

    res.status(200).json(events)
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



const adminController = { getAllUsers, getAllEvents, getAllRatings, getAllOrders, getAllCoupons }

export default adminController