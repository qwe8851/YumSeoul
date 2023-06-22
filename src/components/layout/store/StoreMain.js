import React from 'react';
import { useSelector } from 'react-redux';

import Section from '../../common/Section';

const StoreMain = () => {
    const storesData = useSelector(state => state.stores.stores);
    console.log("storesData : ", storesData);

    return (
        <Section>
            <h1>test</h1>
        </Section>
    );
}

export default StoreMain;