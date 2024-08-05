

function PerformCard() {
    return (
        <a href="/performances/1">
            <div class="performance-card">
                <img src="https://via.placeholder.com/300x200.png?text=MinTicketing" alt="공연 이미지" onerror="this.src='https://via.placeholder.com/300x200.png?text=MinTicketing'" />
                <h3>공연 제목</h3>
                <div class="performance-info">
                    <p><i class="fas fa-map-marker-alt"></i> 서울</p>
                    <p><i class="far fa-calendar-alt"></i> 2024-08-15</p>
                </div>
            </div>
        </a>


    )
}

export default PerformCard