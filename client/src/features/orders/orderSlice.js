import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import orderService from './orderService';

const initialState = {
    orders: [],
    order: {},
    coupon: {},
    orderLoading: false,
    orderSuccess: false,
    orderError: false,
    orderErrorMessage: false
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTickets.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(getTickets.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.orders = action.payload
                state.orderError = false
            })
            .addCase(getTickets.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
            .addCase(applyCoupon.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(applyCoupon.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.coupon = action.payload
                state.orderError = false
            })
            .addCase(applyCoupon.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
            .addCase(ticketBook.pending, (state, action) => {
                state.orderLoading = true
                state.orderSuccess = false
                state.orderError = false
            })
            .addCase(ticketBook.fulfilled, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = true
                state.order = action.payload
                state.orderError = false
            })
            .addCase(ticketBook.rejected, (state, action) => {
                state.orderLoading = false
                state.orderSuccess = false
                state.orderError = true
                state.orderErrorMessage = action.payload
            })
    }
});

export const { } = orderSlice.actions

export default orderSlice.reducer


// Get Tickets 
export const getTickets = createAsyncThunk("FETCH/TICKETS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return orderService.fetchTickets(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


// Apply Coupon
export const applyCoupon = createAsyncThunk("APPLY/COUPON", async (couponCode, thunkAPI) => {
    try {
        return await orderService.checkCoupon(couponCode)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// Book Ticket
export const ticketBook = createAsyncThunk("BOOK/TICKET", async (formData, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        return await orderService.bookTicket(formData, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
}) 