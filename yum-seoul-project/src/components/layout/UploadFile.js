// TODO: img업로드 테스트

import React from 'react';

const UploadFile = () => {
    const requestImg = async (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        try {
            const response = await fetch('http://localhost:5000/uploads', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            console.log(result);

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
        </div>
    );
};

export default UploadFile;