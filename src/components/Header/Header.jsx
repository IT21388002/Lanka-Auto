// import React, { useEffect, useState } from 'react';
// import Bg1 from '../../assets/Young-female-driver-standing-by-car-after-accident-scaled.jpg';
// import Bg2 from '../../assets/1140-car-crash.jpg';
// import Bg3 from '../../assets/12.jpg';
// import Bg4 from '../../assets/image3.png';
// import Bg5 from '../../assets/AdobeStock.jpeg';

// const backgroundImages = [Bg1, Bg2, Bg3, Bg4, Bg5];

// const Header = () => {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 3000); // Change background every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, []);

//   return (
//     <header
//       className="relative bg-cover bg-center h-[800px] transition-all ease-in-out duration-1000"
//       style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50 z-1"></div> {/* Black overlay */}
      
//       <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-20">
//         <div className="max-w-4xl text-center md:text-left">
//           <h2 className="mb-2 text-lg font-semibold text-yellow-500 md:text-xl">EMERGENCY VEHICLE TOWING & RECOVERY MANAGEMENT</h2>
//           <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Safe & Speedy <br /> Service Provider</h1>
//           <p className="mb-6 text-lg text-gray-300 md:text-2xl">
//             A leading towing company & emergency road service provider based in Nottingham, operating Nationwide. 
//             We operate new, clean, and professional towing vehicles and equipment.
//           </p>

//           <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
//             <button className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-500 rounded-md hover:bg-white">
//               Call us now
//             </button>
//             <button className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-white rounded-md hover:bg-yellow-500">
//               Learn more
//             </button>
//           </div>

//           <p className="mt-4 text-gray-400 md:mt-6">Available 24/7 for emergency road service</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView
import Bg1 from '../../assets/Young-female-driver-standing-by-car-after-accident-scaled.jpg';
import Bg2 from '../../assets/1140-car-crash.jpg';
import Bg3 from '../../assets/12.jpg';
import Bg4 from '../../assets/image3.png';
import Bg5 from '../../assets/AdobeStock.jpeg';

const backgroundImages = [Bg1, Bg2, Bg3, Bg4, Bg5];

const Header = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const ref = React.useRef(null); // Create a ref to the header
  const isInView = useInView(ref, { once: false }); // Check if in view

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <header
      ref={ref} // Attach the ref here
      className="relative bg-cover bg-center h-[800px] transition-all ease-in-out duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div> {/* Black overlay */}
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-20">
        <div className="max-w-4xl text-center md:text-left">
          <motion.h2
            className="mb-2 text-lg font-semibold text-yellow-500 md:text-xl"
            initial={{ opacity: 0, y: -50 }} // Initial state
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }} // Animate based on inView
            transition={{ duration: 0.5 }} // Animation duration
          >
            EMERGENCY VEHICLE TOWING & RECOVERY MANAGEMENT
          </motion.h2>

          <motion.h1
            className="mb-4 text-4xl font-bold text-white md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
            transition={{ duration: 0.7 }}
          >
            Safe & Speedy <br /> Service Provider
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-gray-300 md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            A leading towing company & emergency road service provider based in Nottingham, operating Nationwide. 
            We operate new, clean, and professional towing vehicles and equipment.
          </motion.p>

          <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
            <motion.button
              className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-500 rounded-md hover:bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }} // Delay for a staggered effect
            >
              Call us now
            </motion.button>

            <motion.button
              className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-white rounded-md hover:bg-yellow-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Learn more
            </motion.button>
          </div>

          <motion.p
            className="mt-4 text-gray-400 md:mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Available 24/7 for emergency road service
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
