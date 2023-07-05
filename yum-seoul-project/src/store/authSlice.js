import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: ''
    },
    reducers: {
        setAuthToken(state, action) {
            state.token = action.payload;
        },
        clearAuthToken: (state) => {
            state.token = '';
        },
    }
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;