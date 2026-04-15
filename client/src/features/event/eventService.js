import axios from "axios"

const API_URL = "/api/events"

const fetchEvents = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const fetchEvent = async (eid) => {
    const response = await axios.get(API_URL + `/${eid}`)
    return response.data
}

const fetchEventComments = async (eid) => {
    const response = await axios.get(`/api/comment/${eid}`)
    return response.data
}


const createComment = async (formData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`/api/comment/${formData.eventId}`, formData, options)
    return response.data
}



const eventService = { fetchEvents, fetchEvent, fetchEventComments, createComment }

export default eventService