import axios from "axios";

// Redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./Auth.type";

// redux actions
import { getMyself, clearUser } from "../User/user.action";

//Signin
export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signin`,
      data: { credentials: userData },
    });

    getMyself();

    localStorage.setItem(
      "cubyUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

//GoogleAuth
export const googleAuth = (token) => async (dispatch) => {
  try {
    localStorage.setItem("cubyUser", JSON.stringify({ token }));

    getMyself();

    return dispatch({ type: GOOGLE_AUTH, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

//Signout
export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("cubyUser");
    clearUser();
    window.location.href = "http://localhost:3000/delivery";
    
    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signup`,
      data: { credentials: userData },
    });

    getMyself();

    localStorage.setItem(
      "cubyUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
