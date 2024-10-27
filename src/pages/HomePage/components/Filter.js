function Filter() {
    return (
        <section className="bg-neutral-900/80 p-8 my-8 rounded-lg text-yellow-400">
            <h2 className="text-yellow-400 mb-4">공연 찾기</h2>
            <form className="flex items-end gap-4 md:flex-row flex-col">
                <div className="flex-1">
                    <label htmlFor="date" className="flex items-center gap-1 mb-2">
                        <i className="far fa-calendar-alt"></i> 공연 날짜
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                    />
                </div>
                <div className="flex-1">
                    <label className="flex items-center gap-1 mb-2">
                        <i className="fas fa-tag"></i> 가격 범위
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            id="price-min"
                            name="price-min"
                            placeholder="최소 금액"
                            min="0"
                            className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                        />
                        <span className="text-white">~</span>
                        <input
                            type="number"
                            id="price-max"
                            name="price-max"
                            placeholder="최대 금액"
                            min="0"
                            className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <label htmlFor="region" className="flex items-center gap-1 mb-2">
                        <i className="fas fa-map-marker-alt"></i> 지역
                    </label>
                    <select
                        id="region"
                        name="region"
                        className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                    >
                        <option value="">전체</option>
                        <option value="seoul">서울</option>
                        <option value="busan">부산</option>
                        <option value="daegu">대구</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-yellow-400 text-black h-[38px] px-4 rounded"
                >
                    검색
                </button>
            </form>
        </section>
    )
}

export default Filter;