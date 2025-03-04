import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage/Mainpage";
import RegisterPage from "./pages/Register/RegisterPage";
import PaymentPage from "./pages/payment/PaymentPage";
import LivePage from "./pages/LivePage/LivePage";
import Dashbord from "./component/dashbord/Dashbord";
import Offerspage from "./pages/payment/Offers/Offerspage";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import ProtectedRoute from "./Context/ProtectRoute/ProtactedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/Mainpage" />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route
            path="/LivePage"
            element={
              <ProtectedRoute>
                <LivePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PaymentPage"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Dashbord"
            element={
              <ProtectedRoute>
                <Dashbord />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Offerspage"
            element={
              <ProtectedRoute>
                <Offerspage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
