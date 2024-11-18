import PerformCard from "./PerformCard"

function PerformList({ performances, observerTarget, loading }) {
    // 공연 데이터가 없는 상태 체크 (빈 배열이거나 null/undefined)
    const noPerformances = !performances || performances.length === 0;

    // 로딩 중이 아니면서 공연이 없는 경우에만 메시지 표시
    const shouldShowEmptyMessage = noPerformances && !loading;

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

            {shouldShowEmptyMessage && (
                <div className="col-span-full flex flex-col items-center justify-center py-16">
                    <div className="text-6xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">
                        등록된 공연이 없습니다
                    </h3>
                    <p className="text-neutral-400 text-center">
                        현재 예매 가능한 공연이 없습니다.<br />
                        나중에 다시 확인해 주세요.
                    </p>
                </div>
            )}

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