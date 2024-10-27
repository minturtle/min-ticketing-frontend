


function PaymentBar({ selectedItems, price, openModal }) {
    return <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
                <span className="text-gray-400 mr-2">선택한 상품:</span>
                <span className="font-bold">{selectedItems.size}개</span>
            </div>
            <div className="flex items-center gap-8">
                <div>
                    <span className="text-gray-400 mr-2">총 결제금액:</span>
                    <span className="text-xl font-bold text-yellow-400">
                        {price.toLocaleString()}원
                    </span>
                </div>
                <button
                    className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                    onClick={() => openModal()}
                >
                    결제하기
                </button>
            </div>
        </div>
    </div>
}

export default PaymentBar