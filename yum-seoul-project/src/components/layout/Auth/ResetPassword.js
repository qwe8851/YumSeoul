import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { isEmail } from '../../../pages/Auth';

import useInput from '../../../hooks/use-input';

import Logo from '../../common/Logo';
import Card from '../../common/Card';
import Form from '../../common/Form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const ResetPassword = () => {
    const navigate = useNavigate();

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => isEmail(value));

    const emailInputChangeHandler = (event) => {
        emailChangeHandler(event);
        setIsSubmitSuccess(false);
        setErrorMessage('');
    };

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        if (!enteredEmailIsValid) return;

        try {
            const response = await fetch('http://localhost:5000/users/reset-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail
                })
            });

            if(response.ok) {
                setIsSubmitSuccess(true);
                setErrorMessage('');
                // navigate('../signin');
            }else {
                const errorData = await response.json();
                setIsSubmitSuccess(false);
                setErrorMessage(errorData.error || '가입되지 않은 회원입니다.');
            }
        } catch (error) {
            setIsSubmitSuccess(false);
            setErrorMessage("가입되지 않은 회원입니다.");
        }
    };

    const emailInputClasses = emailInputHasError ? 'invalid' : undefined;

    return (
        <>
            <Logo />
            <Card width='30rem'>
                <h1>Reset password</h1>
                <Form onSubmit={formSubmissionHandler}>
                    <div className={emailInputClasses}>
                        <Input
                            type='email'
                            onChange={emailInputChangeHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                            placeholder='email'
                        />
                        {emailInputHasError && <p className='error-text'>이메일이 올바르지 않습니다.</p>}
                    </div>
                    {isSubmitSuccess && <p className="success-text">비밀번호 재설정 메일이 전송되었습니다. ☺️</p>}
                    {errorMessage && <p className="error-text">{errorMessage}</p>}
                    <Button primary='true' disabled={!enteredEmailIsValid}>비밀번호 재설정</Button>
                    <hr />
                    <Link to='/auth/signin'><Button>로그인하러 가기</Button></Link>
                </Form>
            </Card >
        </>
    );
}

export default ResetPassword;