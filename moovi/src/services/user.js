import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// https://firebase.google.com/docs/auth/web/password-auth
const signupUser = createAsyncThunk("users/signup", async (data, thunkAPI) => {
  const { email, password } = data;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // email, uid, displayName toka
    let data = response.user;
    return {
      uid: data.uid,
      email: data.email,
    };
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const loginUser = createAsyncThunk("users/login", async (data, thunkAPI) => {
  const { email, password } = data;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    let data = response.user;
    return {
      uid: data.uid,
      email: data.email,
    };
  } catch (e) {
    console.log(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const currentUser = auth.currentUser;

export { signupUser, loginUser, currentUser };
