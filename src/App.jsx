import React from "react";
import Header from "./components/header";
import Hero from "./components/hero"
import About from "./components/about";
import Stats from "./components/Stats";
import EasyToUse from "./components/EasyToUse";
import Services from "./components/Services";
import HowItWorks from "./components/HowitWorks";
import DownlaodApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <EasyToUse />
        <Services />
        <HowItWorks />
        <DownlaodApp />

      </main>
      <Footer />
    </>

  )
}
export default App