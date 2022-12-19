import React from "react";
import { Navigate } from "react-router-dom";
import ProfileView from "./profileView";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { librarySelector, clearState } from "../../slices/librarySlice";
import { useDispatch, useSelector } from "react-redux";
import { getLibrary } from "../../services/library";
import { store } from "../../app/store";

function Profile() {
    const [currentUser, setCurrentUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState([])

    const dispatch = useDispatch()
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(librarySelector)

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setIsLoading(false)
        })
    }, [])

    React.useEffect(() => {
        if (isSuccess) {
            setData(store.getState().library.data)
            dispatch(clearState())
        }
        if (isError) {
            console.log('error:', errorMessage)
            dispatch(clearState())
        }
    }, [isSuccess, isError])

    React.useEffect(() => {
        if (currentUser) dispatch(getLibrary(currentUser.email))
    }, [currentUser])

    return !isLoading && (currentUser ?
        <ProfileView user={currentUser} data={data} /> :
        <Navigate to='/login' />)
}

export default Profile