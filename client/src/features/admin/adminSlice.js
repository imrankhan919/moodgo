import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminService';

const initialState = {
    users: [],
    events: [],
    orders: [],
    ratings: [],
    coupons: [],
    adminLoading: false,
    adminSuccess: false,
    adminError: false,
    adminErrorMessage: ""
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.users = action.payload
                state.adminError = false
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllEvents.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.events = action.payload
                state.adminError = false
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllOrders.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.orders = action.payload
                state.adminError = false
            })
            .addCase(getAllOrders.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllRatings.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllRatings.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.ratings = action.payload
                state.adminError = false
            })
            .addCase(getAllRatings.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
            .addCase(getAllCoupons.pending, (state, action) => {
                state.adminLoading = true
                state.adminSuccess = false
                state.adminError = false
            })
            .addCase(getAllCoupons.fulfilled, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = true
                state.coupons = action.payload
                state.adminError = false
            })
            .addCase(getAllCoupons.rejected, (state, action) => {
                state.adminLoading = false
                state.adminSuccess = false
                state.adminError = true
                state.adminErrorMessage = action.payload
            })
    }
});

export const { } = adminSlice.actions

export default adminSlice.reducer



export const getAllUsers = createAsyncThunk("FETCH/ADMIN/USERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

export const getAllEvents = createAsyncThunk("FETCH/ADMIN/EVENTS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllEvents(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


export const getAllOrders = createAsyncThunk("FETCH/ADMIN/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllOrders(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllRatings = createAsyncThunk("FETCH/ADMIN/RATINGS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllRatings(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllCoupons = createAsyncThunk("FETCH/ADMIN/COUPONS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.fetchAllCoupons(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})