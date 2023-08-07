import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Section from '../../common/Section';
import { useSelector } from 'react-redux';

const StoreDetail = () => {
    const storeId = useParams();
    const store = useSelector(state => state.stores.stores);

    useEffect(() => {
        console.log(1);
    }, [store, storeId]);

    // id에 해당하는 정보를 가공 또는 필요한 작업 수행

    return (
        <Section>
            <h1>StoreDetail</h1>
            {/* <p>{storeInfo}</p> */}
        </Section>
    );
}

export default StoreDetail;