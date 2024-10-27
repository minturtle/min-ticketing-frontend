

function OrderPerformanceInfo() {
    return (
        <div className="bg-neutral-800 p-5 rounded-lg w-full">
            <div className="flex mb-5">
                <img
                    src="https://via.placeholder.com/100x100.png?text=공연이미지"
                    alt="공연 이미지"
                    className="w-[100px] h-[100px] mr-5 object-cover"
                />
                <div className="flex-grow min-w-0">
                    <h3 className="text-white m-0 text-lg font-bold">멋진 공연</h3>
                    <p>주문번호: 2709290</p>
                </div>
                <div className="text-right text-lg font-bold">
                    <p>₩110,000</p>
                </div>
            </div>
        </div>
    )
}
export default OrderPerformanceInfo