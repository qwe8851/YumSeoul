import React from 'react';
import { useSelector } from 'react-redux';

import Section from '../../common/Section';
import Card from '../../common/Card';

import classes from './StoreMain.module.css';
import { useNavigate } from 'react-router-dom';

const StoreMain = () => {
    const storesData = useSelector(state => state.stores.stores);
    const navigate = useNavigate();

    const showStoreDetailHandler = (storeId) => {
        console.log(storeId);


        navigate(storeId);
        
    }

    return (
        <Section>
            <div className={classes['flex-box']}>
                <div className={classes['main-title']}>
                    <h1>YumSeoul에서 편안한 식사를 하세요!</h1>
                    <p>YumSeoul은 여러분들의 일상을 조금 더 행복하게 하도록 오늘도 달리고 있습니다.</p>
                    <p>
                        YumSeoul은 대한민국을 넘어 세계를 향해 나아갑니다. <br />
                        평범한 사람들이 모여 비범한 성과를 만들어 내는 곳이 될 수 있도록 맛있고 건강한 문화를 만드는 일에 진심을 다합니다.</p>
                </div>
                {storesData.map((item) => (
                    <div key={item.id} style={{width: '20rem'}}>
                        <Card
                            id={item.id}
                            store={item.store}
                            image={item.store_image}
                            category={item.store_category}
                            description={item.store_description}
                            follower={item.store_follower}
                            review={item.review}
                            menu={item.menu}
                            onClick={() => showStoreDetailHandler(item.id)}
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default StoreMain;