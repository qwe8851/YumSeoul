import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../../store/authSlice';

import { isEmail, isPassword } from '../../../pages/Auth';

import useInput from '../../../hooks/use-input';

import Logo from '../../common/Logo';
import Card from '../../common/Card';
import Form from '../../common/Form';
import Input from '../../common/Input';
import Button from '../../common/Button';

const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => isEmail(value));

    const {
        value: enteredPw,
        isValid: enteredPwIsValid,
        hasError: pwInputHasError,
        valueChangeHandler: pwChangeHandler,
        inputBlurHandler: pwBlurHandler,
        reset: resetPwInput,
    } = useInput((value) => isPassword(value));

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
            const response = await fetch('http://localhost:5000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPw
                })
            });

            const result = await response.json();

            if (!result.success) throw new Error();

            dispatch(setAuthToken(result.token));
            
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
        <>
            <Logo />
            <Card width='30rem'>
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
                            autoComplete='off'
                        />
                        {pwInputHasError && <p className='error-text'>비밀번호는 8자 이상 입력해 주세요.</p>}
                    </div>
                    {isSubmitSuccess && <p className='error-text'>{errorMessage}</p>}
                    <Button primary='true' disabled={!formIsValid}>로그인</Button>
                    <Link to='/auth/signup'><Button>회원가입</Button></Link>
                    <hr/>
                    <Link to='/auth/resetpassword'><Button>비밀번호 재설정</Button></Link>
                </Form>
            </Card >
        </>
    );
}

export default Signin;