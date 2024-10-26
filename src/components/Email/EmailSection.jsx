// import React from 'react';

// const EmailSection = () => {
//   return (
//     <div className="py-8 text-center bg-white">
//       <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-4">
//         <h2 className="text-3xl font-bold md:text-4xl">Do you need towing service?</h2>
//         <p className="text-lg text-gray-700 md:text-xl">We hope you won’t need it, but we are ready to help.</p>
//         <button className="px-6 py-3 text-lg text-yellow-300 transition duration-300 bg-black rounded-md hover:bg-white">
//           Email Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmailSection;


import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EmailSection = () => {
  const ref = useRef(null); // Create a ref for the section
  const isInView = useInView(ref, { once: false }); // Check if in view

  return (
    <div ref={ref} className="py-8 text-center bg-white">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-4">
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: -20 }} // Initial state
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Animate based on inView
          transition={{ duration: 0.5 }} // Animation duration
        >
          Do you need towing service?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          We hope you won’t need it, but we are ready to help.
        </motion.p>

        <motion.button
          className="px-6 py-3 text-lg text-yellow-300 transition duration-300 bg-black rounded-md hover:bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Add delay for a staggered effect
        >
          Email Us
        </motion.button>
      </div>
    </div>
  );
};

export default EmailSection;
