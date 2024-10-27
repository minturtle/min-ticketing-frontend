import PerformCard from "./PerformCard"

function PerformList({ performances, observerTarget, loading }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
            {performances?.map(performance => (
                <PerformCard
                    key={performance.uid}
                    uid={performance.uid}
                    image={performance.image}
                    title={performance.title}
                    regionName={performance.regionName}
                    startDate={performance.startDate}
                    endDate={performance.endDate}
                />
            ))}

            {loading && (
                <div className="col-span-full text-center py-4">
                    <span className="text-yellow-400">Loading...</span>
                </div>
            )}

            {/* Observer target for infinite scroll */}
            <div ref={observerTarget} className="h-4 col-span-full" />
        </section>
    )
}

export default PerformList