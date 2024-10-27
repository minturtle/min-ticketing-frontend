export default ({ item, selectedItems, setSelectedItems }) => {
    const formatDateTime = (dateTimeStr) => {
        return new Date(dateTimeStr).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };


    const handleSelectItem = (uid) => {
        setSelectedItems(prev => {
            const newSelected = new Set(prev);
            if (newSelected.has(uid)) {
                newSelected.delete(uid);
            } else {
                newSelected.add(uid);
            }
            return newSelected;
        });
    };

    return (


        <div className="bg-neutral-800 rounded-lg overflow-hidden flex">
            <input
                type="checkbox"
                checked={selectedItems.has(item.uid)}
                onChange={() => handleSelectItem(item.uid)}
                className="ml-4 my-auto w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
            />
            <div className="flex-1 p-4 flex justify-between">
                <div>
                    <h3 className="text-lg font-bold mb-2">{item.performanceName}</h3>
                    <p className="text-sm text-gray-400">
                        {item.seatName} 좌석
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-bold text-yellow-400">
                        {item.performancePrice.toLocaleString()}원
                    </p>
                </div>
            </div>
        </div>
    )
};