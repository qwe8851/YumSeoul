import React from 'react';
import { useParams } from 'react-router-dom';

import Section from '../../common/Section';

const StoreDetail = () => {
    const params = useParams();
    
    return (
        <Section>
            <h1>StoreDetail</h1>
            <p>{params.storeId}</p>
        </Section>
    );
}

export default StoreDetail;