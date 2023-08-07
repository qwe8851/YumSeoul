import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { isNotEmpty, isEmail, isPassword } from '../../../pages/Auth';

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
    
    const {
        value: enteredResetCode,
        isValid: enteredResetCodeIsValid,
        hasError: resetCodeInputHasError,
        valueChangeHandler: resetCodeChangeHandler,
        inputBlurHandler: resetCodeBlurHandler,
    } = useInput((value) => isNotEmpty(value));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => isPassword(value));

    const {
        value: enteredNewPassword,
        isValid: enteredNewPasswordIsValid,
        hasError: newPasswordInputHasError,
        valueChangeHandler: newPasswordChangeHandler,
        inputBlurHandler: newPasswordBlurHandler,
    } = useInput((value) => {
        return value.trim() === enteredPassword;
    });

    const emailInputChangeHandler = (event) => {
        emailChangeHandler(event);
        setIsSubmitSuccess(false);
        setErrorMessage('');
    };
    const resetCodeInputChangeHandler = (event) => {
        resetCodeChangeHandler(event);
        setIsSubmitSuccess(false);
        setErrorMessage('');
    };
    const passwordInputChangeHandler = (event) => {
        passwordChangeHandler(event);
        setIsSubmitSuccess(false);
        setErrorMessage('');
    };
    const newPasswordInputChangeHandler = (event) => {
        newPasswordChangeHandler(event);
        setIsSubmitSuccess(false);
        setErrorMessage('');
    };

    const disable = !enteredEmailIsValid && !enteredResetCodeIsValid && !enteredPasswordIsValid && !enteredNewPasswordIsValid;

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        if (disable) return;

        try {
            const response = await fetch('http://localhost:5000/users/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    resetCode: enteredResetCode,
                    newPassword: enteredPassword
                })
            });

            if (response.ok) {
                setIsSubmitSuccess(true);
                setErrorMessage('');
                navigate('/auth/resetpassword');
            } else {
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
    const resetCodeInputClasses = resetCodeInputHasError ? 'invalid' : undefined;
    const passwordInputClasses = emailInputHasError ? 'invalid' : undefined;
    const newPasswordInputClasses = emailInputHasError ? 'invalid' : undefined;

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
                    <div className={resetCodeInputClasses}>
                        <Input
                            type='text'
                            onChange={resetCodeInputChangeHandler}
                            onBlur={resetCodeBlurHandler}
                            value={enteredResetCode}
                            placeholder='resetCode'
                        />
                        {resetCodeInputHasError && <p className='error-text'>reset code가 올바르지 않습니다.</p>}
                    </div>
                    <div className={passwordInputClasses}>
                        <Input
                            type='password'
                            onChange={passwordInputChangeHandler}
                            onBlur={passwordBlurHandler}
                            value={enteredPassword}
                            placeholder='new password'
                        />
                        {passwordInputHasError && <p className='error-text'> 비밀번호가 올바르지 않습니다.</p>}
                    </div>
                    <div className={newPasswordInputClasses}>
                        <Input
                            type='password'
                            onChange={newPasswordInputChangeHandler}
                            onBlur={newPasswordBlurHandler}
                            value={enteredNewPassword}
                            placeholder='check new password'
                        />
                        {newPasswordInputHasError && <p className='error-text'>비밀번호가 일치하지 않습니다.</p>}
                    </div>
                    {errorMessage && <p className="error-text">{errorMessage}</p>}
                    <Button primary='true' disabled={disable}>비밀번호 재설정</Button>
                    <hr />
                    <Link to='/auth/signin'><Button>로그인하러 가기</Button></Link>
                </Form>
            </Card >
        </>
    );
}

export default ResetPassword;