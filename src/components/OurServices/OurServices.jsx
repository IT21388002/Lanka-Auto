import React from 'react';
import ServiceImage from '../../assets/OurServices.png';

const OurServices = () => {
  return (
    <div className="relative w-full py-16 bg-white">
      {/* Background Gradient and Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f5a623] opacity-100 z-0"></div>
      <div className="absolute inset-0 bg-[url('../../assets/FaqBg.png')] bg-cover bg-center opacity-10 z-[-1]"></div>

      <main className="relative z-10 px-6 mt-32 text-center">
        <h2 className="text-[#f5a623] text-xl font-medium mb-2">WHAT WE DO</h2>
        <h1 className="mb-8 text-4xl font-semibold text-black md:text-5xl lg:text-6xl">
          We provide high quality services
        </h1>
        
        <div className="mt-8">
          <img src={ServiceImage} alt="Service" className="max-w-[70%] mx-auto rounded-lg shadow-lg md:max-w-[60%] lg:max-w-[50%]" />
        </div>
      </main>
    </div>
  );
};

export default OurServices;
