// TODO: img업로드 테스트

import React, { useState } from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 10rem;
    height: 10rem;
    margin: auto;
    margin-top: 50px;

    background-image: url(${props => props.bgUrl || 'none'});
    background-position: center center;
    background-size: cover;
`;

const UploadFile = () => {
    const [bgUrl, setBgUrl] = useState('');

    const requestImg = async (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        try {
            const response = await fetch('http://localhost:5000/uploads', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log(result.imagePath);
            setBgUrl(result.imagePath);

            if (!result.success) throw new Error();


            alert('이미지 파일이 업로드 되었어요!');
        } catch (error) {
            alert('이미지 파일 업로드에 실패했어요!');
            console.log(error);
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <div id="imageEdit">
                <input
                    type="file"
                    id="image_uploads"
                    name="image"
                    accept="image/*"
                    onChange={requestImg}
                />
            </div>
            <StyledDiv bgUrl={bgUrl}></StyledDiv>
        </div>
    );
};

export default UploadFile;