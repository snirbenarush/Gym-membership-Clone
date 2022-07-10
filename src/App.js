import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Join from "./components/Join";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Reviews />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
