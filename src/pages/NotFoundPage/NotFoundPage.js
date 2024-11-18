import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="bg-neutral-900 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8">
                <div className="text-center max-w-[400px] mx-auto">
                    {/* 404 숫자 */}
                    <div className="font-mono text-[120px] font-bold text-yellow-400 leading-none mb-4 
                        animate-pulse">
                        404
                    </div>

                    {/* 티켓 모양의 컨테이너 */}
                    <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 relative
                        before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-full 
                        before:bg-neutral-900 before:-left-4 before:top-1/2 before:-translate-y-1/2
                        after:content-[''] after:absolute after:w-8 after:h-8 after:rounded-full 
                        after:bg-neutral-900 after:-right-4 after:top-1/2 after:-translate-y-1/2">
                        <h1 className="text-2xl font-bold mb-4">
                            페이지를 찾을 수 없습니다
                        </h1>
                        <p className="text-neutral-400 mb-8">
                            요청하신 페이지가 존재하지 않습니다.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold 
                       hover:bg-yellow-300 transition-colors duration-300"
                        >
                            메인으로 돌아가기
                        </button>
                    </div>

                    {/* 티켓 스캔선 */}
                    <div className="w-full h-[1px] bg-neutral-700 my-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-20 h-full bg-yellow-400 
                          animate-[scan_3s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
        </>
    );
};

export default NotFoundPage;