import React, { useEffect, useRef, useState } from 'react';

import SlideItem from './SlideItem';

import classes from './SwiperContent.module.css';

const SwiperContent = () => {
    const swiperRef = useRef(null);
    const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(0); // swiper 현재 위치 상태값
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        const fetchImageData = async () => {
            const response = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/image/main.json');
            const data = await response.json();

            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    imageUrl: data[key].imageUrl,
                    title: data[key].title,
                    description: data[key].description,
                });
            }

            setImageData(loadedMeals);
        };

        fetchImageData();
    }, []);

    useEffect(()=>{
        if (swiperRef.current) {
            swiperRef.current.style.width =
                imageData ? `${imageData.length}00vw` : '0';
        }
    }, [imageData]);

    useEffect(() => {
        if (!imageData) return;

        const swiperLoop = setTimeout(() => {
            setSwiperCurrentPosition((prev) => {
                if (prev < imageData.length - 1) {
                    return prev + 1;
                } else {
                    return 0;
                }
            });
        }, 4000);

        if (swiperRef.current) {
            swiperRef.current.style.transform =
                swiperCurrentPosition === 0 ? 'translateX(0vw)' : `translateX(-${swiperCurrentPosition}00vw)`;
        }

        return () => clearTimeout(swiperLoop);
    }, [imageData, swiperCurrentPosition]);

    return (
        <section className={classes['swiper-container']}>
            <div className={classes['swiper-wrap']}>
                <div ref={swiperRef} className={classes['swiper_list']}>
                    {imageData &&
                        imageData.map((item) => (
                            <SlideItem
                                key={item.id}
                                imageurl={item.imageUrl}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default SwiperContent;