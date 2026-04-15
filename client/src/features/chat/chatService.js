import axios from "axios"

export const chat = async (message, token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }



    const response = await axios.post("/api/chat", { text: message }, options)
    return {
        sender: "ai",
        message: response.data
    }


} 