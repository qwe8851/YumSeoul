// TODO: img업로드 테스트

import React, { useState } from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 10rem;
    height: 10rem;
    margin: auto;
    margin-top: 50px;
    background-position: center center;
    background-size: cover;
`;

const MainContentUpload = () => {
    const [mainTitle, setMainTitle] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [mainDescription, setMainDescription] = useState('');

    const requestImg = async () => {
        const formData = new FormData();
        formData.append('image', mainImage);

        try {
            // 이미지 업로드
            const upload = await fetch('http://localhost:5000/uploads?directory=main', {
                method: 'POST',
                body: formData
            });

            const isUpload = await upload.json();
            const bgUrl = isUpload.imagePath;

            if (!isUpload.success) throw new Error('이미지 파일 업로드');

            // db에 저장
            const response = await fetch('http://localhost:5000/main', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mainTitle: mainTitle,
                    menuImage: bgUrl,
                    mainDescription: mainDescription
                })
            });

            const result = await response.json();
            console.log(result);
            if (!result.success) throw new Error('메인 콘텐츠 업로드');

            alert('업로드에 성공했어요!');
        } catch (error) {
            alert(`${error.message}에 실패했어요!`);
            console.log(error);
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <div id="imageEdit">
                <input type="text" onChange={(e) => setMainTitle(e.target.value)} />
                <input type="text" onChange={(e) => setMainDescription(e.target.value)} />
                <input
                    type="file"
                    id="image_uploads"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setMainImage(e.target.files[0])}
                />
                <button onClick={requestImg}>저장</button>
            </div>
            <StyledDiv />
        </div>
    );
}

export default MainContentUpload; 