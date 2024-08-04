import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Filter from './components/Filter';
import Hero from './components/Hero';
import PerformList from './components/PerformList';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <main class="container">
                <Filter />
                <PerformList />
            </main>
            <Footer />
        </>
    )


}

export default HomePage