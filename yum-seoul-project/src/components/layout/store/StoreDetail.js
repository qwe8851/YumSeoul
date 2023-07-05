import React from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

import Section from '../../common/Section';
import { getStoreData } from '../../../store/storeSlice';
import { useSelector } from 'react-redux';

const StoreDetail = () => {
    const storeId = useParams();
    // const loadedStore = useLoaderData(); 
    // console.log("loadedStore : ", loadedStore)

    
    const storesData = useSelector(state => state.stores.stores);
    const store = [...storesData];

    const storeData = store.find(store => store.id === storeId);
    // id에 해당하는 정보를 가공 또는 필요한 작업 수행

    return (
        <Section>
            <h1>StoreDetail</h1>
            {/* <p>{storeData}</p> */}
        </Section>
    );
}

export default StoreDetail;

export const loader = async ({ params }) => {
    // const storeId = params.storeId;
    // const result = 

    // return result;
}