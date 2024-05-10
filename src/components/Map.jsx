import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        className="w-full h-80 mb-5 bg-green-500"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.9053212095264!2d39.482363473448814!3d13.479931403533163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166ae2cd7b48601b%3A0x48b2debd161c0908
		!2sMekelle%20University!5e0!3m2!1sen!2set!4v1
		698385723840!5m2!1sen!2set"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
