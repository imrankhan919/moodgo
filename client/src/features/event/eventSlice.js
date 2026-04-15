import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import eventService from './eventService';

const initialState = {
    events: [],
    event: {},
    eventComments: [],
    eventLoading: false,
    eventSuccess: false,
    eventError: false,
    eventErrorMessage: ""
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state, action) => {
                state.eventLoading = true
                state.eventSuccess = false
                state.eventError = false
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = true
                state.events = action.payload
                state.eventError = false
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = false
                state.eventError = true
                state.eventErrorMessage = action.payload
            })
            .addCase(getEvent.pending, (state, action) => {
                state.eventLoading = true
                state.eventSuccess = false
                state.eventError = false
            })
            .addCase(getEvent.fulfilled, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = true
                state.event = action.payload
                state.eventError = false
            })
            .addCase(getEvent.rejected, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = false
                state.eventError = true
                state.eventErrorMessage = action.payload
            })
            .addCase(getEventComments.pending, (state, action) => {
                state.eventLoading = true
                state.eventSuccess = false
                state.eventError = false
            })
            .addCase(getEventComments.fulfilled, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = true
                state.eventComments = action.payload
                state.eventError = false
            })
            .addCase(getEventComments.rejected, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = false
                state.eventError = true
                state.eventErrorMessage = action.payload
            })
            .addCase(addEventComment.pending, (state, action) => {
                state.eventLoading = true
                state.eventSuccess = false
                state.eventError = false
            })
            .addCase(addEventComment.fulfilled, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = true
                state.eventComments = [action.payload, ...state.eventComments]
                state.eventError = false
            })
            .addCase(addEventComment.rejected, (state, action) => {
                state.eventLoading = false
                state.eventSuccess = false
                state.eventError = true
                state.eventErrorMessage = action.payload
            })
    }
});

export const { } = eventSlice.actions

export default eventSlice.reducer


// Get Events
export const getEvents = createAsyncThunk("EVENTS/FETCH", async (_, thunkAPI) => {
    try {
        return await eventService.fetchEvents()
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// Get Event
export const getEvent = createAsyncThunk("EVENT/FETCH", async (eid, thunkAPI) => {
    try {
        return await eventService.fetchEvent(eid)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// Get Event Comments
export const getEventComments = createAsyncThunk("EVENT/FETCH/COMENTS", async (eid, thunkAPI) => {
    try {
        return await eventService.fetchEventComments(eid)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})



// Add Event Comments
export const addEventComment = createAsyncThunk("EVENT/ADD/COMENTS", async (formData, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        return await eventService.createComment(formData, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


