import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./pages/contact-us/ContactUs";
import Doc from "./pages/Doc";
import Home from "./pages/Home";
import MysteryBox from "./pages/mysteryopen-box/MysteryBox";
import Privacy from "./pages/privacy/Privacy";
import TermsCondition from "./pages/terms-and-condition/TermsCondition";
import Unboxings from "./pages/unboxings/Unboxings";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mystery-box" element={<MysteryBox />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/terms-and-condition" element={<TermsCondition />} />
          <Route path="/security-and-privacy" element={<Privacy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/unboxings-from-customers" element={<Unboxings />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
