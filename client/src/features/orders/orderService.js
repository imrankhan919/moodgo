import axios from "axios"

const API_URL = "/api/order"


const fetchTickets = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, options)
    return response.data
}


const fetchTicket = (tid, token) => { }


const bookTicket = (formData, token) => { }


const cancelTicket = (tid, token) => { }


const checkCoupon = async (couponCode) => {


    const response = await axios.post("/api/coupon/apply", couponCode)
    return response.data
}


const orderService = { fetchTickets, fetchTicket, bookTicket, cancelTicket, checkCoupon }


export default orderService