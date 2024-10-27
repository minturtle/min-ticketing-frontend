import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./assets/styles/common.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PerformDetailPage from "./pages/PerformDetailPage/PerformDetailPage";
import MyPage from "./pages/MyPage/MyPage";
import OrderDetailPage from "./pages/OrderDetailPage/OrderDetailPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/performances/:id" element={<PerformDetailPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="/reservation/:performanceId/:dateId" element={<ReservationPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
