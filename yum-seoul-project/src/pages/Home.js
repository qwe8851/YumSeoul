import { useEffect } from 'react';
import { Outlet, json, useLoaderData } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setStoresData } from '../store/storeSlice';

import Navigation from '../components/layout/Navigation/Navigation';
import Footer from '../components/layout/Home/Footer/Footer';

import styled from 'styled-components';
import { useState } from 'react';

const StyledHeader = styled.header`
    position: fixed;
    height: var(--height-header);
    z-index: 99;
    
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: larger;
    font-family: 'hanna Pro';
    background-color: var(--color-gray-100);

    & p {
        font-family: 'hanna Air';
        font-size: medium;
        font-weight: 500;
    };
`;

const StyledMain = styled.main`
    min-height: 100%;
    padding-bottom: var(--height-footer);
    `;
    
    const StyledFooter = styled.footer`
    transform: translateY(-100%);
`;

const HomePage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [loadMessage, setLoadMessage] = useState('맛집 정보를 불러오는 중이에요😀');

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoadMessage('조금만 기다려주세요😍');
        }, 3000);

        const fetchData = async () => {
            const response = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/store.json');

            if (!response.ok) {
                clearTimeout(loadingTimer); // 타이머 중지
                setLoading(false);
                return;
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
            
            clearTimeout(loadingTimer); // 타이머 중지
            setLoading(false);
            dispatch(setStoresData(loadedStore || []));
        };
        
        fetchData();
    }, [dispatch]);

    if (loading) {
        return (
            <StyledLoading>
                <h3>Loading...</h3>
                <p>{loadMessage}</p>
            </StyledLoading>
        ); 
    }

    return (
        <>
            <StyledHeader>
                <Navigation />
            </StyledHeader>
            <StyledMain>
                <Outlet />
            </StyledMain>
            <StyledFooter>
                <Footer />
            </StyledFooter>
        </>
    );
};

export default HomePage;
