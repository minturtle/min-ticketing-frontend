import React, { useState, useEffect, useCallback } from 'react';


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
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(120);

    useEffect(() => {
        if (isDisabled) {
            const intervalId = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer <= 1) {
                        clearInterval(intervalId);
                        setIsDisabled(false);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isDisabled]);

    const handleVerifyCode = () => {
        setStep(3);
    };

    const handleResendEmail = useCallback(() => {
        // 이메일을 다시 보내는 로직을 여기에 추가

        setTimer(120);
        setIsDisabled(true);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    useEffect(() => {
        setIsDisabled(true);
    }, []);

    return (
        <div id="signup-step2">
            <div className="form-group">
                <label htmlFor="verification-code">인증 코드</label>
                <input type="text" id="verification-code" required />
            </div>
            <button type="button" className="btn" onClick={handleVerifyCode}>
                코드 확인
            </button>
            <div>
                {isDisabled ? (
                    <p>이메일 재전송 가능 시간: {formatTime(timer)}</p>
                ) : (
                    <p onClick={handleResendEmail} style={{ cursor: 'pointer' }}>
                        이메일 재전송하기
                    </p>
                )}
            </div>
        </div>
    );
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