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
        getStoreData(state, action) {
            // TODO: action.payload를 받아서 id에 맞는 정보만 보내는 함수 작성 
            const storeId = action.payload;
            const storeData = state.stores.find(store => store.id === storeId);
            // id에 해당하는 정보를 가공 또는 필요한 작업 수행
            
            return storeData; // 작업 결과 반환
        }
    }
});

export const { setStoresData, getStoreData } = storeSlice.actions;

export default storeSlice.reducer;
