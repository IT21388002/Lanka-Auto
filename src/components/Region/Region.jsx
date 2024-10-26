

// import React from 'react';
// import mapIcon from '../../assets/map.png';
// import { motion } from 'framer-motion';

// // Slow flip animation
// const flipAnimation = {
//   hidden: { opacity: 0, rotateY: 90 },
//   visible: { opacity: 1, rotateY: 0, transition: { duration: 3 } } // Duration set to 3 seconds for a slow flip
// };

// const Region = () => {
//   return (
//     <div className="px-4 py-8 text-center">
//       <div className="max-w-screen-lg mx-auto">
//         <img src={mapIcon} alt="Map Icon" className="w-10 h-10 mx-auto mb-6" />
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={flipAnimation}
//           viewport={{ once: false }} // Animates every time it's in view
//         >
//           <h3 className="mb-4 text-2xl font-bold">The regions we cover</h3>
//           <ul className="list-none">
//             <li className="mb-2 text-lg">Car Recovery Nottingham</li>
//             <li className="mb-2 text-lg">Car Recovery Mansfield</li>
//             <li className="mb-2 text-lg">Car Recovery Ruddington</li>
//             <li className="mb-2 text-lg">Car Recovery Gotham</li>
//             <li className="mb-2 text-lg">Car Recovery Chesterfield</li>
//             <li className="mb-2 text-lg">Car Recovery Leicestershire</li>
//             <li className="mb-2 text-lg">Car Recovery Derbyshire</li>
//             <li className="mb-2 text-lg">Car Recovery Coalville</li>
//             <li className="mb-2 text-lg">Car Recovery Castle Donington</li>
//             <li className="mb-2 text-lg">Car Recovery Melton Mowbray</li>
//             <li className="mb-2 text-lg">Car Recovery Lutterworth</li>
//             <li className="mb-2 text-lg">Car Recovery Hinckley</li>
//             <li className="mb-2 text-lg">Car Recovery Ashby-de-la-Zouch</li>
//             <li className="mb-2 text-lg">Car Recovery Shepshed</li>
//             <li className="mb-2 text-lg">Car Recovery Belper</li>
//           </ul>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Region;






import React, { useRef } from 'react';
import mapIcon from '../../assets/map.png';
import { motion, useInView } from 'framer-motion';

// Container animation for the whole section
const containerAnimation = {
  hidden: { opacity: 0 }, // Initial state
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0, // Fade-in duration for the entire section
    },
  },
};

// Slide-in animation for list items
const slideAnimation = {
  hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
  visible: { opacity: 1, x: 0, transition: { duration: 1.0 } }, // Slide in to its original position
};

const Region = () => {
  const ref = useRef(null); // Create a ref for the section
  const isInView = useInView(ref, { once: false }); // Check if in view

  return (
    <div ref={ref} className="px-4 py-8 text-center">
      <div className="max-w-screen-lg mx-auto">
        <img src={mapIcon} alt="Map Icon" className="w-10 h-10 mx-auto mb-6" />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animate based on inView
          variants={containerAnimation} // Apply container animation for fade-in
          viewport={{ once: false }} // Animates every time it's in view
        >
          <h3 className="mb-4 text-2xl font-bold">The regions we cover</h3>
          <motion.ul className="list-none">
            {[
              'Car Recovery Nottingham',
              'Car Recovery Mansfield',
              'Car Recovery Ruddington',
              'Car Recovery Gotham',
              'Car Recovery Chesterfield',
              'Car Recovery Leicestershire',
              'Car Recovery Derbyshire',
              'Car Recovery Coalville',
              'Car Recovery Castle Donington',
              'Car Recovery Melton Mowbray',
              'Car Recovery Lutterworth',
              'Car Recovery Hinckley',
              'Car Recovery Ashby-de-la-Zouch',
              'Car Recovery Shepshed',
              'Car Recovery Belper',
            ].map((region, index) => (
              <motion.li
                key={index}
                className="mb-2 text-lg"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animate based on inView for simultaneous effect
                variants={slideAnimation} // Apply slide animation to each item
              >
                {region}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Region;
