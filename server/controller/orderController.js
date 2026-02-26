const getTickets = async (req, res) => {
    res.send("Your Tickets")
}

const getTicket = async (req, res) => {
    res.send("Your Ticket")
}

const bookTicket = async (req, res) => {

    // Check if event exists
    // Check if seats available
    // Check if user have already booked 5 seats
    // Check if request is coming with coupon
    // Check if coupon is valid




    res.send("Ticket Booked")
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