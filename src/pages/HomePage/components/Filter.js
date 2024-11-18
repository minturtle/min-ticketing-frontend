import { useEffect, useState } from "react";
import performanceService from "../../../service/performanceService";

function Filter({ setPerformances, setSearchParams }) {
    const [regions, setRegions] = useState([]);
    const [formData, setFormData] = useState({
        keyword: '',
        date: '',
        priceMin: '',
        priceMax: '',
        region: ''
    });

    useEffect(() => {
        const fetchRegions = async () => {
            const regions = await performanceService.getRegions()
            setRegions(regions.data.data)
        }
        fetchRegions()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 검색 파라미터 객체 생성
            const searchParams = {
                keyword: formData.keyword,
                date: formData.date || null,
                minPrice: formData.priceMin ? parseInt(formData.priceMin) : null,
                maxPrice: formData.priceMax ? parseInt(formData.priceMax) : null,
                region: formData.region || null
            };

            // 빈 값이나 null 값을 가진 속성 제거
            Object.keys(searchParams).forEach(key => {
                if (searchParams[key] === null || searchParams[key] === '') {
                    delete searchParams[key];
                }
            });

            // 검색 API 호출
            const result = await performanceService.search(searchParams);

            setPerformances(result.data.data)
            setSearchParams({ ...searchParams, cursor: result.data.cursor })
        } catch (error) {
            console.error('검색 중 오류 발생:', error);
        }
    };

    return (
        <section className="bg-neutral-900/80 p-8 my-8 rounded-lg text-yellow-400">
            <h2 className="text-yellow-400 mb-4">공연 찾기</h2>
            <form onSubmit={handleSubmit} className="flex items-end gap-4 md:flex-row flex-col">
                <div className="flex-1">
                    <label htmlFor="keyword" className="flex items-center gap-1 mb-2">
                        <i className="fas fa-search"></i> 검색어
                    </label>
                    <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        value={formData.keyword}
                        onChange={handleChange}
                        placeholder="공연명을 입력하세요"
                        className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="date" className="flex items-center gap-1 mb-2">
                        <i className="far fa-calendar-alt"></i> 공연 날짜
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
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
                            id="priceMin"
                            name="priceMin"
                            value={formData.priceMin}
                            onChange={handleChange}
                            placeholder="최소 금액"
                            min="0"
                            className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                        />
                        <span className="text-white">~</span>
                        <input
                            type="number"
                            id="priceMax"
                            name="priceMax"
                            value={formData.priceMax}
                            onChange={handleChange}
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
                        value={formData.region}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-yellow-400 text-white p-2 rounded"
                    >
                        <option value="">지역 선택</option>
                        {regions.map(region =>
                            <option key={region.uid} value={region.name}>
                                {region.name}
                            </option>
                        )}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-yellow-400 text-black h-[38px] px-4 rounded hover:bg-yellow-500"
                >
                    검색
                </button>
            </form>
        </section>
    )
}

export default Filter;