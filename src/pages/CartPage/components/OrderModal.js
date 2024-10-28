import { X } from "lucide-react";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";


const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "abcd";

function OrderModal({ isModalOpen, closeModal, price }) {
    const [amount, setAmount] = useState({
        currency: "KRW",
        value: 50000,
    });
    const [ready, setReady] = useState(false);
    const [widgets, setWidgets] = useState(null);

    useEffect(() => {
        async function fetchPaymentWidgets() {
            try {
                // ------  SDK 초기화 ------
                // @docs https://docs.tosspayments.com/sdk/v2/js#토스페이먼츠-초기화
                const tossPayments = await loadTossPayments(clientKey);

                // 회원 결제
                // @docs https://docs.tosspayments.com/sdk/v2/js#tosspaymentswidgets
                const widgets = tossPayments.widgets({
                    customerKey,
                });
                // 비회원 결제
                // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

                setWidgets(widgets);
            } catch (error) {
                console.error("Error fetching payment widget:", error);
            }
        }

        fetchPaymentWidgets();
    }, [clientKey, customerKey]);

    useEffect(() => {
        async function renderPaymentWidgets() {
            if (widgets == null) {
                return;
            }

            // ------  주문서의 결제 금액 설정 ------
            // TODO: 위젯의 결제금액을 결제하려는 금액으로 초기화하세요.
            // TODO: renderPaymentMethods, renderAgreement, requestPayment 보다 반드시 선행되어야 합니다.
            await widgets.setAmount(amount);

            // ------  결제 UI 렌더링 ------
            // @docs https://docs.tosspayments.com/sdk/v2/js#widgetsrenderpaymentmethods
            await widgets.renderPaymentMethods({
                selector: "#payment-method",
                // 렌더링하고 싶은 결제 UI의 variantKey
                // 결제 수단 및 스타일이 다른 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
                // @docs https://docs.tosspayments.com/guides/v2/payment-widget/admin#새로운-결제-ui-추가하기
                variantKey: "DEFAULT",
            });

            // ------  이용약관 UI 렌더링 ------
            // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
            await widgets.renderAgreement({
                selector: "#agreement",
                variantKey: "AGREEMENT",
            });

            setReady(true);
        }

        renderPaymentWidgets();
    }, [widgets]);


    useEffect(() => {
        if (!widgets) return;

        updateAmount({
            currency: amount.currency,
            value: price
        })
    }, [price])

    const updateAmount = async (amount) => {
        setAmount(amount);
        await widgets.setAmount(amount);
    };

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