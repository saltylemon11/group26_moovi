import { createSlice } from "@reduxjs/toolkit";
import { setRecord, getRecord, updateRecord, updateTracker, deleteRecord } from "../services/record";

const recordSlice = createSlice({
    // record item
    name: "record",
    initialState: {
        movieId: "",
        thumbnail: "",
        title: "",
        status: "",
        rating: "",
        comment: "",
        date: "",
        isPrivate: false,
        season: "",
        episode: "",
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
                console.log("recordSlice, setRecord, rejected, errMsg: ", payload)
                state.errorMessage = payload // TODO
            })
            .addCase(updateRecord.fulfilled, (state, { payload }) => {
                state.isFetching = false
                state.isSuccess = true
            })
            .addCase(updateRecord.pending, (state) => {
                state.isFetching = true
            })
            .addCase(updateRecord.rejected, (state, { payload }) => {
                state.isFetching = false
                state.isError = true
                console.log("recordSlice, updateRecord, rejected, errMsg: ", payload)
                state.errorMessage = payload // TODO
            })

    }
})

const recordSelector = state => state.record

export const { clearState } = recordSlice.actions
export { recordSlice, recordSelector }