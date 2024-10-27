// pages/CartPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartItem from './components/CartItem';
import OrderPendingItem from './components/OrderPendingItem';
import orderService from '../../service/orderService';

function CartPage() {
    const [cartItems, setCartItems] = useState({ data: [] });
    const [pendingOrders, setPendingOrders] = useState({ data: [], cursor: null });
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

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
                                <OrderPendingItem key={item.uid} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* 하단 결제 바 */}
            {selectedItems.size > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-700 p-4">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div>
                            <span className="text-gray-400 mr-2">선택한 상품:</span>
                            <span className="font-bold">{selectedItems.size}개</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <div>
                                <span className="text-gray-400 mr-2">총 결제금액:</span>
                                <span className="text-xl font-bold text-yellow-400">
                                    {getTotalPrice().toLocaleString()}원
                                </span>
                            </div>
                            <button
                                onClick={() => navigate('/payment', {
                                    state: { items: cartItems.data.filter(item => selectedItems.has(item.uid)) }
                                })}
                                className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                            >
                                결제하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
export default CartPage;