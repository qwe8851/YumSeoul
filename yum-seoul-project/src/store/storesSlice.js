import { createSlice } from '@reduxjs/toolkit';

const storesSlice = createSlice({
    name: 'stores',
    initialState: {
        stores: []
    },
    reducers: {
        getStoreData: (state, action) => {
            const storeId = action.payload;
            const storeData = state.stores.find(store => store.id === storeId);
            
            state.stores = storeData;
        },
        setStoresData: (state, action) => {
            state.stores = action.payload;
        },
    }
});

export const {
    setStoresData,
    getStoreData
} = storesSlice.actions;

export default storesSlice.reducer;