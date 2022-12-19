import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

// user's email
let colRef

// get records of a user by their email
const getLibrary = createAsyncThunk(
    "lib/getLibrary",
    async (data, thunkAPI) => {
        let colRef = data
        //console.log('colRef',colRef)
        const docRef = collection(db, colRef)
        //const docRef = collection(db, colRef) // a colref actually
        try {
            const response = await getDocs(docRef)
            //return response
            return response.docs.map((doc) => {return doc.data()})
        } catch (err) {
            //console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export { getLibrary }