import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const places = [
    { name: "Paris", cost: "$1200", image: "https://th.bing.com/th/id/OIP.3EUlVP8Kj7LJqpPg3ARRwwHaE8?rs=1&pid=ImgDetMain" },
    { name: "New York", cost: "$1500", image: "https://th.bing.com/th/id/OIP.OnV7ZfMMWcER0iLvJTvBgQEsDH?rs=1&pid=ImgDetMain" },
    { name: "Tokyo", cost: "$1800", image: "https://www.tripsavvy.com/thmb/pJgGwtavhNTzH0bRjgG5er2S5Lc=/2119x1415/filters:fill(auto,1)/GettyImages-1083328636-2419579ecdd440d2a534b7df4a8b7e0a.jpg" },
    { name: "Sydney", cost: "$2000", image: "https://th.bing.com/th/id/OIP.3EUlVP8Kj7LJqpPg3ARRwwHaE8?rs=1&pid=ImgDetMain" }, 
    { name: "Rome", cost: "$1600", image: "https://www.tripsavvy.com/thmb/pJgGwtavhNTzH0bRjgG5er2S5Lc=/2119x1415/filters:fill(auto,1)/GettyImages-1083328636-2419579ecdd440d2a534b7df4a8b7e0a.jpg" }, 
    { name: "Berlin", cost: "$1400", image: "https://th.bing.com/th/id/OIP.OnV7ZfMMWcER0iLvJTvBgQEsDH?rs=1&pid=ImgDetMain" }
  ];

  return (
    <div className="destinations">
      <h2>Foreign Destinations</h2>
      <div className="destination-list">
        {places.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} className="destination-image" />
            <h3>{place.name}</h3>
            <p>Cost: {place.cost}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
