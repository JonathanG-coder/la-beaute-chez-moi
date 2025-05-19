import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Manucure from "./pages/manucure/manucure";
import Regard from "./pages/regard/regard";
import Massage from "./pages/massages/massage";
import Rehaussement from "./pages/regard/rehaussement/rehaussement";
import Extension from "./pages/regard/extension/extension";
import Sourcils from "./pages/regard/sourcils/sourcils";
import Prenatal from "./pages/massages/prenatal/prenatal";
import Californien from "./pages/massages/californien/californien";
import Tarif from "./components/tarif/tarif";
import Contact from "./pages/contact/contact";

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
