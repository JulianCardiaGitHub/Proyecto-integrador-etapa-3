import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rutas from "./routes/Rutas";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />

      <Header />

      <Rutas />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
