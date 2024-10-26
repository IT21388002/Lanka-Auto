// import React from 'react';
// import Background from '../../assets/i4thbgt4.png';
// import Img1 from '../../assets/price-tag.png';
// import Img2 from '../../assets/on-time.png';
// import Img3 from '../../assets/team (1).png';

// const Feature = () => {
//   return (
//     <section
//       className="bg-yellow-400 bg-no-repeat bg-cover"
//       style={{ backgroundImage: `url(${Background})` }}
//     >
//       <div className="py-10 mx-auto max-w-7xl">
//         <div className="flex flex-wrap justify-center gap-6 md:gap-10">
//           <div className="p-10 text-center bg-white rounded-lg shadow-md w-72">
//             <div className="mb-4">
//               <img src={Img1} alt="Affordable Prices" className="w-20 h-20 mx-auto" />
//             </div>
//             <h3 className="mb-2 text-xl font-bold">Affordable prices</h3>
//             <p className="text-lg text-gray-700">
//               We operate new, clean and professional towing vehicles and equipment.
//             </p>
//           </div>

//           <div className="p-10 text-center bg-white rounded-lg shadow-md w-72">
//             <div className="mb-4">
//               <img src={Img2} alt="Fast and Efficient" className="w-20 h-20 mx-auto" />
//             </div>
//             <h3 className="mb-2 text-xl font-bold">Fast and efficient</h3>
//             <p className="text-lg text-gray-700">
//               24/7 - We're ready to take your call around the clock, on-call to keep you and your vehicle safe from danger.
//             </p>
//           </div>

//           <div className="p-10 text-center bg-white rounded-lg shadow-md w-72">
//             <div className="mb-4">
//               <img src={Img3} alt="Professional Staff" className="w-20 h-20 mx-auto" />
//             </div>
//             <h3 className="mb-2 text-xl font-bold">Professional staff</h3>
//             <p className="text-lg text-gray-700">
//               Our operators are trained, qualified and insured so they can offer you the best service possible.
//             </p>
//           </div>
//         </div>

//         <div className="mt-10 text-center">
//           <h2 className="mb-4 text-3xl font-bold">Do you need towing service?</h2>
//           <p className="mb-4 text-lg text-gray-700">
//             We hope you won't need it, but we are ready to help.
//           </p>
//           <button className="px-6 py-3 text-yellow-400 bg-black rounded hover:bg-white">
//             Call us now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;




import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Background from '../../assets/i4thbgt4.png';
import Img1 from '../../assets/price-tag.png';
import Img2 from '../../assets/on-time.png';
import Img3 from '../../assets/team (1).png';

const Feature = () => {
  // Setting up useInView to trigger animation every time sections come into view
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  // Define the animation variants for scrolling up and down
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },  // Start from below (y: 100)
    visible: { opacity: 1, y: 0 },   // Move to original position (y: 0)
  };

  return (
    <section
      className="bg-yellow-400 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="py-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {/* First section */}
          <motion.div
            ref={ref1}
            className="p-10 text-center bg-white rounded-lg shadow-md w-72"
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <img src={Img1} alt="Affordable Prices" className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Affordable prices</h3>
            <p className="text-lg text-gray-700">
              We operate new, clean and professional towing vehicles and equipment.
            </p>
          </motion.div>

          {/* Second section */}
          <motion.div
            ref={ref2}
            className="p-10 text-center bg-white rounded-lg shadow-md w-72"
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4">
              <img src={Img2} alt="Fast and Efficient" className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Fast and efficient</h3>
            <p className="text-lg text-gray-700">
              24/7 - We're ready to take your call around the clock, on-call to keep you and your vehicle safe from danger.
            </p>
          </motion.div>

          {/* Third section */}
          <motion.div
            ref={ref3}
            className="p-10 text-center bg-white rounded-lg shadow-md w-72"
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4">
              <img src={Img3} alt="Professional Staff" className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Professional staff</h3>
            <p className="text-lg text-gray-700">
              Our operators are trained, qualified and insured so they can offer you the best service possible.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">Do you need towing service?</h2>
          <p className="mb-4 text-lg text-gray-700">
            We hope you won't need it, but we are ready to help.
          </p>
          <button className="px-6 py-3 text-yellow-400 bg-black rounded hover:bg-white">
            Call us now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
