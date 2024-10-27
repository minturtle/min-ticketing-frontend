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
    return (
        <div id="signup-step1">
            <div className="mb-6">
                <label htmlFor="signup-email" className="block mb-2">이메일</label>
                <input
                    type="email"
                    id="signup-email"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <button
                type="button"
                className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold hover:bg-yellow-300 transition-colors duration-300"
                onClick={() => setStep(2)}
            >
                인증 코드 발송
            </button>
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
            <div className="mb-6">
                <label htmlFor="verification-code" className="block mb-2">인증 코드</label>
                <input
                    type="text"
                    id="verification-code"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <button
                type="button"
                className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold hover:bg-yellow-300 transition-colors duration-300"
                onClick={() => setStep(3)}
            >
                코드 확인
            </button>
            <div className="text-center mt-4">
                {isDisabled ? (
                    <p>이메일 재전송 가능 시간: {formatTime(timer)}</p>
                ) : (
                    <p onClick={handleResendEmail} className="cursor-pointer text-yellow-400 hover:text-yellow-300">
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
            <div className="mb-6">
                <label htmlFor="signup-password" className="block mb-2">비밀번호</label>
                <input
                    type="password"
                    id="signup-password"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="signup-confirm-password" className="block mb-2">비밀번호 확인</label>
                <input
                    type="password"
                    id="signup-confirm-password"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="signup-nickname" className="block mb-2">닉네임</label>
                <input
                    type="text"
                    id="signup-nickname"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold hover:bg-yellow-300 transition-colors duration-300"
            >
                회원가입 완료
            </button>
        </div>
    )
}


export default SignupForm;