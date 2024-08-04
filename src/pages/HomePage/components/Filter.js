

function Filter() {
    return (
        <section class="filter">
            <h2>공연 찾기</h2>
            <form>
                <div>
                    <label for="date"><i class="far fa-calendar-alt"></i> 공연 날짜</label>
                    <input type="date" id="date" name="date" />
                </div>
                <div class="price-range">
                    <label><i class="fas fa-tag"></i> 가격 범위</label>
                    <input type="number" id="price-min" name="price-min" class="price-input" placeholder="최소 금액" min="0" />
                    <span>~</span>
                    <input type="number" id="price-max" name="price-max" class="price-input" placeholder="최대 금액" min="0" />
                </div>
                <div>
                    <label for="region"><i class="fas fa-map-marker-alt"></i> 지역</label>
                    <select id="region" name="region">
                        <option value="">전체</option>
                        <option value="seoul">서울</option>
                        <option value="busan">부산</option>
                        <option value="daegu">대구</option>
                    </select>
                </div>
                <button type="submit">검색</button>
            </form>
        </section>

    )

}

export default Filter;