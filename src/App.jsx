import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Manucure from "./pages/manucure/Manucure";
import Regard from "./pages/regard/Regard";
import Massage from "./pages/massages/Massage";
import Rehaussement from "./pages/regard/rehaussement/Rehaussement";
import Extension from "./pages/regard/extension/Extension";
import Sourcils from "./pages/regard/sourcils/Sourcils";
import Prenatal from "./pages/massages/prenatal/Prenatal";
import Californien from "./pages/massages/californien/Californien";
import Tarif from "./components/tarif/Tarif";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manucure" element={<Manucure />} />
          <Route path="/regard" element={<Regard />} />
          <Route path="/massages" element={<Massage />} />
           <Route path="/rehaussement" element={<Rehaussement />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/sourcils" element={<Sourcils />} />
          <Route path="/prenatal" element={<Prenatal />} />
          <Route path="/californien" element={<Californien />} /> 
           <Route path="/tarif" element={<Tarif />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
