import Footer from "../../components/Footer"
import Header from "../../components/Header"
import OrderHistory from "./components/OrderHistory"
import UserInfo from "./components/UserInfo"
import "./MyPage.css"

function MyPage() {
    return (
        <>
            <Header />
            <main>
                <UserInfo />
                <OrderHistory />
            </main>
            <Footer />

        </>


    )


}


export default MyPage