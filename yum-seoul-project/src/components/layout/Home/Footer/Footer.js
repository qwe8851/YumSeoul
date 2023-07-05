import React, { useEffect, useRef, useState } from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    const [rotate, setRotate] = useState(0);
    const [scale, setScale] = useState(0);
    const selectRef = useRef(null);

    const toggleSelectList = () => {
        setRotate(prev => prev === 0 ? -180 : 0);
        setScale(prev => prev === 0 ? 1 : 0);
    }

    // selectRef가 아닌 다른 부분을 클릭했을때 ul태그 닫기
    useEffect(() => {
        const clickOutsideHandler = (event) => {
            if (scale === 1 && selectRef.current && !selectRef.current.contains(event.target)) {
                setRotate(0);
                setScale(0);
            }
        }

        document.addEventListener('click', clickOutsideHandler);

        return () => {  // cleanup function 
            document.removeEventListener('click', clickOutsideHandler);
        }
    }, [scale]);

    return (
        <div className={classes['footer-inner']}>
            <div className={classes['flex-box']}>
                <div ref={selectRef} className={classes['footer-link-select']}>
                    <button type="button" onClick={toggleSelectList}>
                        <span>관련 사이트</span>
                        <span className={classes.down} style={{ transform: `rotate(${rotate}deg)` }}>
                            <svg width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2l4 4 4-4" stroke="#232324" strokeWidth="1.5" strokeLinecap="square"></path>
                            </svg>
                        </span>
                    </button>
                    <ul className={classes['link-select-list']} style={{ transform: `scale(${scale})` }}>
                        <li>
                            <a href="https://github.com/qwe8851" target="_blank" rel="noopener noreferrer">Github 🔗</a>
                        </li>
                        <li>
                            <a href="https://eggeggeggkid.tistory.com/" target="_blank" rel="noopener noreferrer">기술 블로그 💻</a>
                        </li>
                        <li>
                            <a href="https://www.notion.so/I-Web-Frontend-Devloper-40e117a5a9a0495198edecab14c3aa69?pvs=4" target="_blank" rel="noopener noreferrer">Notion 📓</a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer-address']}>
                    <h2>YumSeoul</h2>
                    <p>사업자등록번호 : 000-00-00000 | 대표 : 얌서울 | 주소: 서울시 노원구 상계동 | 이메일 : dgh07027@naver.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;