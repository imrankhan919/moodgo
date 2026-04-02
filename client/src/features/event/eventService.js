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


const eventService = { fetchEvents, fetchEvent, fetchEventComments }

export default eventService