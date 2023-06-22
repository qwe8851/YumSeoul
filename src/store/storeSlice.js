import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
    name: 'stores',
    initialState: {
        stores: []
    },
    reducers: {
        setStoresData(state, action) {
            state.stores = action.payload;
        },
    }
});

export const { setStoresData } = storeSlice.actions;

export default storeSlice.reducer;
