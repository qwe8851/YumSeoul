import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setStoresData } from '../store/storesSlice';

import Navigation from '../components/layout/Navigation/Navigation';
import Footer from '../components/layout/Home/Footer/Footer';

import * as S from '../styles/Layout.styled';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/store.json');

            if (!response.ok) {
                return alert("오류");
            }

            const data = await response.json();

            // 데이터 포맷
            const loadedStore = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    loadedStore.push({
                        id: key,
                        store: data[key].store,
                        store_image: data[key].store_image,
                        store_description: data[key].store_description,
                        store_category: data[key].store_category,
                        store_follow: data[key].store_follow,
                        store_follower: data[key].store_follow,
                        menu: data[key].menu,
                        review: data[key].review,
                    });
                }
            }
            
            dispatch(setStoresData(loadedStore || []));
        };
        
        fetchData();
    }, [dispatch]);

    return (
        <>
            <S.Header>
                <Navigation />
            </S.Header>
            <S.Main>
                <Outlet />
            </S.Main>
            <S.Footer>
                <Footer />
            </S.Footer>
        </>
    );
};

export default HomePage;
