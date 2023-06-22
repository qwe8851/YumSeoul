import React from 'react';
import { useSelector } from 'react-redux';

import SwiperContent from '../components/layout/Home/Swiper/SwiperContent';
import YumSeoulSummary from '../components/layout/Home/YumSeoulSummary/YumSeoulSummary';
import BestStore from '../components/layout/Home/BestStore/BestStore';

import styled from 'styled-components';

const StyledMain = styled.main`
    gap: 15rem;
`;

const MainPage = () => {
    // 여기서 보내는 storesData를 직접 변경하면 안됨 shallowCopy해서 사용 
    const storesData = useSelector(state => state.stores.stores);

    return (
        <StyledMain>
            <SwiperContent />
            <YumSeoulSummary stores={storesData.length} />
            <BestStore storesData={storesData }/>
        </StyledMain>
    );
}

export default MainPage;