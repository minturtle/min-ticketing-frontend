

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PerformDetailPage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PerformanceInfo from './components/PerformanceInfo';
import PerformanceDesc from './components/PerformanceDesc';

function PerformDetailPage() {
    const { id } = useParams();
    const [performance, setPerformance] = useState({ id: '1', title: 'Performance 1', date: '2024-08-01', location: 'Location 1', description: '##### Description 1' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 여기서 API 호출
        setPerformance({ id: '1', title: 'Performance 1', date: '2024-08-01', location: 'Location 1', description: '##### Description 1' })
        setLoading(false)
    }, [id]);


    return (
        <>
            <Header />
            <main class="performance-container">
                <PerformanceInfo />
                <PerformanceDesc description={performance.description} />
            </main>
            <Footer />
        </>
    );
}

export default PerformDetailPage;