import React, { useState } from 'react';


function SignupForm() {
    const [step, setStep] = useState(1);


    return (
        <form id="signup-form">
            {step === 1 && (
                <Step1Form setStep={setStep} />
            )}

            {step === 2 && (
                <Step2Form setStep={setStep} />
            )}

            {step === 3 && (
                <Step3Form />
            )}
        </form>
    );


}

function Step1Form({ setStep }) {
    const handleSendVerificationCode = () => {
        setStep(2);
    };

    return (
        <div id="signup-step1">
            <div className="form-group">
                <label htmlFor="signup-email">이메일</label>
                <input type="email" id="signup-email" required />
            </div>
            <button type="button" className="btn" onClick={handleSendVerificationCode}>인증 코드 발송</button>
        </div>
    )
}

function Step2Form({ setStep }) {
    const handleVerifyCode = () => {
        setStep(3);
    };
    return (
        <div id="signup-step2">
            <div className="form-group">
                <label htmlFor="verification-code">인증 코드</label>
                <input type="text" id="verification-code" required />
            </div>
            <button type="button" className="btn" onClick={handleVerifyCode}>코드 확인</button>
        </div>
    )
}

function Step3Form() {
    return (
        <div id="signup-step3">
            <div className="form-group">
                <label htmlFor="signup-password">비밀번호</label>
                <input type="password" id="signup-password" required />
            </div>
            <div className="form-group">
                <label htmlFor="signup-confirm-password">비밀번호 확인</label>
                <input type="password" id="signup-confirm-password" required />
            </div>
            <div className="form-group">
                <label htmlFor="signup-nickname">닉네임</label>
                <input type="text" id="signup-nickname" required />
            </div>
            <button type="submit" className="btn">회원가입 완료</button>
        </div>
    )
}


export default SignupForm;