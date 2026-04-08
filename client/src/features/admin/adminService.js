import axios from "axios"

const API_URL = '/api/admin'

const fetchAllUsers = async (token) => {


    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }



    const response = await axios.get(API_URL + "/users", options)
    return response.data
}

const fetchAllEvents = async (token) => {


    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.get(API_URL + "/events", options)
    return response.data
}


const fetchAllOrders = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }



    const response = await axios.get(API_URL + "/orders", options)
    return response.data
}

const fetchAllRatings = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }



    const response = await axios.get(API_URL + "/comments", options)
    return response.data
}

const fetchAllCoupons = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }



    const response = await axios.get(API_URL + "/coupons", options)
    return response.data

}

const createCoupon = async (formData, token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post(API_URL + "/coupons", formData, options)
    return response.data

}


const createEvent = async (formData, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post("/api/events", formData, options)
    return response.data

}


const updateEvent = async (formData, token) => {
    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put("/api/admin/events/" + formData._id, formData, options)
    return response.data
}




const adminService = {
    fetchAllUsers, fetchAllEvents, fetchAllOrders, fetchAllRatings, fetchAllCoupons, createCoupon, createEvent, updateEvent
}


export default adminService