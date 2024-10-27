

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PerformanceInfo from './components/PerformanceInfo';
import PerformanceDesc from './components/PerformanceDesc';
import performanceService from '../../service/performanceService';

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
        const fetchPerformanceDetail = async () => {
            try {
                setLoading(true);
                const response = await performanceService.getPerformanceDetail(id);
                setPerformance(response.data);
            } catch (error) {
                console.error('Failed to fetch performance details:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPerformanceDetail();
        }
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="text-yellow-400">Loading...</span>
        </div>;
    }

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