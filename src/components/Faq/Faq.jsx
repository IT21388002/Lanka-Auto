// import React from 'react';
// import mapIcon from '../../assets/FaqBg.png';

// const Faq = () => {
//   return (
//     <section className="relative w-full py-12 text-center bg-white">
//       {/* Background image */}
//       <div className="absolute inset-0 bg-center bg-cover opacity-10" style={{ backgroundImage: `url(${mapIcon})` }}></div>

//       <div className="relative z-10">
//         <p className="text-lg font-semibold text-gray-500">FAQ</p>  
//         <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">Popular questions <br/>answered</h2>
//         <p className="mb-10 text-lg text-gray-600 md:text-xl">
//           We are a well-equipped towing service available to help with<br/>
//           towing a car 24/7. We provide a fast, affordable, friendly, and<br/>
//           reliable car towing service.
//         </p>
//         <div className="flex flex-wrap justify-center gap-8 px-6">
//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What services do you offer?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               At Apex, we offer comprehensive car towing and recovery services across the UK. Our services include roadside assistance, vehicle recovery, accident recovery, and transportation of vehicles to designated locations.
//             </p>
//           </div>

//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What types of vehicles do you tow?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               We specialize in towing a wide range of vehicles, including cars, vans, motorcycles, and light commercial vehicles. Our team has the expertise and equipment to handle the job efficiently and safely.
//             </p>
//           </div>

//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">How quickly can you respond to a call for assistance?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//             We pride ourselves on our rapid response times. Our team at Apex is available 24/7, ensuring that we can reach you swiftly whenever you need us. Typically, we aim to reach your location within 20 minutes of receiving your call.
//             </p>
//           </div>

//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">How do I request your services?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//             Requesting our services is easy. Simply give Apex a call, message us on Whatsapp or fill out our online contact form on our website. Provide us with your location and details of your situation, and we'll dispatch a team to assist you promptly.
//             </p>
//           </div>

//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What areas do you cover?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//             Our car towing and recovery services are available throughout the UK, covering Nottingham, East midlands and more. Whether you're stranded on the motorway or need assistance in a rural area, Apex has got you covered.
//             </p>
//           </div>

//           <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question">
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">Are your drivers licensed and insured?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//             Absolutely. Our drivers at Apex are fully licensed, trained, and insured to provide towing and recovery services. You can trust in their expertise and professionalism to handle your vehicle with care and attention to detail.
//             </p>
//           </div>


//           {/* Add additional FAQ items as needed */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;




// import React, { useEffect, useState } from 'react';
// import mapIcon from '../../assets/FaqBg.png';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Faq = () => {
//   const [ref, inView] = useInView({ threshold: 0.1 });
//   const [animateIndex, setAnimateIndex] = useState(0);
//   const totalItems = 6; // Total number of FAQ items

//   // Define animation variants for flip-up
//   const variants = {
//     hidden: { opacity: 0, rotateX: 90 }, // Start with a rotation on the X-axis
//     visible: { opacity: 1, rotateX: 0 },  // End with no rotation
//   };

//   // Effect to trigger the sequential animation
//   useEffect(() => {
//     if (inView) {
//       setAnimateIndex(0); // Reset the animation index when in view
//       const interval = setInterval(() => {
//         setAnimateIndex((prev) => {
//           if (prev < totalItems - 1) {
//             return prev + 1; // Increment index to animate next item
//           } else {
//             clearInterval(interval); // Stop the interval when done
//             return prev; // Keep it at the last item
//           }
//         });
//       }, 300); // Time between each animation (adjust as needed)

//       return () => clearInterval(interval); // Cleanup interval on unmount
//     } else {
//       setAnimateIndex(0); // Reset when not in view
//     }
//   }, [inView, totalItems]);

//   return (
//     <section className="relative w-full py-12 text-center bg-white">
//       {/* Background image */}
//       <div className="absolute inset-0 bg-center bg-cover opacity-10" style={{ backgroundImage: `url(${mapIcon})` }}></div>

//       <div className="relative z-10">
//         <p className="text-lg font-semibold text-gray-500">FAQ</p>
//         <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">Popular questions <br />answered</h2>
//         <p className="mb-10 text-lg text-gray-600 md:text-xl">
//           We are a well-equipped towing service available to help with<br />
//           towing a car 24/7. We provide a fast, affordable, friendly, and<br />
//           reliable car towing service.
//         </p>
//         <div className="flex flex-wrap justify-center gap-8 px-6">
//           {/* FAQ Item 1 */}
//           <motion.div
//             ref={ref}
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 0 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What services do you offer?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               At Apex, we offer comprehensive car towing and recovery services across the UK. Our services include roadside assistance, vehicle recovery, accident recovery, and transportation of vehicles to designated locations.
//             </p>
//           </motion.div>

//           {/* FAQ Item 2 */}
//           <motion.div
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 1 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What types of vehicles do you tow?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               We specialize in towing a wide range of vehicles, including cars, vans, motorcycles, and light commercial vehicles. Our team has the expertise and equipment to handle the job efficiently and safely.
//             </p>
//           </motion.div>

//           {/* FAQ Item 3 */}
//           <motion.div
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 2 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">How quickly can you respond to a call for assistance?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               We pride ourselves on our rapid response times. Our team at Apex is available 24/7, ensuring that we can reach you swiftly whenever you need us. Typically, we aim to reach your location within 20 minutes of receiving your call.
//             </p>
//           </motion.div>

//           {/* FAQ Item 4 */}
//           <motion.div
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 3 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">How do I request your services?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               Requesting our services is easy. Simply give Apex a call, message us on Whatsapp, or fill out our online contact form on our website. Provide us with your location and details of your situation, and we'll dispatch a team to assist you promptly.
//             </p>
//           </motion.div>

//           {/* FAQ Item 5 */}
//           <motion.div
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 4 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">What areas do you cover?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               Our car towing and recovery services are available throughout the UK, covering Nottingham, East Midlands, and more. Whether you're stranded on the motorway or need assistance in a rural area, Apex has got you covered.
//             </p>
//           </motion.div>

//           {/* FAQ Item 6 */}
//           <motion.div
//             className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
//             initial="hidden"
//             animate={animateIndex >= 5 ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 0.6, type: 'spring', stiffness: 100 }} // Animation properties
//           >
//             <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
//             <h3 className="mb-2 text-lg font-bold faq-question-title">Are your drivers licensed and insured?</h3>
//             <p className="text-base text-gray-700 faq-question-answer">
//               Absolutely. Our drivers at Apex are fully licensed, trained, and insured to provide towing and recovery services. You can trust in their expertise and professionalism to handle your vehicle with care and attention to detail.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mapIcon from '../../assets/FaqBg.png';

const Faq = () => {
  // Set up useInView for each FAQ to trigger animation when in view
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.2 });
  const [ref6, inView6] = useInView({ threshold: 0.2 });

  // Define animation variants
  const faqVariants = {
    hidden: { opacity: 0, y: 50 },  // Start off lower and hidden
    visible: { opacity: 1, y: 0 },  // Animate upwards and become visible
  };

  return (
    <section className="relative w-full py-12 text-center bg-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-center bg-cover opacity-10" style={{ backgroundImage: `url(${mapIcon})` }}></div>

      <div className="relative z-10">
        <p className="text-lg font-semibold text-gray-500">FAQ</p>
        <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl">Popular questions <br />answered</h2>
        <p className="mb-10 text-lg text-gray-600 md:text-xl">
          We are a well-equipped towing service available to help with<br />
          towing a car 24/7. We provide a fast, affordable, friendly, and<br />
          reliable car towing service.
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {/* First FAQ */}
          <motion.div
            ref={ref1}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">What services do you offer?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              At Apex, we offer comprehensive car towing and recovery services across the UK. Our services include roadside assistance, vehicle recovery, accident recovery, and transportation of vehicles to designated locations.
            </p>
          </motion.div>

          {/* Second FAQ */}
          <motion.div
            ref={ref2}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">What types of vehicles do you tow?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              We specialize in towing a wide range of vehicles, including cars, vans, motorcycles, and light commercial vehicles. Our team has the expertise and equipment to handle the job efficiently and safely.
            </p>
          </motion.div>

          {/* Third FAQ */}
          <motion.div
            ref={ref3}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">How quickly can you respond to a call for assistance?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              We pride ourselves on our rapid response times. Our team at Apex is available 24/7, ensuring that we can reach you swiftly whenever you need us. Typically, we aim to reach your location within 20 minutes of receiving your call.
            </p>
          </motion.div>

          {/* Fourth FAQ */}
          <motion.div
            ref={ref4}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">How do I request your services?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              Requesting our services is easy. Simply give Apex a call, message us on Whatsapp or fill out our online contact form on our website. Provide us with your location and details of your situation, and we'll dispatch a team to assist you promptly.
            </p>
          </motion.div>

          {/* Fifth FAQ */}
          <motion.div
            ref={ref5}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView5 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">What areas do you cover?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              Our car towing and recovery services are available throughout the UK, covering Nottingham, East Midlands and more. Whether you're stranded on the motorway or need assistance in a rural area, Apex has got you covered.
            </p>
          </motion.div>

          {/* Sixth FAQ */}
          <motion.div
            ref={ref6}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg faq-question"
            initial="hidden"
            animate={inView6 ? 'visible' : 'hidden'}
            variants={faqVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-lg font-bold faq-question-title">Are your drivers licensed and insured?</h3>
            <p className="text-base text-gray-700 faq-question-answer">
              Absolutely. Our drivers at Apex are fully licensed, trained, and insured to provide towing and recovery services. You can trust in their expertise and professionalism to handle your vehicle with care and attention to detail.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
