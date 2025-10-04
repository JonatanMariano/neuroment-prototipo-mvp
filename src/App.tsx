import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";
import ConfirmSuccess from "./pages/ConfirmSuccess";
import ChangePassword from "./pages/ChangePassword";
import HomePage from "./pages/HomePage";
import PlanosLanding from "./pages/PlanosLanding";
import PlanosUser from "./pages/PlanosUser";
import Profile from "./pages/Profile";  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirm-email" element={<ConfirmEmailPage />} />
        <Route path="/confirm-success" element={<ConfirmSuccess/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/planos-landing" element={<PlanosLanding/>} />
        <Route path="/planos-user" element={<PlanosUser/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



