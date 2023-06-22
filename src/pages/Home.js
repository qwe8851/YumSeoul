import { Outlet, json, useLoaderData } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setStoresData } from '../store/storeSlice';

import Navigation from '../components/layout/Navigation/Navigation';
import Footer from '../components/layout/Home/Footer/Footer';

import styled from 'styled-components';
import { useEffect } from 'react';

const StyledHeader = styled.header`
    position: fixed;
    height: var(--height-header);
    z-index: 99;
`;

const HomePage = () => {
    const loadedStore = useLoaderData(); 
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setStoresData(loadedStore || []));
    }, [dispatch, loadedStore]);
    
    return (
        <>
            <StyledHeader>
                <Navigation/>
            </StyledHeader>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default HomePage;

export const loader = async () => {
    const response = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/store.json');
    
    if (!response.ok) {
        return json(
            { message: 'Failed to get data from the server!' },
            { status: 500 }
        );
    } else {
        const data = await response.json();

        // 데이터 포맷
        const loadedStore = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const review = Array.isArray(data[key].review) ? data[key].review.length : 0;
                loadedStore.push({
                    id: key,
                    store: data[key].store,
                    store_image: data[key].store_image,
                    store_description: data[key].store_description,
                    review: review,
                });
            }
        }

        return loadedStore;
    }
}