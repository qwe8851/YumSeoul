import Navigation from '../components/layout/Navigation/Navigation';
import SwiperContent from '../components/layout/Home/Swiper/SwiperContent';
import BestStore from '../components/layout/Home/BestStore/BestStore';

import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    // height: var(--height-header);
    z-index: 99;
`;

const HomePage = () => {
    return (
        <>
            <StyledHeader>
                <Navigation />
            </StyledHeader>
            <main>
                <SwiperContent />
                <BestStore />
                {/* TODO: 여기에 이것저것 콘텐츠 추가  */}
            </main>
        </>
    );
}

export default HomePage;