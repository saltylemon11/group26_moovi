import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from './firebase'
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite'

// user's email
let colRef

const setRecord = createAsyncThunk(
    "record/setRecord",
    async (data, thunkAPI) => {
        colRef = data.email
        const docRef = doc(db, colRef, data.movieId)
        const record = {
            movieId: data.movieId,
            thumbnail: data.thumbnail,
            title: data.title,
            status: data.status,
            date: data.date,
            rating: data.rating,
            comment: data.comment,
            isPrivate: data.isPrivate,
            season: data.season,
            episode: data.episode
        }
        //console.log(record)
        await setDoc(docRef, record)
    }
)

// update movie tracker
const updateTracker = createAsyncThunk(
    "record/updateTracker",
    async (data, thunkAPI) => {
        colRef = data.email
        const docRef = doc(db, colRef, data.movieId)
        const newRecord = {
            season: data.season,
            episode: data.episode
        }
        await updateDoc(docRef, newRecord)
    }
)

// update record in library
const updateRecord = createAsyncThunk(
    "record/updateRecord",
    async (data, thunkAPI) => {
        console.log(data)
        colRef = data.email
        const docRef = doc(db, colRef, data.movieId)
        const newRecord = {
            status: data.status,
            rating: data.rating,
            comment: data.comment,
            date: data.date,
            isPrivate: data.isPrivate
        }
        await updateDoc(docRef, newRecord)
    }
)

// get single record by movieId
const getRecord = createAsyncThunk(
    "record/getRecord",
    async (data, thunkAPI) => {
        let colRef = data.email
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
    "record/deleteRecord",
    async (data, thunkAPI) => {
        const docRef = doc(db, colRef, data.movieId)
        await deleteDoc(docRef)
    }
)

export { setRecord, getRecord, updateRecord, updateTracker, deleteRecord }