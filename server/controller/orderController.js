import Coupon from "../models/couponModel.js"
import Event from "../models/eventModel.js"
import Order from "../models/orderModel.js"

const getTickets = async (req, res) => {
    res.send("Your Tickets")
}

const getTicket = async (req, res) => {
    res.send("Your Ticket")
}

const bookTicket = async (req, res) => {

    const { numberOfSeats, couponCode } = req.body

    // Check if event exists
    const eventId = req.params.eid

    const event = await Event.findById(eventId)

    if (!event) {
        res.status(404)
        throw new Error("Event Not Found!")
    }

    // Check if seats available
    if (event.totalSeats < numberOfSeats) {
        res.status(409)
        throw new Error("Seats Not Available!")
    }

    // Check if user have already booked 5 seats : Todo//

    // Check if request is coming with coupon

    let couponExists
    if (couponCode) {
        // Check if coupon is valid
        couponExists = await Coupon.findOne({ couponCode })
        if (!couponExists) {
            res.status(404)
            throw new Error("Coupon Not Exists")
        }
    }

    let order = await Order.create({
        user: req.user.id,
        event: eventId,
        status: "confirmed",
        isDiscounted: couponCode ? true : false,
        billedAmount: couponCode ? event.ticketPrice - (event.ticketPrice * couponExists.couponDiscount / 100) : event.ticketPrice
    })


    if (!order) {
        res.status(409)
        throw new Error("Order Not Accepted")
    }

    res.status(201).json(order)


}


const cancelTicket = async (req, res) => {
    res.send("Ticket Cancelled")
}

const orderController = {
    bookTicket,
    cancelTicket,
    getTickets,
    getTicket
}

export default orderController