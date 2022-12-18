import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from './firebase'
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore/lite'

// mockuser 换成 user 的 email 地址 (string)
const colRef = "mockuser"

const setRecord = createAsyncThunk(
    "lib/setRecord",
    async (data, thunkAPI) => {
        const docRef = doc(db, colRef, data.movieId)
        const record = {
            movieId: data.movieId,
            status: data.status,
            date: data.date,
            rating: data.rating,
            comment: data.comment,
            isPrivate: data.isPrivate
        }
        //console.log(record)
        await setDoc(docRef, record)
    }
)

const getRecord = createAsyncThunk(
    "lib/getRecord",
    async (data, thunkAPI) => {
        const docRef = doc(db, colRef, data.movieId)
        const response = await getDoc(docRef)
        if (response.exists()) {
            return response.data()
        } else {
            console.log('No such doucment: ', docRef)
            return thunkAPI.rejectWithValue(docRef)
        }
    }
)

const deleteRecord = createAsyncThunk(
    "lib/deleteRecord",
    async (data, thunkAPI) => {
        const docRef = doc(db, colRef, data.movieId)
        await deleteDoc(docRef)
    }
)

export { setRecord, getRecord, deleteRecord }