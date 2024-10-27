import { X } from "lucide-react";

function OrderModal({ isModalOpen, widgets, ready, closeModal }) {

    const doOrder = async () => {
        try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
            // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
            await widgets.requestPayment({
                orderId: "FusKMCljO5--k4t6NBP0J",
                orderName: "토스 티셔츠 외 2건",
                successUrl: window.location.origin + "/success",
                failUrl: window.location.origin + "/fail",
                customerEmail: "customer123@gmail.com",
                customerName: "김토스",
                customerMobilePhone: "01012341234",
            });
        } catch (error) {
            // 에러 처리하기
            console.error(error);
        }

    }

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${isModalOpen ? 'block' : 'hidden'}`}>
            <div className="wrapper w-[90%] max-w-5xl bg-white rounded-lg p-8 h-auto aspect-[16/9] relative">
                {/* 닫기 버튼 */}
                <button
                    onClick={() => closeModal()}
                    className="absolute top-4 right-4 p-2 hover:bg-blue-800 rounded-full bg-blue-600"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="box_section h-full flex flex-col justify-end">
                    {/* 결제 UI */}
                    <div id="payment-method" />

                    {/* 작은 여백 */}
                    <div className="h-4" />

                    {/* 이용약관 UI */}
                    <div id="agreement" />

                    {/* 결제하기 버튼 */}
                    <button
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={!ready}
                        onClick={() => doOrder()}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>

    )


}

export default OrderModal