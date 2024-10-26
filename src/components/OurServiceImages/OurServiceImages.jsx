import React from 'react';
import Image1 from '../../assets/image1.png';  
import Image2 from '../../assets/image2.png'; 
import Image3 from '../../assets/image3.png'; 
import Image4 from '../../assets/image4.png';  

const OurServiceImages = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* First Row */}
      <div className="flex justify-center w-full mb-5">
        <div className="w-full max-w-full m-2 overflow-hidden">
          <img src={Image1} alt="Mechanic working" className="w-full h-auto transition-transform duration-300 ease-in-out service-image hover:scale-110" />
        </div>
        <div className="w-full max-w-full m-2 overflow-hidden">
          <img src={Image2} alt="Worker with clipboard" className="w-full h-auto transition-transform duration-300 ease-in-out service-image hover:scale-110" />
        </div>
      </div>
      {/* Second Row */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-full m-2 overflow-hidden">
          <img src={Image3} alt="Car being towed" className="w-full h-auto transition-transform duration-300 ease-in-out service-image hover:scale-110" />
        </div>
        <div className="w-full max-w-full m-2 overflow-hidden">
          <img src={Image4} alt="Worker entering truck" className="w-full h-auto transition-transform duration-300 ease-in-out service-image hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default OurServiceImages;
