import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //checking, not-authenticated, authenticated
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onLogin: (state,{payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = null;
        },
        onLogout: (state,{payload}) => {
            state.status = 'not-authenticated';
            state.user = {},
            state.errorMessage = payload;
        },
        onChecking: (state) => {
            state.status = 'cheking',
            state.user = {};
            state.errorMessage = null
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null;
        }
    }
});
            
export const { onLogin,onLogout,onChecking,clearErrorMessage } = authSlice.actions;