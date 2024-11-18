import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Filter from './components/Filter';
import Hero from './components/Hero';
import PerformList from './components/PerformList';
import performanceService from '../../service/performanceService';
import React, { useState, useEffect, useRef } from 'react';

function HomePage() {
    const [performances, setPerformances] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observerTarget = useRef(null);

    const fetchPerformances = async (currentCursor) => {
        try {
            setLoading(true);
            const response = await performanceService.getList(currentCursor);
            const { data, cursor: nextCursor } = response.data;
            setPerformances(prev => [...prev, ...data]);
            setCursor(nextCursor);
            setHasMore(!!nextCursor);
        } catch (error) {
            console.error('Failed to fetch performances:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPerformances(null);
    }, []);

    // 무한 스크롤 설정
    useEffect(() => {
        const handleObserver = (entries) => {
            const [target] = entries;
            if (target.isIntersecting && hasMore && !loading) {
                fetchPerformances(cursor);
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0
        });

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [cursor, hasMore, loading]);


    return (
        <>
            <Header />
            <Hero />
            <main className="container">
                <Filter
                    setPerformances={setPerformances}
                    setCursor={setCursor}
                    setHasMore={setHasMore}
                />
                <PerformList
                    performances={performances}
                    observerTarget={observerTarget}
                    loading={loading}
                />
            </main>
            <Footer />
        </>
    )


}

export default HomePage