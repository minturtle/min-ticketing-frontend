

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PerformDetailPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PerformDetailPage() {
    const { id } = useParams();
    const [performance, setPerformance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 여기서 API 호출
        setPerformance({ id: '1', title: 'Performance 1', date: '2024-08-01', location: 'Location 1', description: 'Description 1' })
        setLoading(false)
    }, [id]);


    return (
        <>
            <Header />
            <main class="performance-container">
                <div class="performance-info">
                    <div class="performance-image">
                        <img src="performance-image.jpg" alt="공연 이미지" />
                    </div>
                    <div class="performance-details">
                        <h2>공연 제목</h2>
                        <p><strong>날짜:</strong> 2024년 8월 15일 ~ 2024년 8월 20일</p>
                        <p><strong>장소:</strong> 서울 예술의 전당 콘서트홀</p>
                        <a href="#" class="button">예매하기</a>
                    </div>
                </div>

                <div class="performance-description">
                    <h3>공연 설명</h3>
                    <p>이곳에 공연에 대한 자세한 설명이 들어갑니다. 공연의 특징, 출연진, 프로그램 등의 정보를 포함할 수 있습니다.</p>
                    <img src="performance-description-image.jpg" alt="공연 설명 이미지" />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default PerformDetailPage;