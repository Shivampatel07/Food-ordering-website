import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Offers from "./containers/Offers";
import Help from "./containers/Help";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./authentication/Authcontext";

function AppContent() {
  let { isLoggedIn } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
      <Toaster position="bottom-right" reverseOrder={false} />
    </AuthProvider>
  );
}

export default App;
