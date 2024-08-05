

function OrderHistory() {
    return (
        <section class="order-history">
            <h2>주문 내역</h2>
            <OrderItem />
            <button class="button load-more">더보기</button>
        </section>


    )


}

function OrderItem() {
    return (
        <div class="order-item">
            <img src="https://via.placeholder.com/100x100.png?text=MinTicketing" alt="공연 이미지" class="order-image" onerror="this.src='https://via.placeholder.com/100x100.png?text=MinTicketing'" />
            <div class="order-details">
                <h3>공연 이름 1</h3>
                <p>결제 금액: 50,000원</p>
                <p>공연 날짜: 2024년 8월 15일</p>
                <p>결제 날짜: 2024년 7월 1일</p>
            </div>
        </div>
    )

}


export default OrderHistory