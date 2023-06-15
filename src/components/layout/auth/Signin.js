import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../../../utils/firebaseAuth';

import useInput from '../../../hooks/use-input';
import { isNotEmail, isNotPassword } from '../../../pages/Auth';

import Card from '../../common/Card';
import Input from '../../common/Input';
import Form from '../../common/Form';
import Button from '../../common/Button';

const Signin = () => {
    const navigate = useNavigate();

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => !isNotEmail(value));

    const {
        value: enteredPw,
        isValid: enteredPwIsValid,
        hasError: pwInputHasError,
        valueChangeHandler: pwChangeHandler,
        inputBlurHandler: pwBlurHandler,
        reset: resetPwInput,
    } = useInput((value) => !isNotPassword(value));

    const formIsValid = enteredPwIsValid && enteredEmailIsValid;

    const emailInputChangeHandler = (event) => {
        emailChangeHandler(event);
        setIsSubmitSuccess(false);
    }

    const pwInputChangeHandler = (event) => {
        pwChangeHandler(event);
        setIsSubmitSuccess(false);
    }

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        if (!enteredEmailIsValid || !enteredPwIsValid) return;

        try {
            const result = await signInWithEmailAndPassword(authService, enteredEmail, enteredPw);
            const idToken = result.user.idToken;
            window.localStorage.setItem("access_token", idToken);

            resetPwInput();
            resetEmailInput();

            navigate('/');
        } catch (error) {
            setIsSubmitSuccess(true);
            setErrorMessage("이메일과 패스워드를 확인해주세요.");
        }
    };

    const emailInputClasses = emailInputHasError ? 'invalid' : undefined;
    const pwInputClasses = pwInputHasError ? 'invalid' : undefined;

    return (
        <Card>
            <h1>Login</h1>
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
                <div className={pwInputClasses}>
                    <Input
                        type='password'
                        onChange={pwInputChangeHandler}
                        onBlur={pwBlurHandler}
                        value={enteredPw}
                        placeholder='password'
                        autoComplete='on'
                    />
                    {pwInputHasError && <p className='error-text'>비밀번호가 올바르지 않습니다.</p>}
                </div>
                {isSubmitSuccess && <p className='error-text'>{errorMessage}</p>}
                <Button primary='true' disabled={!formIsValid}>로그인</Button>
                <Link to='../signup'>
                    <Button>회원가입</Button>
                </Link>
            </Form>
        </Card >
    );
}

export default Signin;