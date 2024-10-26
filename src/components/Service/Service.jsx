
// import React from 'react';
// import Img1 from '../../assets/accident.png';
// import Img2 from '../../assets/g53.png';
// import Img3 from '../../assets/tow-truck.png';
// import Img4 from '../../assets/motorbike.png';
// import Img5 from '../../assets/road.png';

// const Service = () => {
//   return (
//     <section className="relative py-20 overflow-x-hidden text-center bg-white"> {/* added overflow-x-hidden */}
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-center bg-cover opacity-20"
//         style={{ backgroundImage: "url('../../assets/9u4thg.png')" }}
//       ></div>

//       <p className='mb-2 text-lg font-semibold text-gray-600'>OUR SERVICES</p>
//       <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
//         We transport your vehicle safely and efficiently
//       </h2>
//       <p className="mb-10 text-lg text-gray-600">
//         We are a well-equipped towing service available to help with<br />
//         towing a car 24/7 we provide a fast, affordable, friendly, and<br />
//         reliable car towing service.
//       </p>

//       {/* Service Cards Container */}
//       <div className="flex flex-col items-center justify-center max-w-full gap-8 px-4 mx-auto lg:px-80 md:flex-row md:flex-wrap md:gap-10"> {/* modified px-4 and max-w-full */}

//         {/* First Row - Two Cards in a Row, Centered */}
//         <div className="flex flex-col w-full gap-8 md:flex-row md:w-auto">
//           {/* Service Card 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/2">
//             <img src={Img1} alt="Emergency Towing" className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">Emergency towing service</h2>
//             <p className="text-gray-700">
//               We are a well-equipped towing service available to help
//               with towing a car 24/7 we provide a fast, affordable,
//               friendly, and reliable car towing service.
//             </p>
//           </div>

//           {/* Highlighted Local Towing Discounts */}
//           <div className="bg-yellow-400 p-6 rounded-lg shadow-md text-left relative text-white transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/2">
//             <div className="absolute px-2 py-1 text-xs bg-gray-800 rounded top-2 right-2">LIMITED OFFER</div>
//             <img src={Img2} alt="Local Towing Discounts" className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">Local Towing Discounts</h2>
//             <p className="text-black">
//               Spend less on moving your car within Nottingham by
//               choosing our local towing option. We cover MOT Pick ups
//               & garage-to-garage drop-offs.
//             </p>
//             <button className="px-4 py-2 mt-4 font-semibold text-yellow-400 transition-colors duration-300 bg-black rounded hover:bg-gray-700">
//               Discover &gt;&gt;
//             </button>
//           </div>
//         </div>

//         {/* Second Row - Three Cards in a Row */}
//         <div className="flex flex-col w-full gap-8 md:flex-row md:gap-10">
//           {/* Service Card 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3">
//             <img src={Img3} alt="Winch Rescue" className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">Winch Rescue</h2>
//             <p className="text-gray-700">
//               We operate professional towing services including winch rescue & lifted recovery.
//             </p>
//           </div>

//           {/* Service Card 4 */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3">
//             <img src={Img4} alt="Motorcycle Towing" className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">Motorcycle towing</h2>
//             <p className="text-gray-700">
//               Our operators can recover your motorcycle as well as your car, to help get you to safety or your local garage.
//             </p>
//           </div>

//           {/* Service Card 5 */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3">
//             <img src={Img5} alt="Long Distance Towing" className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">Long distance towing</h2>
//             <p className="text-gray-700">
//               We cover both local routes and national. Our operators can transport your vehicle over long distances.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;





// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Img1 from '../../assets/accident.png';
// import Img2 from '../../assets/g53.png';
// import Img3 from '../../assets/tow-truck.png';
// import Img4 from '../../assets/motorbike.png';
// import Img5 from '../../assets/road.png';

// const Service = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Intersection Observer setup
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Trigger when the section comes into view
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false); // Reset visibility state when out of view
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current); // Clean up observer on unmount
//       }
//     };
//   }, []);

//   // Animation variants for the cards
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: (index) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: index * 0.4, // Increase delay for slower staggering
//         duration: 0.8, // Increase duration for slower animation
//       },
//     }),
//   };

//   const services = [
//     {
//       img: Img1,
//       title: 'Emergency towing service',
//       description: 'We are a well-equipped towing service available to help with towing a car 24/7. We provide a fast, affordable, friendly, and reliable car towing service.',
//     },
//     {
//       img: Img2,
//       title: 'Local Towing Discounts',
//       description: 'Spend less on moving your car within Nottingham by choosing our local towing option. We cover MOT Pick ups & garage-to-garage drop-offs.',
//     },
//     {
//       img: Img3,
//       title: 'Winch Rescue',
//       description: 'We operate professional towing services including winch rescue & lifted recovery.',
//     },
//     {
//       img: Img4,
//       title: 'Motorcycle towing',
//       description: 'Our operators can recover your motorcycle as well as your car, to help get you to safety or your local garage.',
//     },
//     {
//       img: Img5,
//       title: 'Long distance towing',
//       description: 'We cover both local routes and national. Our operators can transport your vehicle over long distances.',
//     },
//   ];

//   return (
//     <section 
//       className="relative py-20 overflow-x-hidden text-center bg-white" 
//       ref={sectionRef}
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-center bg-cover opacity-20"
//         style={{ backgroundImage: "url('../../assets/9u4thg.png')" }}
//       ></div>

//       <p className='mb-2 text-lg font-semibold text-gray-600'>OUR SERVICES</p>
//       <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
//         We transport your vehicle safely and efficiently
//       </h2>
//       <p className="mb-10 text-lg text-gray-600">
//         We are a well-equipped towing service available to help with<br />
//         towing a car 24/7 we provide a fast, affordable, friendly, and<br />
//         reliable car towing service.
//       </p>

//       {/* Service Cards Container */}
//       <div className="flex flex-col items-center justify-center max-w-full gap-8 px-4 mx-auto lg:px-80 md:flex-row md:flex-wrap md:gap-10">
//         {/* First Row - Two Cards in a Row, Centered */}
//         <div className="flex flex-col w-full gap-8 md:flex-row md:w-auto">
//           {/* Service Card 1 */}
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/2"
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={cardVariants}
//             custom={0} // index for the first card
//           >
//             <img src={services[0].img} alt={services[0].title} className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">{services[0].title}</h2>
//             <p className="text-gray-700">
//               {services[0].description}
//             </p>
//           </motion.div>

//           {/* Highlighted Local Towing Discounts */}
//           <motion.div
//             className="bg-yellow-400 p-6 rounded-lg shadow-md text-left relative text-white transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/2"
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={cardVariants}
//             custom={1} // index for the second card
//           >
//             <div className="absolute px-2 py-1 text-xs bg-gray-800 rounded top-2 right-2">LIMITED OFFER</div>
//             <img src={services[1].img} alt={services[1].title} className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">{services[1].title}</h2>
//             <p className="text-black">
//               {services[1].description}
//             </p>
//             <button className="px-4 py-2 mt-4 font-semibold text-yellow-400 transition-colors duration-300 bg-black rounded hover:bg-gray-700">
//               Discover &gt;&gt;
//             </button>
//           </motion.div>
//         </div>

//         {/* Second Row - Three Cards in a Row */}
//         <div className="flex flex-col w-full gap-8 md:flex-row md:gap-10">
//           {/* Service Card 3 */}
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3"
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={cardVariants}
//             custom={2} // index for the third card
//           >
//             <img src={services[2].img} alt={services[2].title} className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">{services[2].title}</h2>
//             <p className="text-gray-700">
//               {services[2].description}
//             </p>
//           </motion.div>

//           {/* Service Card 4 */}
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3"
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={cardVariants}
//             custom={3} // index for the fourth card
//           >
//             <img src={services[3].img} alt={services[3].title} className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">{services[3].title}</h2>
//             <p className="text-gray-700">
//               {services[3].description}
//             </p>
//           </motion.div>

//           {/* Service Card 5 */}
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-md text-left transition-transform duration-300 hover:translate-y-[-10px] w-full md:w-1/3"
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={cardVariants}
//             custom={4} // index for the fifth card
//           >
//             <img src={services[4].img} alt={services[4].title} className="w-12 h-12 mb-4" />
//             <h2 className="mb-2 text-xl font-bold">{services[4].title}</h2>
//             <p className="text-gray-700">
//               {services[4].description}
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;




import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from '../../assets/accident.png';
import Img2 from '../../assets/g53.png';
import Img3 from '../../assets/tow-truck.png';
import Img4 from '../../assets/motorbike.png';
import Img5 from '../../assets/road.png';

const Service = () => {
  // Separate refs to trigger animations for each section
  const [refEmergency, inViewEmergency] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refLocalTowing, inViewLocalTowing] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refWinchRescue, inViewWinchRescue] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refMotorcycleTowing, inViewMotorcycleTowing] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refLongDistance, inViewLongDistance] = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-20 overflow-x-hidden text-center bg-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('../../assets/9u4thg.png')" }}
      ></div>

      {/* Section Title and Description */}
      <p className="mb-2 text-lg font-semibold text-gray-600">OUR SERVICES</p>
      <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl">
        We transport your vehicle safely and efficiently
      </h2>
      <p className="mb-10 text-lg text-gray-600">
        We are a well-equipped towing service available to help with<br />
        towing a car 24/7 we provide a fast, affordable, friendly, and<br />
        reliable car towing service.
      </p>

      {/* Service Cards Container */}
      <div className="flex flex-col items-center justify-center max-w-full gap-8 px-4 mx-auto lg:px-80 md:flex-row md:flex-wrap md:gap-10">
        {/* First Row - Two Cards in a Row */}
        <div className="flex flex-col w-full gap-8 md:flex-row md:w-auto">
          {/* Service Card 1 - Emergency Towing */}
          <motion.div
            ref={refEmergency}
            className="w-full p-6 text-left transition-transform duration-300 bg-white rounded-lg shadow-md md:w-1/2"
            initial="hidden"
            animate={inViewEmergency ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <img src={Img1} alt="Emergency Towing" className="w-12 h-12 mb-4" />
            <h2 className="mb-2 text-xl font-bold">Emergency towing service</h2>
            <p className="text-gray-700">
              We are a well-equipped towing service available to help
              with towing a car 24/7 we provide a fast, affordable,
              friendly, and reliable car towing service.
            </p>
          </motion.div>

          {/* Highlighted Local Towing Discounts */}
          <motion.div
            ref={refLocalTowing}
            className="relative w-full p-6 text-left text-white transition-transform duration-300 bg-yellow-400 rounded-lg shadow-md md:w-1/2"
            initial="hidden"
            animate={inViewLocalTowing ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="absolute px-2 py-1 text-xs bg-gray-800 rounded top-2 right-2">LIMITED OFFER</div>
            <img src={Img2} alt="Local Towing Discounts" className="w-12 h-12 mb-4" />
            <h2 className="mb-2 text-xl font-bold">Local Towing Discounts</h2>
            <p className="text-black">
              Spend less on moving your car within Nottingham by
              choosing our local towing option. We cover MOT Pick ups
              & garage-to-garage drop-offs.
            </p>
            <button className="px-4 py-2 mt-4 font-semibold text-yellow-400 transition-colors duration-300 bg-black rounded hover:bg-gray-700">
              Discover &gt;&gt;
            </button>
          </motion.div>
        </div>

        {/* Second Row - Three Cards in a Row */}
        <div className="flex flex-col w-full gap-8 md:flex-row md:gap-10">
          {/* Service Card 3 - Winch Rescue */}
          <motion.div
            ref={refWinchRescue}
            className="w-full p-6 text-left transition-transform duration-300 bg-white rounded-lg shadow-md md:w-1/3"
            initial="hidden"
            animate={inViewWinchRescue ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <img src={Img3} alt="Winch Rescue" className="w-12 h-12 mb-4" />
            <h2 className="mb-2 text-xl font-bold">Winch Rescue</h2>
            <p className="text-gray-700">
              We operate professional towing services including winch rescue & lifted recovery.
            </p>
          </motion.div>

          {/* Service Card 4 - Motorcycle Towing */}
          <motion.div
            ref={refMotorcycleTowing}
            className="w-full p-6 text-left transition-transform duration-300 bg-white rounded-lg shadow-md md:w-1/3"
            initial="hidden"
            animate={inViewMotorcycleTowing ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <img src={Img4} alt="Motorcycle Towing" className="w-12 h-12 mb-4" />
            <h2 className="mb-2 text-xl font-bold">Motorcycle towing</h2>
            <p className="text-gray-700">
              Our operators can recover your motorcycle as well as your car, to help get you to safety or your local garage.
            </p>
          </motion.div>

          {/* Service Card 5 - Long Distance Towing */}
          <motion.div
            ref={refLongDistance}
            className="w-full p-6 text-left transition-transform duration-300 bg-white rounded-lg shadow-md md:w-1/3"
            initial="hidden"
            animate={inViewLongDistance ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <img src={Img5} alt="Long Distance Towing" className="w-12 h-12 mb-4" />
            <h2 className="mb-2 text-xl font-bold">Long distance towing</h2>
            <p className="text-gray-700">
              We cover both local routes and national. Our operators can transport your vehicle over long distances.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
