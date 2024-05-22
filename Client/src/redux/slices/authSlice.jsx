import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../../api/auth";

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
        loadingstate: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        loginstate: (state , action) => {
          return{
            ...state,
            user: action.payload.data,
            token: action.payload.access_token,
            authenticated: true,
          }
        },
        logoutstate: (state) => {
            return {
                ...state,
                token: null,
                loading: false,
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
        dispatch(loadingstate());
        const res = await register(userData);

        dispatch(loginstate(res.data));
        window.localStorage.setItem("token", res.data.access_token);
        window.localStorage.setItem("user", JSON.stringify(res.data.data));
      } catch (error) {
        dispatch(registerFail(error ));
      }
    };
  };


export const loginUser = (userData) => {
    return async (dispatch) => {
      try {
        dispatch(loadingstate());
        const res = await login(userData);
      
        dispatch(loginstate(res.data));
        window.localStorage.setItem("token", res.data.access_token);
        window.localStorage.setItem("user", JSON.stringify(res.data.data));
        
      } catch (error) {
        dispatch(loginFail(error));
      }
    };
  };
export const logoutUser = () => {
    return async (dispatch) => {
      try {
        dispatch(loadingstate());
        const res = await logout();
        console.log(res.data);
        if (res.data) {
        dispatch(logoutstate());
        
        }
      } catch (error) {
        dispatch(loginFail(error));
      }
    };
  };

export const { loginstate, logoutstate, registerFail, loginFail, loadingstate } = authslice.actions;
export default authslice.reducer