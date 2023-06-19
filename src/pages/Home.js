import SwiperContent from '../components/layout/Home/Swiper/SwiperContent';
import Navigation from '../components/layout/Navigation/Navigation';

const HomePage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <SwiperContent />
                {/* TODO: 여기에 이것저것 콘텐츠 추가  */}
            </main>
        </>
    );
}

export default HomePage;