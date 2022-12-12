import { createSlice } from '@reduxjs/toolkit'
import { signupUser } from '../services/user'

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        email: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ""
    },
    reducers: {
        clearState: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isFetching = false
            
            return state
        }

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = true
            state.email = payload.user.email
            state.username = payload.user.name
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload.message
        }


    },
})

const userSelector = state => state.user

export const { clearState } = userSlice.actions
export { userSlice, userSelector }