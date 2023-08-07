import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import storesReducer from './storesSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        stores: storesReducer,
    },
});

export default store;