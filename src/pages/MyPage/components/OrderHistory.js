

function OrderHistory() {
    return (
        <section className="bg-neutral-800 p-5 rounded-lg">
            <h2 className="text-xl font-bold mb-4">주문 내역</h2>
            <OrderItem />
            <button className="w-full bg-yellow-400 text-neutral-900 px-5 py-2.5 rounded font-bold hover:bg-yellow-300 transition-colors mt-5 text-base">
                더보기
            </button>
        </section>
    )
}

function OrderItem() {
    return (
        <a href="/orders/1" className="block">
            <div className="flex items-center mb-5 pb-5 border-b border-neutral-600 last:border-b-0">
                <img
                    src="https://via.placeholder.com/100x100.png?text=MinTicketing"
                    alt="공연 이미지"
                    className="w-[100px] h-[100px] mr-5 object-cover"
                    onError={e => e.target.src = 'https://via.placeholder.com/100x100.png?text=MinTicketing'}
                />
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">공연 이름 1</h3>
                    <p className="mb-1">결제 금액: 50,000원</p>
                    <p className="mb-1">공연 날짜: 2024년 8월 15일</p>
                    <p>결제 날짜: 2024년 7월 1일</p>
                </div>
            </div>
        </a>
    )
}


export default OrderHistory