

function OrderSummary() {
    return (
        <div className="bg-neutral-800 p-5 rounded-lg mt-[5px] w-full">
            <h3 className="text-lg font-bold mb-4">총계</h3>
            <div className="flex justify-between mb-2.5">
                <span>주문 상태</span>
                <span>결제완료</span>
            </div>
            <div className="flex justify-between mb-2.5">
                <span>주문 시각</span>
                <span>2024년 5월 17일 19시 09분</span>
            </div>
            <div className="flex justify-between mb-2.5">
                <span>결제 수단</span>
                <span>카카오페이</span>
            </div>
        </div>
    )
}

export default OrderSummary