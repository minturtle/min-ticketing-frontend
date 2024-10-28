import Footer from "../../components/Footer"
import Header from "../../components/Header"
import OrderHistory from "./components/OrderHistory"
import UserInfo from "./components/UserInfo"


function MyPage() {
    return (
        <>
            <Header />
            <main className="my-[100px] mx-auto w-[90%] max-w-[1200px]">
                <UserInfo />
                <OrderHistory />
            </main>
            <Footer />
        </>
    )
}


export default MyPage