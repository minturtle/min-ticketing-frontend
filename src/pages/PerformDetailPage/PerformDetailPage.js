

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PerformanceInfo from './components/PerformanceInfo';
import PerformanceDesc from './components/PerformanceDesc';

function PerformDetailPage() {
    const { id } = useParams();
    const [performance, setPerformance] = useState({
        uid: "",
        image: "",
        title: "",
        region: "",
        place: "",
        price: 0,
        description: "",
        dateInfo: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 여기서 API 호출
        setPerformance(
            {
                uid: "odUqbF1Fhh",
                image: "https://example.com/images/performance_ratione.jpg",
                title: "omnis 발레",
                region: "경상남도",
                place: "우영호 대콘서트홀",
                price: 29000,
                description: "# 오페라: 동기화 정적 어댑터\n\n## 공연 정보\n- **아티스트**: 차재현\n- **시간**: 148분\n\n## 공연 소개\nSimilique minus repellat nemo esse harum cumque repellat. Natus repellendus nisi ipsam. Asperiores eum deserunt quaerat amet fugiat.\n\n## 하이라이트\n- Vitae eum nesciunt perspiciatis voluptate aut voluptatem.\n- Fugiat dignissimos praesentium reiciendis.\n- Nisi deleniti quisquam consequuntur laboriosam totam.\n\n## 관람 연령\n15세 이상 관람가\n\n## 주의사항\n- Excepturi recusandae saepe praesentium.\n- Nesciunt eveniet accusantium distinctio ipsam laboriosam.\n\n[티켓 예매하기](https://example.com/ticket)",
                dateInfo: [
                    {
                        uid: "BVji8DT3yM",
                        dateTime: "2030-08-15T20:30:00",
                        total: 48,
                        remaining: 48
                    },
                    {
                        uid: "CA6OLQSEK2",
                        dateTime: "2030-08-16T10:10:00",
                        total: 48,
                        remaining: 48
                    }
                ]
            }

        )
        setLoading(false)
    }, [id]);


    return (
        <>
            <Header />
            <main className="max-w-[1200px] mx-auto mt-[100px] p-5">
                <PerformanceInfo performanceData={performance} />
                <PerformanceDesc description={performance.description} />
            </main>
            <Footer />
        </>
    );
}

export default PerformDetailPage;