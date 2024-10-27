function PerformCard({ uid, image, title, regionName, startDate, endDate }) {
    return (
        <a href={`/performances/${uid}`}>
            <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <img
                    src={image}
                    alt={`${title} 공연 이미지`}
                    className="w-full h-[200px] object-cover"
                    onError={e => e.target.src = 'https://via.placeholder.com/300x200.png?text=MinTicketing'}
                />
                <h3 className="text-yellow-400 px-4">{title}</h3>
                <div className="p-4">
                    <p className="mb-1">
                        <i className="fas fa-map-marker-alt text-yellow-400 mr-1"></i> {regionName}
                    </p>
                    <p>
                        <i className="far fa-calendar-alt text-yellow-400 mr-1"></i>
                        <span>{startDate}</span><br />
                        <span>~ {endDate}</span>
                    </p>
                </div>
            </div>
        </a>
    )
}

export default PerformCard