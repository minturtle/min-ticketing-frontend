// pages/ReservationPage.jsx
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Stage from './components/Stage';
import SeatMap from './components/SeatMap';
import SeatLegend from './components/SeatLegend';
import ReservationSummary from './components/ReservationSummary';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function ReservationPage() {
    const [selectedSeats, setSelectedSeats] = useState(new Set());
    const navigate = useNavigate();

    // 예시 데이터 (실제로는 props나 API로 받아올 것입니다)
    const reservationData = {
        dateUid: "example-date",
        pricePerSeat: 50000,
        seats: [
            [
                { uid: "A1", name: "A1", isReserved: false },
                { uid: "A2", name: "A2", isReserved: true }
            ],
            [
                { uid: "B1", name: "B1", isReserved: false },
                { uid: "B2", name: "B2", isReserved: false }
            ]
        ]
    };

    const totalPrice = useMemo(() => {
        return selectedSeats.size * reservationData.pricePerSeat;
    }, [selectedSeats, reservationData.pricePerSeat]);

    const handleSeatClick = (seat) => {
        if (seat.isReserved) return;

        setSelectedSeats(prev => {
            const newSet = new Set(prev);
            if (newSet.has(seat.uid)) {
                newSet.delete(seat.uid);
            } else {
                newSet.add(seat.uid);
            }
            return newSet;
        });
    };

    const handleReservation = () => {
        if (selectedSeats.size === 0) {
            alert('좌석을 선택해주세요.');
            return;
        }
        navigate('/payment', {
            state: {
                selectedSeats: Array.from(selectedSeats),
                totalPrice,
                dateUid: reservationData.dateUid
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto px-5 pt-[100px] pb-16">
                <h1 className="text-3xl font-bold mb-12">좌석 선택</h1>
                <div className="flex gap-8">
                    {/* 좌석 선택 영역 */}
                    <div className="flex-1">
                        <Stage />
                        <SeatMap
                            seats={reservationData.seats}
                            selectedSeats={selectedSeats}
                            onSeatClick={handleSeatClick}
                        />

                    </div>

                    {/* 예매 정보 요약 (오른쪽 고정) */}
                    <div className="w-[320px]">
                        <div className="sticky top-[100px]">
                            <ReservationSummary
                                selectedSeats={selectedSeats}
                                totalPrice={totalPrice}
                                onReservation={handleReservation}
                            />
                            <br />
                            <SeatLegend />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ReservationPage;