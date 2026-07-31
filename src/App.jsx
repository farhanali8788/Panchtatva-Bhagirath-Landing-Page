import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import AboutEstate from "./components/sections/AboutEstate";
import LandParcels from "./components/sections/LandParcels";
import Amenities from "./components/sections/Amenities";
import Location from "./components/sections/Location";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutEstate />
      <LandParcels />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
