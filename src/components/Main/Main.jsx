// import React from 'react';
// import Img1 from '../../assets/4tg4tg-1024x1024.png';
// import Img2 from '../../assets/g4tg4tg-1024x1024.png';

// const Main = () => {
//   return (
//     <section className="relative px-4 py-12 bg-gray-100 md:px-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-center bg-cover opacity-10" style={{ backgroundImage: 'url(../../assets/FaqBg.png)' }}></div>

//       <div className="relative z-10 flex flex-col-reverse max-w-6xl gap-10 mx-auto md:flex-row md:justify-between">
        
//         <div className="flex flex-col w-full md:w-1/2">
//           <h1 className="pt-20 mb-4 text-lg font-bold text-gray-600">WHY US</h1>
//           <h2 className="mb-4 text-3xl font-semibold text-black">24/7 towing services is what we do</h2>
//           <p className="mb-6 text-lg text-gray-700">
//             We are a well-equipped towing service available to help with towing a car 24/7. We provide a fast,
//             affordable, friendly, and reliable car towing service.
//           </p>

//           <div className="flex flex-col gap-6">
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
//                 <span className="text-xl text-black">✔</span>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-black">We can tow any vehicle</h3>
//                 <p className="text-gray-700 text-md">
//                   We operate new, clean, and professional towing vehicles and equipment.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
//                 <span className="text-xl text-black">✔</span>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-black">Fast, safe, and affordable</h3>
//                 <p className="text-gray-700 text-md">
//                   We provide a fast, affordable, friendly, and reliable car towing service.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* First Section - Image on Left, Content on Right */}
//         <div className="flex flex-col w-full md:w-1/2">
//           <img src={Img1} alt="Towing Service" className="object-cover w-full mb-6 transition-transform duration-300 rounded-lg h-90 hover:scale-110 md:mb-0" />
//         </div>
//       </div>

//       {/* Second Section - Text on Left, Image on Right */}
//       <div className="relative z-10 flex flex-col max-w-6xl gap-10 mx-auto mt-12 md:flex-row md:justify-between">
//         <div className="flex flex-col w-full md:w-1/2">
//           <img src={Img2} alt="Towing Service" className="object-cover w-full transition-transform duration-300 rounded-lg h-90 hover:scale-110" />
//         </div>
//         <div className="flex flex-col w-full md:w-1/2">
//           <h1 className="pt-20 mb-4 text-lg font-bold text-gray-600">WHY US</h1>
//           <h2 className="mb-4 text-3xl font-semibold text-black">Emergency towing service</h2>
//           <p className="mb-6 text-lg text-gray-700">
//             Towing a car can be difficult to attempt on your own if you do not have the right equipment or a powerful enough towing vehicle,
//             so do not risk further damage to your car by trying to tow it yourself.
//           </p>

//           <div className="flex flex-col gap-6">
//             <div className="flex items-start gap-4">
//               <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
//                 <span className="text-xl text-black">✔</span>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-black">Tyre Change & Vehicle Diagnostics</h3>
//                 <p className="text-gray-700 text-md">
//                   We also offer emergency vehicle management services such as tyre change and diagnosing vehicle faults.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;



import React, { useEffect } from 'react';
import Img1 from '../../assets/4tg4tg-1024x1024.png';
import Img2 from '../../assets/g4tg4tg-1024x1024.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <section className="relative px-4 py-12 bg-gray-100 md:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-center bg-cover opacity-10" style={{ backgroundImage: 'url(../../assets/FaqBg.png)' }}></div>

      <div className="relative z-10 flex flex-col-reverse max-w-6xl gap-10 mx-auto md:flex-row md:justify-between">
        
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="pt-20 mb-4 text-lg font-bold text-gray-600" data-aos="fade-up">WHY US</h1>
          <h2 className="mb-4 text-3xl font-semibold text-black" data-aos="fade-up" data-aos-delay="100">24/7 towing services is what we do</h2>
          <p className="mb-6 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="200">
            We are a well-equipped towing service available to help with towing a car 24/7. We provide a fast,
            affordable, friendly, and reliable car towing service.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
                <span className="text-xl text-black">✔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">We can tow any vehicle</h3>
                <p className="text-gray-700 text-md">
                  We operate new, clean, and professional towing vehicles and equipment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
                <span className="text-xl text-black">✔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Fast, safe, and affordable</h3>
                <p className="text-gray-700 text-md">
                  We provide a fast, affordable, friendly, and reliable car towing service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* First Section - Image on Left, Content on Right */}
        <div className="flex flex-col w-full md:w-1/2">
          <img 
            src={Img1} 
            alt="Towing Service" 
            className="object-cover w-full mb-6 transition-transform duration-300 rounded-lg h-90 hover:scale-110 md:mb-0" 
            data-aos="zoom-in" 
          />
        </div>
      </div>

      {/* Second Section - Text on Left, Image on Right */}
      <div className="relative z-10 flex flex-col max-w-6xl gap-10 mx-auto mt-12 md:flex-row md:justify-between">
        <div className="flex flex-col w-full md:w-1/2">
          <img 
            src={Img2} 
            alt="Towing Service" 
            className="object-cover w-full transition-transform duration-300 rounded-lg h-90 hover:scale-110" 
            data-aos="zoom-in" 
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="pt-20 mb-4 text-lg font-bold text-gray-600" data-aos="fade-up">WHY US</h1>
          <h2 className="mb-4 text-3xl font-semibold text-black" data-aos="fade-up" data-aos-delay="100">Emergency towing service</h2>
          <p className="mb-6 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="200">
            Towing a car can be difficult to attempt on your own if you do not have the right equipment or a powerful enough towing vehicle,
            so do not risk further damage to your car by trying to tow it yourself.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
                <span className="text-xl text-black">✔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">Tyre Change & Vehicle Diagnostics</h3>
                <p className="text-gray-700 text-md">
                  We also offer emergency vehicle management services such as tyre change and diagnosing vehicle faults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
