import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, clearState } from "../../slices/userSlice";
import { loginUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import LoginView from "./loginView";
//import { useAuthValue } from "../../authContext";

function Login() {
    const dispatch = useDispatch()
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector)
    //const { currentUser } = useAuthValue()

    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.log(data)
        dispatch(loginUser(data))
    }

    React.useEffect(() => {
        return () => {
            dispatch(clearState())
        }
    }, [])

    React.useEffect(() => {
        if (isSuccess) {
            dispatch(clearState())
            navigate("/")
        }
        if (isError) {
            console.log(errorMessage)
            dispatch(clearState())
        }
    }, [isSuccess, isError])

    return <LoginView onSubmit={onSubmit} />
}

export default Login
