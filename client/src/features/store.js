import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import event from "./event/eventSlice"

const store = configureStore({
    reducer: { auth, event }
})


export default store