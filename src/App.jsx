import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="*" element={<ServicePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}