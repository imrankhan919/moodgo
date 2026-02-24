import fs from "node:fs"
import uploadToCloudinary from "../middleware/cloudinaryMiddleware.js"
import Event from "../models/eventModel.js"

const createEvent = async (req, res) => {

    const { title, description, eventDate, eventLocation, eventArtistName, totalSeats, duration, ticketPrice } = req.body


    if (!title || !description || !eventDate || !eventLocation || !eventArtistName || !totalSeats || !duration || !ticketPrice) {
        res.status(409)
        throw new Error("Please Enter All Details!")
    }

    // Upload Image To Cloudinary 
    const uploadResult = await uploadToCloudinary(req.file.path)

    // Remove From Server
    fs.unlinkSync(req.file.path)

    // Create Event 
    const newEvent = await Event.create({ user: req.user._id, title, description, eventDate, eventLocation, eventArtistName, totalSeats, duration, ticketPrice, eventImage: uploadResult.secure_url })

    if (!newEvent) {
        res.status(400)
        throw new Error('Event Not Created!')
    }

    res.status(201).json(newEvent)
}


const eventController = { createEvent }


export default eventController