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


const orderService = { fetchTickets, fetchTicket, bookTicket, cancelTicket }


export default orderService