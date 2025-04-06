// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Manucure from "./pages/manucure/manucure";
import Regard from "./pages/regard/regard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manucure" element={<Manucure />} />
        <Route path="/regard" element={<Regard />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
