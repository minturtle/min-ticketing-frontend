import PerformanceChooseInput from './ChooseInput';

function PerformanceInfo({ performanceData }) {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const formatDateRange = (dateInfo) => {
        if (!dateInfo || dateInfo.length === 0) return "";

        const dates = dateInfo.map(info => new Date(info.dateTime));
        const startDate = new Date(Math.min(...dates));
        const endDate = new Date(Math.max(...dates));

        return `${startDate.toLocaleDateString('ko-KR')} ~ ${endDate.toLocaleDateString('ko-KR')}`;
    };

    return (
        <div className="flex gap-8 mt-8 items-start">
            <div className="flex-2 max-w-[40%]">
                <img
                    src={performanceData.image}
                    alt={`${performanceData.title} 공연 이미지`}
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x600?text=No+Image";
                    }}
                />
            </div>
            <div className="flex-3">
                <h2 className="text-3xl mb-4">{performanceData.title}</h2>
                <p className="text-base mb-2.5 leading-relaxed">
                    <strong>날짜:</strong> {formatDateRange(performanceData.dateInfo)}
                </p>
                <p className="text-base mb-2.5 leading-relaxed">
                    <strong>장소:</strong> {performanceData.region} {performanceData.place}
                </p>
                <p className="text-base mb-2.5 leading-relaxed">
                    <strong>가격:</strong> {formatPrice(performanceData.price)}원
                </p>
            </div>
            <PerformanceChooseInput performanceId={performanceData.uid} dateInfo={performanceData.dateInfo} />
        </div>
    )
}


export default PerformanceInfo