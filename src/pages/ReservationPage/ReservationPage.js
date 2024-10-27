// pages/ReservationPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Stage from './components/Stage';
import SeatMap from './components/SeatMap';
import SeatLegend from './components/SeatLegend';
import ReservationSummary from './components/ReservationSummary';
import Toast from '../../components/Toast';
import performanceService from '../../service/performanceService';


function ReservationPage() {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [reservation, setReservation] = useState({
        dateUid: null,
        pricePerSeat: null,
        seats: []
    });
    const [seats, setSeats] = useState([])

    const [toast, setToast] = useState(null);  // { message: string, type: 'success' | 'error' }
    const navigate = useNavigate();
    const { performanceId, dateId } = useParams();

    useEffect(() => {
        const fetchSeatsData = async () => {
            try {
                const response = await performanceService.getSeatsInfo(performanceId, dateId);
                const reservationData = response.data; // API 응답에서 data 추출

                const { seats: seatsData, ...reservationWithoutSeats } = reservationData;
                setReservation(reservationWithoutSeats);
                setSeats(groupSeatsByRow(seatsData));
            } catch (error) {
                console.error('Failed to fetch seats:', error);
                // 에러 처리 (예: 토스트 메시지 표시)
                setToast({
                    message: '좌석 정보를 불러오는데 실패했습니다.',
                    type: 'error'
                });
            }
        };

        fetchSeatsData();
    }, [performanceId, dateId]);

    const disableSeat = () => {
        setSeats(prevSeats =>
            prevSeats.map(row =>
                row.map(seat =>
                    seat.name === selectedSeat
                        ? { ...seat, isReserved: true }
                        : seat
                )
            )
        );
        setSelectedSeat(null); // 선택 해제
        console.log('After update:', reservation.seats);
    }

    const handleSeatClick = (seat) => {
        if (seat.isReserved) return;

        if (selectedSeat === seat.name) {
            setSelectedSeat(null);
        } else {
            setSelectedSeat(seat.name);
        }
    };

    const handleReservation = async () => {
        if (!selectedSeat) {
            setToast({ message: '좌석을 선택해주세요.', type: 'error' });
            return;
        }

        const selectedSeatData = seats
            .flat()
            .find(seat => seat.name === selectedSeat);

        if (!selectedSeatData) {
            setToast({ message: '좌석 정보를 찾을 수 없습니다.', type: 'error' });
            return;
        }

        try {
            const response = await fetch(
                `https://minturtle.kro.kr/api/reservations/${performanceId}/dates/${dateId}/seats/${selectedSeatData.uid}`,
                {
                    method: 'POST',
                    headers: {
                        'accept': '*/*',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            if (response.status === 201) {
                setToast({
                    message: '예매가 완료되었습니다!',
                    type: 'success'
                });
                disableSeat();

            } else if (response.status === 409) {
                const data = await response.json();
                setToast({ message: data.message, type: 'error' });
                disableSeat();
            } else {
                throw new Error('예약 중 오류가 발생했습니다.');
            }
        } catch (error) {
            setToast({ message: error.message, type: 'error' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto px-5 pt-[100px] pb-16">
                <h1 className="text-3xl font-bold mb-12">좌석 선택</h1>
                <div className="flex gap-8">
                    <div className="flex-1">
                        <Stage />
                        <SeatMap
                            seats={seats}
                            selectedSeat={selectedSeat}
                            onSeatClick={handleSeatClick}
                        />
                        <SeatLegend />
                    </div>
                    <div className="w-[320px]">
                        <div className="sticky top-[100px]">
                            <ReservationSummary
                                selectedSeat={selectedSeat}
                                pricePerSeat={reservation.pricePerSeat}
                                onReservation={handleReservation}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}

// A1, A2 형식의 좌석을 행별로 그룹화하는 유틸리티 함수
function groupSeatsByRow(seats) {
    // 1차원 배열을 행 이름으로 그룹화
    const seatsByRow = seats.reduce((acc, row) => {
        row.forEach(seat => {
            const rowName = seat.name.charAt(0); // 'A'1에서 'A' 추출
            if (!acc[rowName]) {
                acc[rowName] = [];
            }
            acc[rowName].push(seat);
        });
        return acc;
    }, {});

    // 각 행의 좌석을 번호순으로 정렬
    Object.keys(seatsByRow).forEach(rowName => {
        seatsByRow[rowName].sort((a, b) => {
            const aNum = parseInt(a.name.slice(1));
            const bNum = parseInt(b.name.slice(1));
            return aNum - bNum;
        });
    });

    // 행 이름 순으로 정렬된 2차원 배열 반환
    return Object.keys(seatsByRow)
        .sort()
        .map(rowName => seatsByRow[rowName]);
};


export default ReservationPage;