import { createSlice } from "@reduxjs/toolkit";
import { getLibrary } from '../services/library'

const librarySlice = createSlice({
    name: "library",
    initialState: {
        data: [],
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
    extraReducers: (builder) => {
        builder
        .addCase(getLibrary.fulfilled, (state, { payload }) => {
            state.isFetching = false
            state.isSuccess = true
            state.data = payload
        })
        .addCase(getLibrary.pending, (state) => {
            state.isFetching = true
        })
        .addCase(getLibrary.rejected, (state, { payload }) => {
            state.isFetching = false
            state.isError = true
            state.errorMessage = payload
        })
    }
})

const librarySelector = state => state.library

export const { clearState } = librarySlice.actions

export { librarySlice, librarySelector }