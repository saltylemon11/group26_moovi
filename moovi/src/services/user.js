import { createAsyncThunk } from "@reduxjs/toolkit"

const signupUser = createAsyncThunk(
    "users/signup",
    async(data, thunkAPI) => {
        const { name, email, password } = data
        try {
            const option = {
                method: 'POST',
                headers: {
                    //something
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            }
            const response = await fetch('someurl', option)
            let data = await response.json()
            if (response.ok) {
                localStorage.setItem('token', data.token)
                return {
                    ...data,
                    username: name,
                    email: email,
                }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log('Error', e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const loginUser = createAsyncThunk(
    'users/login',
    async(data, thunkAPI) => {
        const { email, password } = data
        try {
            const option = {
                method: 'POST',
                headers: {
                    //something
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            }
            const response = await fetch('someurl', option)
            let data = await response.json()
            if (response.ok) {
                localStorage.setItem('token', data.token)
                return data
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch(e) {
            console.log('Error', e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export { signupUser, loginUser }