import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";

// soumils_uh all components goes here ->
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Destinations from "./components/Destinations/Destinations.jsx";
import BookingForm from "./components/BookingForm/BookingForm.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import CarRental from "./components/CarRental/CarRental";

import "./App.css";
function App() {
  const carData = [
    {
      carImage: "toyota.jpg",
      carName: "Toyota Prius",
      rentRatePerDay: 1500,
      quotationPerDay: 2000,
    },
    {
      carImage: "path-to-car-image-2.jpg",
      carName: "Honda Civic",
      rentRatePerDay: 1800,
      quotationPerDay: 2200,
    },
    {
      carImage: "path-to-car-image-3.jpg",
      carName: "BMW X5",
      rentRatePerDay: 3000,
      quotationPerDay: 3500,
    },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/carrentallist" element={<div className="car-rental-list">
          {carData.map((car, index) => (
            <CarRental
              key={index}
              carImage={car.carImage}
              carName={car.carName}
              rentRatePerDay={car.rentRatePerDay}
              quotationPerDay={car.quotationPerDay}
            />
          ))}
        </div>} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <br></br>
    </div>
  );
}

export default App;
