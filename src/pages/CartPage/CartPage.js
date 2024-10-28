// pages/CartPage.jsx
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartItem from './components/CartItem';
import OrderPendingItem from './components/OrderPendingItem';
import orderService from '../../service/orderService';
import PaymentBar from './components/PaymentBar';
import OrderModal from './components/OrderModal';



function CartPage() {
    const [cartItems, setCartItems] = useState({ data: [] });
    const [pendingOrders, setPendingOrders] = useState({ data: [], cursor: null });
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
    const [price, setPrice] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const cartData = await orderService.getCarts();
                const dummyPendingData = {
                    cursor: null,
                    data: [
                        {
                            uid: "pending1",
                            name: "재즈 페스티벌 2024",
                            performanceImage: "https://via.placeholder.com/300x200.png?text=Jazz+Festival",
                            totalPrice: 80000,
                            orderedTime: "2024-01-17T10:00:00.000Z"
                        }
                    ]
                };

                setCartItems(cartData.data);
                setPendingOrders(dummyPendingData);
            } catch (error) {
                console.error('데이터 조회 실패:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, [])

    useEffect(() => {
        setPrice(getTotalPrice())
    }, [selectedItems])

    const openModal = () => {
        setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };


    const handleSelectAll = () => {
        if (selectedItems.size === cartItems.data.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(cartItems.data.map(item => item.uid)));
        }
    };

    const getTotalPrice = () => {
        return cartItems.data
            .filter(item => selectedItems.has(item.uid))
            .reduce((sum, item) => sum + item.performancePrice, 0);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto px-5 pt-[100px] pb-32">
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">장바구니</h2>
                        {cartItems.data.length > 0 && (
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.size === cartItems.data.length}
                                    onChange={handleSelectAll}
                                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                                />
                                <span>전체 선택</span>
                            </label>
                        )}
                    </div>
                    {cartItems.data.length === 0 ? (
                        <div className="text-center py-8 bg-neutral-800 rounded-lg text-gray-400">
                            장바구니가 비어있습니다.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.data.map(item => (
                                <CartItem key={item.uid} item={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6">결제 대기 중</h2>
                    {pendingOrders.data.length === 0 ? (
                        <div className="text-center py-8 bg-neutral-800 rounded-lg text-gray-400">
                            결제 대기 중인 주문이 없습니다.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {pendingOrders.data.map(item => (
                                <OrderPendingItem key={item.uid} item={item} price={price} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* 하단 결제 바 */}
            {selectedItems.size > 0 && (
                <PaymentBar selectedItems={selectedItems} price={price} openModal={openModal} />
            )}

            {/* 모달 창 */}
            <OrderModal isModalOpen={isModalOpen} closeModal={closeModal} price={price} />

            <Footer />
        </div>
    )
}


export default CartPage;