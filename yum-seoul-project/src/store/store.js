import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import storeReducer from './storeSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        stores: storeReducer,
    },
});

export default store;