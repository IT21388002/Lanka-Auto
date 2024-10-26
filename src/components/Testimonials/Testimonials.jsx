// import React from 'react';

// const Testimonials = () => {
//   return (
//     <section className="px-6 py-12 text-center text-white bg-gray-900">
//       <p className="text-lg font-semibold text-yellow-500">TESTIMONIALS</p>
//       <h2 className="mb-6 text-3xl font-bold md:text-4xl">What people say about us</h2>
//       <p className="mb-10 text-lg md:text-xl">
//         We are a well-equipped towing service available to help with
//         <br />
//         towing a car 24/7. We provide a fast, affordable, friendly, and
//         <br />
//         reliable car towing service.
//       </p>
//       <div className="flex flex-wrap justify-center gap-6">
//   {/* Testimonial Item 1 */}
//   <div className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg">
//     <div className="flex mb-4">
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//     </div>
//     <p className="mb-3 text-lg text-left">
//       When I called Apex after my car crash, Mike arrived right away. He was extremely nice and recovered my car as if it were his own when he put it on the recovery van.
//     </p>
//     <p className="font-bold text-left">- Justin</p>
//     <p className="text-xs text-left text-gray-600">2 weeks ago</p>
//   </div>

//   {/* Testimonial Item 2 */}
//   <div className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg">
//     <div className="flex mb-4">
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//     </div>
//     <p className="mb-3 text-lg text-left">
//       I was driving in West Bridgeford when my tyre became flat. I had no spare so I called Apex Auto. They came within 20 minutes and got my tyre repaired. I was back driving within the hour.
//     </p>
//     <p className="font-bold text-left">- Paula</p>
//     <p className="text-xs text-left text-gray-600">1 month ago</p>
//   </div>

//   {/* Testimonial Item 3 */}
//   <div className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg">
//     <div className="flex mb-4">
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//       <span className="text-2xl text-yellow-500">★</span>
//     </div>
//     <p className="mb-3 text-lg text-left">
//       We always use Apex to transport cars that have failed MOT at our garage to the mechanic for repair. The guys are always on call and turn up right away.
//     </p>
//     <p className="font-bold text-left">- Adam H</p>
//     <p className="text-xs text-left text-gray-600">2 months ago</p>
//   </div>
// </div>

//     </section>
//   );
// };

// export default Testimonials;





import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  // Using useInView for animation trigger
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },  // Start slightly below
    visible: { opacity: 1, y: 0 },   // Move to original position
  };

  return (
    <section className="px-6 py-12 text-center text-white bg-gray-900">
      <p className="text-lg font-semibold text-yellow-500">TESTIMONIALS</p>
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">What people say about us</h2>
      <p className="mb-10 text-lg md:text-xl">
        We are a well-equipped towing service available to help with
        <br />
        towing a car 24/7. We provide a fast, affordable, friendly, and
        <br />
        reliable car towing service.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Testimonial Item 1 */}
        <motion.div
          ref={ref}
          className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 5.0 }} // Animation duration
        >
          <div className="flex mb-4">
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
          </div>
          <p className="mb-3 text-lg text-left">
            When I called Apex after my car crash, Mike arrived right away. He was extremely nice and recovered my car as if it were his own when he put it on the recovery van.
          </p>
          <p className="font-bold text-left">- Justin</p>
          <p className="text-xs text-left text-gray-600">2 weeks ago</p>
        </motion.div>

        {/* Testimonial Item 2 */}
        <motion.div
          ref={ref}
          className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1 }} // Animation duration with slight delay
        >
          <div className="flex mb-4">
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
          </div>
          <p className="mb-3 text-lg text-left">
            I was driving in West Bridgeford when my tyre became flat. I had no spare so I called Apex Auto. They came within 20 minutes and got my tyre repaired. I was back driving within the hour.
          </p>
          <p className="font-bold text-left">- Paula</p>
          <p className="text-xs text-left text-gray-600">1 month ago</p>
        </motion.div>

        {/* Testimonial Item 3 */}
        <motion.div
          ref={ref}
          className="w-full max-w-xs p-6 text-gray-900 bg-white rounded-lg shadow-lg"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }} // Animation duration with slight delay
        >
          <div className="flex mb-4">
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
            <span className="text-2xl text-yellow-500">★</span>
          </div>
          <p className="mb-3 text-lg text-left">
            We always use Apex to transport cars that have failed MOT at our garage to the mechanic for repair. The guys are always on call and turn up right away.
          </p>
          <p className="font-bold text-left">- Adam H</p>
          <p className="text-xs text-left text-gray-600">2 months ago</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
