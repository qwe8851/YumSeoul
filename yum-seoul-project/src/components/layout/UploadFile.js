// TODO: img업로드 테스트

import React from 'react';

const UploadFile = () => {
    const requestImg = async (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        try {
            const result = await fetch('http://localhost:5000/uploads', {
                method: 'POST',
                body: formData,
            });

            if (result.ok) {
                const res = await result.json();
                console.log(res);
            } else {
                console.log(result.status);
            }
        } catch (error) {
            console.log('error: ', error);
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