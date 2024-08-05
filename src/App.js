import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./assets/styles/common.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PerformDetailPage from "./pages/PerformDetailPage/PerformDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/performances/:id" element={<PerformDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
