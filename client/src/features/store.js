import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth/authSlice"
import event from "./event/eventSlice"
import order from "./orders/orderSlice"

const store = configureStore({
    reducer: { auth, event, order }
})


export default store