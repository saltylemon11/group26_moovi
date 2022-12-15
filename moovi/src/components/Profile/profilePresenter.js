import React from "react";
import { Navigate } from "react-router-dom";
import ProfileView from "./profileView";
import { auth } from '../../services/firebase'
import { onAuthStateChanged } from 'firebase/auth';

function Profile() {
    const [currentUser, setCurrentUser] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setIsLoading(false)
        })
    }, [])

    return !isLoading && (currentUser?
        <ProfileView user={currentUser} />:
        <Navigate to='/login' />)
}

export default Profile