import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rutas from "./routes/Rutas";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Rutas />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
