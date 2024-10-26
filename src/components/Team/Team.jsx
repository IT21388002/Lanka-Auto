


// import React from 'react';
// import img from '../../assets/Team.png';

// const Team = () => {
//   return (
//     <section className="flex flex-col items-center px-4 py-10 mb-5 text-white bg-gray-900 md:flex-row md:px-20">
//       {/* Team Image */}
//       <div className="flex justify-center w-full mb-4 md:w-1/3 md:mb-0 md:ml-10">
//         <img
//           src={img}
//           alt="Team Member"
//           className="w-4/5 rounded-lg md:w-3/4"
//         />
//       </div>

//       {/* Team Quote Section */}
//       <div className="flex flex-col items-center justify-center text-center w-80 md:w-2/3 md:items-start md:text-left">
//         <span className="flex items-center justify-center w-10 h-10 mb-4 font-bold text-black bg-yellow-500 border-2 border-yellow-400 rounded-full quote-icon">
//           66
//         </span>
//         <p className="text-xl leading-relaxed md:text-3xl">
//           Give us a call and we'll provide you
//           <br />
//           with professional advice to ensure both
//           <br />
//           you and the car are safe from danger.
//         </p>
//         <p className="mt-4 mb-2 text-2xl font-bold team-name">Apex Team</p>
//         <p className="text-sm italic text-gray-400 team-company">Apex Auto Recovery</p>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../../assets/Team.png';

const Team = () => {
  // Using useInView for animation trigger
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, x: -100 }, // Start from the left
    visible: { opacity: 1, x: 0 },    // Move to original position
  };

  return (
    <section className="flex flex-col items-center px-4 py-10 mb-5 text-white bg-gray-900 md:flex-row md:px-20">
      {/* Team Image */}
      <motion.div
        ref={ref}
        className="flex justify-center w-full mb-4 md:w-1/3 md:mb-0 md:ml-10"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <img
          src={img}
          alt="Team Member"
          className="w-4/5 rounded-lg md:w-3/4"
        />
      </motion.div>

      {/* Team Quote Section */}
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center text-center w-80 md:w-2/3 md:items-start md:text-left"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, delay: 0.1 }} 
      >
        <span className="flex items-center justify-center w-10 h-10 mb-4 font-bold text-black bg-yellow-500 border-2 border-yellow-400 rounded-full quote-icon">
          66
        </span>
        <p className="text-xl leading-relaxed md:text-3xl">
          Give us a call and we'll provide you
          <br />
          with professional advice to ensure both
          <br />
          you and the car are safe from danger.
        </p>
        <p className="mt-4 mb-2 text-2xl font-bold team-name">Apex Team</p>
        <p className="text-sm italic text-gray-400 team-company">Apex Auto Recovery</p>
      </motion.div>
    </section>
  );
};

export default Team;
