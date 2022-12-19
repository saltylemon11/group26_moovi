import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, clearState } from "../../slices/userSlice";
import { signupUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import SignUpView from "./signUpView";

function SignUp() {
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    //console.log(data)
    dispatch(signupUser(data));
  };

  React.useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate("/");
    }
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return <SignUpView onSubmit={onSubmit} />;
}

export default SignUp;
