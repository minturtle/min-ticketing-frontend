import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import orderService from "../../service/orderService";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function OrderSuccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function confirm() {

            const requestData = {
                orderId: searchParams.get("orderId"),
                amount: searchParams.get("amount"),
                paymentKey: searchParams.get("paymentKey"),
                paymentType: searchParams.get("paymentType")
            };

            const response = await orderService.confirmOrder(requestData)

            if (response.status !== 200) {
                throw Error();
            }
        }

        confirm()
            .catch((e) => {
                alert("결제에 실패했습니다.")
                navigate("/")
            });
    }, [searchParams]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center pt-[100px] pb-16 px-4">
                {/* 결제 완료 카드 */}
                <div className="w-full max-w-2xl bg-neutral-800 rounded-lg p-8 mb-6">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-8">결제가 완료되었습니다</h2>

                        {/* 결제 정보 */}
                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                                <span className="font-bold">결제 금액</span>
                                <span className="text-xl text-yellow-400 font-bold">
                                    {Number(searchParams.get("amount")).toLocaleString()}원
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                                <span className="font-bold">주문 번호</span>
                                <span className="text-neutral-300">
                                    {searchParams.get("orderId")}
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                                <span className="font-bold">결제 번호</span>
                                <span className="text-neutral-300">
                                    {searchParams.get("paymentKey")}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 버튼 영역 */}
                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="flex-1 py-3 bg-neutral-700 text-white rounded-lg font-bold hover:bg-neutral-600 transition-colors"
                        >
                            홈으로
                        </button>
                        <button
                            onClick={() => navigate('/my')}
                            className="flex-1 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                        >
                            예매 내역 확인
                        </button>
                    </div>
                </div>


            </main>
            <Footer />
        </div>
    );

}


export default OrderSuccessPage