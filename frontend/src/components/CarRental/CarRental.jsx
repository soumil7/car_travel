import React from 'react';
import './CarRental.css';
import { assets } from '../../assets/assets';


const carData = [
  {
    carImage: assets.omni,
    carName: 'Omni Van',
    rentRatePerDay: 1400,
    quotationPerDay: 10,
  },
  {
    carImage: assets.car,
    carName: 'Car',
    rentRatePerDay: 1500,
    quotationPerDay: 10,
  },
  {
    carImage: assets.tavera,
    carName: 'Tavera van',
    rentRatePerDay: 2000,
    quotationPerDay: 14,
  },
  {
    carImage: assets.traveller,
    carName: 'Traveller',
    rentRatePerDay: 3500,
    quotationPerDay: 17,
  },
  {
    carImage: assets.xylo,
    carName: 'XYLO',
    rentRatePerDay: 2700,
    quotationPerDay: 14,
  },
  {
    carImage: assets.innova,
    carName: 'Innova',
    rentRatePerDay: 3000,
    quotationPerDay: 15,
  },
  {
    carImage: assets.coachvom,
    carName: 'COACH VOM',
    rentRatePerDay: 4000,
    quotationPerDay: 2200,
  },
];

const CarRental = () => {
  return (
    <div className="car-rental-list">
      {carData.map((car, index) => (
        <div className="car-rental-card" key={index}>
          <img src={car.carImage} alt={car.carName} className="car-image" />
          <div className="car-details">
            <h3 className="car-name">{car.carName}</h3>
            <p className="rent-rate">Rent Rate: ₹{car.rentRatePerDay} / day</p>
            <p className="quotation">Quotation: ₹{car.quotationPerDay} / day</p>
            <button className="rent-btn">Rent Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarRental;
