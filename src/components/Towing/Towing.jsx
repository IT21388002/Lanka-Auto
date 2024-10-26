// import React from 'react';

// const Towing = () => {
//   return (
//     <section className="py-12 text-center bg-yellow-500 bg-cover" style={{ backgroundImage: `url('../../assets/i4thbgt4.png')` }}>
//       <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-6">
//         <h2 className="text-4xl font-bold md:text-3xl sm:text-2xl">Do you need towing service?</h2>
//         <p className="text-lg text-gray-800 sm:text-base">We hope you won't need it, but we are ready to help.</p>
//         <button className="px-6 py-3 text-lg text-yellow-300 bg-black rounded-md hover:bg-white sm:text-base">Call us now</button>
//       </div>
//     </section>
//   );
// };

// export default Towing;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Towing = () => {
  const ref = useRef(null); // Create a ref for the section
  const isInView = useInView(ref, { once: false }); // Check if in view

  return (
    <section
      ref={ref}
      className="py-12 text-center bg-yellow-500 bg-cover"
      style={{ backgroundImage: `url('../../assets/i4thbgt4.png')` }}
    >
      <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-6">
        <motion.h2
          className="text-4xl font-bold md:text-3xl sm:text-2xl"
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Animate based on inView
          transition={{ duration: 0.5 }} // Animation duration
        >
          Do you need towing service?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 sm:text-base"
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate based on inView
          transition={{ duration: 0.5 }} // Animation duration
        >
          We hope you won't need it, but we are ready to help.
        </motion.p>

        <motion.button
          className="px-6 py-3 text-lg text-yellow-300 bg-black rounded-md hover:bg-white sm:text-base"
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animate based on inView
          transition={{ duration: 0.5, delay: 0.3 }} // Add delay for a staggered effect
        >
          Call us now
        </motion.button>
      </div>
    </section>
  );
};

export default Towing;
