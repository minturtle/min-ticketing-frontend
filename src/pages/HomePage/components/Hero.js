function Hero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center mt-[60px] overflow-hidden">
            {/* Animated Background - 어두운 그라디언트 */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 animate-gradient" />

            {/* Subtle Overlay for depth */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Animated Waves - 부드러운 파란색 계열 */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] wave wave1" />
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] wave wave2" />
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] wave wave3" />
            </div>

            {/* Optional subtle floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.1
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-5xl text-center text-white font-semibold drop-shadow-2xl">
                    MinTicketing과 함께하는<br />최고의 공연 경험
                </h1>
            </div>
        </section>
    )
}
export default Hero;