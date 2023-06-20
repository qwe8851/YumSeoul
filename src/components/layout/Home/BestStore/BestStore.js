import React, { useEffect, useState } from 'react';

import classes from './BestStore.module.css';

const BestStore = () => {
    const [top3Stores, setTop3Stores] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchRandomStore = async () => {
            const result = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/store.json');

            if (!result.ok) {
                throw new Error('Failed to get data from the server!');
            }

            const data = await result.json();

            // 데이터 포맷
            const loadedStore = [];
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const review = Array.isArray(data[key].review) ? data[key].review.length : 0;
                    loadedStore.push({
                        id: key,
                        store: data[key].store,
                        description: data[key].description,
                        review: review,
                    });
                }
            }

            // review 개수를 기준으로 내림차순 정렬 후 상위 3개의 항목 선택
            const sortedStores = loadedStore.sort((a, b) => b.review - a.review);
            setTop3Stores(sortedStores.slice(0, 3));
        }

        fetchRandomStore().catch((error) => {
            setIsError(true);
            setErrorMessage(error.message);
        });

    }, []);

    const storeResult =
        <div className={classes['flex-box']}>
            {top3Stores && top3Stores.map((item, idx) => (
                <div key={item.id} className={classes['flex-item']}>
                    <div>
                        <h1 className={classes['store-ranking']}>{idx + 1}</h1>
                        <h1>{item.store}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>;

    return (
        <section className={classes['best-store']}>
            <div className='main-title'>
                <h1>YumSeoul Top3 가게를 소개합니다!</h1>
                <p>YumSeoul에서 이번 달 가장 핫한 가게 세 곳을 소개드려요!</p>
            </div>
            <div className='main-content'>
                {isError && <p className='error-text'>{errorMessage}<br /><br />이용에 불편을 드려 죄송합니다.<br />새로고침으로 데이터를 불러와 주세요.</p>}
                {!isError && storeResult}
            </div>
        </section>
    );
}

export default BestStore;