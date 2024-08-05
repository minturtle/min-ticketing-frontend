import { useParams } from 'react-router-dom'
import "./OrderDetailPage.css"
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
            <div className='order-container'>
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