import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";

const initialState = {
    user: null,
    loading: false,
    token: null,
    authenticated: false,
    error: null,
};

const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginstate: (state) => {
          return{
            ...state,
            // user: action.payload.user,
            // token: action.payload.token,
            authenticated: true,
          }
        },
        logoutstate: (state) => {
            return {
                ...state,
                user: null,
                authenticated: false,
            }
        },

        registerFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        loginFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
    },
});

export const registerUser = (userData )=> {
    return async (dispatch) => {
      try {
        const res = await register(userData);

        dispatch(loginstate(res.data));
      } catch (error) {
        dispatch(registerFail(error ));
      }
    };
  };


export const loginUser = (userData) => {
    return async (dispatch) => {
      try {
        const res = await login(userData);
        console.log(res.data);
        if (res.data.message ==='Login successful') {
        dispatch(loginstate(res.data));
        }
      } catch (error) {
        dispatch(loginFail(error));
      }
    };
  };
export const { loginstate, logoutstate, registerFail, loginFail } = authslice.actions;
export default authslice.reducer