import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Section from '../../common/Section';
import Card from '../../common/Card';

import classes from './StoreMain.module.css';

const StoreMain = () => {
    const storesData = useSelector(state => state.stores.stores);
    const store = [...storesData];
    
    useEffect(()=>{


        
    }, [storesData]);

    return (
        <Section>
            <div className={classes['flex-box']}>
            {store.map((item, idx)=> (
                <div key={item.id}>
                    <Card width='20rem' 
                        id={item.id}
                        store={item.store}
                        store_image={item.store_image}
                        store_category={item.store_category}
                        store_description={item.store_description}
                        store_follower={item.store_follower}
                        review={item.review}
                        menu={item.menu}
                    />
                </div>
            ))}
            </div>
        </Section>
    );
}

export default StoreMain;