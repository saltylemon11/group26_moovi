import { createSlice } from "@reduxjs/toolkit";
import { setRecord, getRecord, deleteRecord } from "../services/library";

const librarySlice = createSlice({
    // record item
    name: "record",
    initialState: {
        movieId: "",
        status: "",
        rating: "",
        comment: "",
        date: "",
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
            .addCase(setRecord.fulfilled, (state, { payload }) => {
                state.isFetching = false
                state.isSuccess = true
            })
            .addCase(setRecord.pending, (state) => {
                state.isFetching = true
            })
            .addCase(setRecord.rejected, (state, { payload }) => {
                state.isFetching = false
                state.isError = true
                state.errorMessage = payload.message // TODO
            })
    }
})

const librarySelector = state => state.user

export const { clearState } = librarySlice.actions
export { librarySlice, librarySelector }