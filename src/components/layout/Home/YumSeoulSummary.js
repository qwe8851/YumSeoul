import React, { useEffect, useState } from 'react';

const YumSeoulSummary = () => {
    const [stores, setStores] = useState(0);

    useEffect(()=>{
        const fetchRandomStore = async () => {
            const result = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/store.json');

            const data = await result.json();
            const length = Object.keys(data).length;
            
            setStores(length);
        }

        fetchRandomStore().catch((error) => {
            setStores(0);
        });

    }, []);

    return (
        // YumSeoul Summary
        <section>
            <div className="main-title">
                <h1>Delicious Food, Delivered To You!</h1>
                <p>YumSeoul에 입점된 {stores}개의 맛집들에서 다양한 가게와 좋아하는 식사를 선택해보세요.</p>
                <p>YumSeoul은 까다로운 절차로 검증된 맛집들과, 빠른 시간내에 식사를 즐길 수 있도록 노력합니다.</p>
                <p>그럼, 오늘도 Yum! </p>
            </div>
        </section>
    );
}

export default YumSeoulSummary;