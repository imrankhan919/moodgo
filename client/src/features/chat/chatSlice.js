import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { chat } from './chatService';

const initialState = {
    chatResponses: [{
        sender: "ai",
        message: "Hey! 👋 I'm MoodGo AI. I can help you discover events that match your mood. What are you looking for?"
    }],
    chatLoading: false,
    chatSuccess: false,
    chatError: false,
    chatErrorMessage: false
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendFromUserMessage: (state, action) => {
            return {
                ...state,
                chatResponses: [action.payload, ...state.chatResponses]
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state, action) => {
                state.chatLoading = true
                state.chatSuccess = false
                state.chatError = false
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.chatLoading = false
                state.chatSuccess = true
                state.chatResponses = [action.payload, ...state.chatResponses]
                state.chatError = false
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.chatLoading = false
                state.chatSuccess = false
                state.chatError = true
                state.chatErrorMessage = action.payload
            })
    }
});

export const { sendFromUserMessage } = chatSlice.actions


export const sendMessage = createAsyncThunk("CHAT/AI", async (message, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token

    try {
        return await chat(message, token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})




export default chatSlice.reducer