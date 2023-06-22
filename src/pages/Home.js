import Navigation from '../components/layout/Navigation/Navigation';
import SwiperContent from '../components/layout/Home/Swiper/SwiperContent';
import YumSeoulSummary from '../components/layout/Home/YumSeoulSummary';
import BestStore from '../components/layout/Home/BestStore/BestStore';
import Footer from '../components/layout/Home/Footer/Footer';

import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    // height: var(--height-header);
    z-index: 99;
`;

// const StyledButton = styled.button`
//     width: 100px;
//     height: 50px;
//     display: flex;
// `;

const HomePage = () => {
    return (
        <>
            <StyledHeader>
                <Navigation />
            </StyledHeader>
            <main>
                <SwiperContent />
                <YumSeoulSummary />
                <BestStore />
                {/* TODO: 여기에 이것저것 콘텐츠 추가  */}
                {/* <StyledButton/> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default HomePage;