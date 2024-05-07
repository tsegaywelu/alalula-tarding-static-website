import React from "react";

const Gallery = () => {
  const images = ["./images/td1.PNG", "./images/td2.PNG", './images/tdf3.PNG','./images/td12.PNG',
  './images/td4.PNG','./images/td5.PNG','./images/td6.PNG',
  './images/td7.PNG','./images/td8.PNG','./images/td9.PNG','./images/td10.PNG',
  './images/td11.PNG','./images/abserawit1.PNG'
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
 
 <div className="group cursor-pointer relative">
   <img
     src={images[0]}  // Replace `0` with the index of the image you want to display
     alt={`Image ${1}`}  // Replace `1` with the index of the image you want to display
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[1]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${2}`}  
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
   src={images[2]}  // Replace `0` with the index of the image you want to display
   alt={`Image ${3}`} 
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[3]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${4}`}  
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[4]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${5}`}  
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
      src={images[5]}  // Replace `0` with the index of the image you want to display
      alt={`Image ${6}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[6]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${7}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[7]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${8}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
     src={images[7]}  // Replace `0` with the index of the image you want to display
     alt={`Image ${8}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[8]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${9}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[9]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${10}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>

 <div className="group cursor-pointer relative">
   <img
    src={images[10]}  // Replace `0` with the index of the image you want to display
    alt={`Image ${11}`}
     className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
   />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
     <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
       View
     </button>
   </div>
 </div>


 {/* <!-- Repeat this div for each image --> */}
</div>

    </div>
  );
};

export default Gallery;
