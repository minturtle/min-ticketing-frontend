import { useNavigate } from 'react-router-dom';

export default ({ item }) => {
    const navigate = useNavigate();

    const formatDateTime = (dateTimeStr) => {
        return new Date(dateTimeStr).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-neutral-800 rounded-lg overflow-hidden flex">
            <img
                src={item.performanceImage}
                alt={item.name}
                className="w-32 h-32 object-cover"
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200.png?text=Image";
                }}
            />
            <div className="flex-1 p-4 flex justify-between">
                <div>
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-400">
                        주문 시각: {formatDateTime(item.orderedTime)}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-bold text-yellow-400 mb-2">
                        {item.totalPrice.toLocaleString()}원
                    </p>
                    <button
                        className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                        onClick={() => navigate(`/payment/${item.uid}`)}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    )
};
