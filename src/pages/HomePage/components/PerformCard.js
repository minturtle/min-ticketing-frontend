function PerformCard() {
    return (
        <a href="/performances/1">
            <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <img
                    src="https://via.placeholder.com/300x200.png?text=MinTicketing"
                    alt="공연 이미지"
                    className="w-full h-[200px] object-cover"
                    onError={e => e.target.src = 'https://via.placeholder.com/300x200.png?text=MinTicketing'}
                />
                <h3 className="text-yellow-400 px-4">공연 제목</h3>
                <div className="p-4">
                    <p className="mb-1">
                        <i className="fas fa-map-marker-alt text-yellow-400 mr-1"></i> 서울
                    </p>
                    <p>
                        <i className="far fa-calendar-alt text-yellow-400 mr-1"></i>
                        <span>2024-08-15</span><br />
                        <span>~ 2024-08-20</span>
                    </p>
                </div>
            </div>
        </a>
    )
}

export default PerformCard