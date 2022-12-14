import React from "react";
import { Navigate } from "react-router-dom";
import ProfileView from "./profileView";
import { useAuthValue } from "../../authContext";

function Profile() {
    // 这个 currentUser 好像是个 promise 吧
    const { currentUser } = useAuthValue()
    console.log('Profile', currentUser)
    //await timeout(1000)
    /*
    if (currentUser) {
        return <ProfileView username={currentUser} />
    } else {
        return <Navigate to='/login' />
    }
    */
    return <ProfileView username={currentUser} />
}

export default Profile