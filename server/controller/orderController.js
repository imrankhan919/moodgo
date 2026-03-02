import Coupon from "../models/couponModel.js"
import Event from "../models/eventModel.js"
import Order from "../models/orderModel.js"

const getTickets = async (req, res) => {

    const myTickets = await Order.find({ user: req.user._id }).populate('user').populate('event')

    if (!myTickets) {
        res.status(404)
        throw new Error("Tickets Not Found!")
    }

    res.status(200).json(myTickets)

}

const getTicket = async (req, res) => {
    const myTicket = await Order.findById(req.params.tid).populate('user').populate('event')

    if (!myTicket) {
        res.status(404)
        throw new Error("Ticket Not Found!")
    }

    res.status(200).json(myTicket)
}

const bookTicket = async (req, res) => {

    let userId = req.user._id

    const { numberOfSeats, couponCode } = req.body

    if (!numberOfSeats) {
        res.status(409)
        throw new Error("Kindly Select Atleast One Seat")
    }


    // Check if event exists
    const eventId = req.params.eid

    const event = await Event.findById(eventId)

    if (!event) {
        res.status(404)
        throw new Error("Event Not Found!")
    }

    // Check if seats available
    if (event.totalSeats < numberOfSeats || numberOfSeats > 5) {
        res.status(409)
        throw new Error("Seats Not Available!")
    }

    // Check if user have already booked 5 seats : Todo//
    const allPreviousOrders = await Order.find({ event: event._id })

    // Filter My Orders By Event
    const myOrders = allPreviousOrders.filter((order) => order.user.toString() === userId.toString())

    // Calculate Total Seats Booked

    let myExistingBookedSeats = myOrders.reduce((acc, order) => acc + order.seats, 0)

    console.log(myExistingBookedSeats)

    if (myExistingBookedSeats >= 5) {
        res.status(409)
        throw new Error("Only 5 Seats Allowed Per User!")
    }


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
        seats: numberOfSeats,
        status: "confirmed",
        isDiscounted: couponCode ? true : false,
        billedAmount: couponCode ? (event.ticketPrice - (event.ticketPrice * couponExists.couponDiscount / 100)) * numberOfSeats : event.ticketPrice * numberOfSeats
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