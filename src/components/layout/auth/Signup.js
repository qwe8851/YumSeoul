import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { authService } from '../../../utils/firebaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { isEmail, isPassword } from '../../../pages/Auth';

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
            await createUserWithEmailAndPassword(authService, enteredEmail, enteredPw);
            alert('회원가입이 성공적으로 완료되었습니다!')

            resetPwInput();
            resetEmailInput();

            navigate('/auth/signin');
        } catch (error) {
            setIsSubmitSuccess(true);
            setErrorMessage("이미 가입된 회원입니다.");
        }
    };

    const emailInputClasses = emailInputHasError ? 'invalid' : undefined;
    const pwInputClasses = pwInputHasError ? 'invalid' : undefined;

    return (
        <>
            <Logo />
            <Card width='30rem'>
                <h1>Join us!</h1>
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
                    <Button primary='true' disabled={!formIsValid}>회원가입</Button>
                    <Link to='../signin'><Button>로그인하러 가기</Button></Link>
                </Form>
            </Card >
        </>
    );
}

export default Signup;