
import { useEffect, useState } from 'react';
import orderService from '../../../service/orderService';
import { Link } from 'react-router-dom';


function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await orderService.getOrders(cursor);
                setOrders(prev => [...prev, ...response.data.data]);
                setCursor(response.data.cursor);
                console.log(response.data.data)
            } catch (err) {
                console.error('주문 조회 에러:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <section className="bg-neutral-800 p-5 rounded-lg">
                <h2 className="text-xl font-bold mb-4">주문 내역</h2>
                로딩 중 ..
            </section>

        )
    }

    return (
        <section className="bg-neutral-800 p-5 rounded-lg">
            <h2 className="text-xl font-bold mb-4">주문 내역</h2>
            {
                orders.map((order) => <OrderItem key={order.uid} order={order} />)
            }

            <button className="w-full bg-yellow-400 text-neutral-900 px-5 py-2.5 rounded font-bold hover:bg-yellow-300 transition-colors mt-5 text-base">
                더보기
            </button>
        </section>
    )
}

function OrderItem({ order }) {
    const date = new Date(order.orderedTime);
    const formatter = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    const formattedDate = formatter.format(date);


    return (
        <Link to={`/orders/${order.uid}`} className="block">
            <div className="flex items-center mb-5 pb-5 border-b border-neutral-600 last:border-b-0">
                <img
                    src={order.performanceImage}
                    alt="공연 이미지"
                    className="w-[100px] h-[100px] mr-5 object-cover"
                    onError={e => e.target.src = `https://via.placeholder.com/100x100.png?text=${order.uid}`}
                />
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{order.name}</h3>
                    <p className="mb-1">결제 금액: {order.totalPrice}원</p>
                    <p>결제 날짜: {formattedDate}</p>
                </div>
            </div>
        </Link>
    )
}


export default OrderHistory