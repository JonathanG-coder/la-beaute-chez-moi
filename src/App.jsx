// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import home from "../src/pages/home/home";
import about from "./pages/about/about";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<home/>} />
        <Route path="/About" element={<about/>}/>
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
