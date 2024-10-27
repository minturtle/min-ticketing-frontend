function Hero() {
    return (
        <section className="h-[60vh] flex items-center justify-center mt-[60px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
            <h1 className="text-5xl text-center text-white shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                MinTicketing과 함께하는<br />최고의 공연 경험
            </h1>
        </section>
    )
}

export default Hero;