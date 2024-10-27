import { useParams } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderPerformanceInfo from './components/OrderPerformanceInfo';
import OrderSummary from './components/OrderSummary';
import QRContainer from './components/QRContainer';
import ButtonContainer from './components/ButtonContainer';


function OrderDetailPage() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="max-w-full mx-auto mt-[100px] p-5">
                <main>
                    <OrderPerformanceInfo />
                    <OrderSummary />
                    <QRContainer />
                    <ButtonContainer />
                </main>
            </div>
            <Footer />
        </>
    )
}


export default OrderDetailPage