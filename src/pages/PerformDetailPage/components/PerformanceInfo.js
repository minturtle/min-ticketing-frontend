import PerformanceChooseInput from './ChooseInput';

function PerformanceInfo() {
    return (
        <div class="performance-info">
            <div class="performance-image">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%232a2a2a'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' fill='%23ffffff' dy='.3em'%3E공연 이미지%3C/text%3E%3C/svg%3E" alt="공연 이미지" />
            </div>
            <div class="performance-details">
                <h2>공연 제목</h2>
                <p><strong>날짜:</strong> 2024년 8월 15일 ~ 2024년 8월 20일</p>
                <p><strong>장소:</strong> 서울 예술의 전당 콘서트홀</p>
            </div>
            <PerformanceChooseInput startDate="2024-08-15" endDate="2024-08-20" />
        </div>


    )

}


export default PerformanceInfo