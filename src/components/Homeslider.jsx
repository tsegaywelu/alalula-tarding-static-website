import React, { useState, useEffect } from "react";

import "./Homeslider.css";

export const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["./td1.PNG", "./td2.PNG", "./tdf3.PNG", "cert.jpg"]; // Add your image URLs here

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds (adjust this value as needed)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div id="header" className="overflow-hidden w-full flex gap-3">
      {images.map((images, index) => (
        <img
          key={index}
          className={`w-full  ${index === currentIndex ? "" : "hidden"}`}
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
          src={images}
          alt={`Slider image ${index + 1}`}
        />
      ))}
    </div>
  );
};
