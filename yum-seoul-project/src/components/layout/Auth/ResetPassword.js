import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { authService } from '../../../utils/firebaseAuth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { isEmail } from '../../../pages/Auth';

import useInput from '../../../hooks/use-input';

import Logo from '../../common/Logo';
import Card from '../../common/Card';
import Form from '../../common/Form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const Signup = () => {
    const navigate = useNavigate();

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

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
    }

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        if (!enteredEmailIsValid) return;

        try {
            await sendPasswordResetEmail(authService, enteredEmail);
            alert(`${enteredEmail}으로 비밀번호 재설정 메일이 전송되었습니다.`);
            navigate('../signin');
        } catch (error) {
            setIsSubmitSuccess(true);
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
                    {isSubmitSuccess && <p className='error-text'>{errorMessage}</p>}
                    <Button primary='true' disabled={!enteredEmailIsValid}>비밀번호 재설정</Button>
                    <Link to='/auth/signin'><Button>로그인하러 가기</Button></Link>
                </Form>
            </Card >
        </>
    );
}

export default Signup;