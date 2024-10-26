// import React from 'react';

// const Find = () => {
//     return (
//         <div className="w-full p-10 text-white bg-black">
//             <div className="mb-8 text-center">
//                 <h3 className="text-[#f5a623] text-lg font-normal mb-1">Find Us</h3>
//                 <h1 className="text-3xl font-semibold">Write to Us</h1>
//                 <p className="max-w-2xl mx-auto mt-2 text-base text-gray-400">
//                     We are a well-equipped towing and vehicle management service. We provide fast & affordable services to both commercial and individual clients.
//                 </p>
//             </div>
//             <div className="flex flex-col justify-between p-5 space-y-5 bg-gray-800 rounded-lg md:flex-row md:space-y-0 md:space-x-5">
//                 <div className="h-64 overflow-hidden rounded-lg md:w-1/2">
//                     {/* Google Map iframe */}
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23307.214631957325!2d-1.1526194527374447!3d52.96555515443744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c0d47a6a4a2f%3A0x282f6f6a3df72902!2sNG5%201BS%2C%20Herbert%20Rd%2C%20Nottingham!5e0!3m2!1sen!2suk!4v1696952176434!5m2!1sen!2suk"
//                         className="w-full h-full border-0"
//                         allowFullScreen
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade">
//                     </iframe>
//                 </div>
//                 <div className="flex flex-col items-center p-5 bg-gray-900 rounded-lg md:w-1/2">
//                     <h3 className="mb-4 text-xl font-medium">Operating Hours</h3>
//                     <div className="flex justify-between w-full mb-4 text-lg">
//                         <span>Open</span>
//                         <span className="font-semibold text-[#f5a623]">24/7</span>
//                     </div>
//                     <div className="text-base text-center">
//                         <p>Call us on <strong className="text-[#f5a623] text-lg">07301977207</strong></p>
//                         <p>Apex Auto Recovery & Transportation</p>
//                         <p>Hebert Road, Nottingham. NG5 1BS</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Find;



import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Find = () => {
    const ref = useRef(null); // Create a ref for the section
    const isInView = useInView(ref, { once: false }); // Check if in view

    return (
        <div ref={ref} className="w-full p-10 text-white bg-black">
            <div className="mb-8 text-center">
                <motion.h3
                    className="text-[#f5a623] text-lg font-normal mb-1"
                    initial={{ opacity: 0, y: -20 }} // Initial state
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Animate based on inView
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    Find Us
                </motion.h3>
                <motion.h1
                    className="text-3xl font-semibold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Write to Us
                </motion.h1>
                <motion.p
                    className="max-w-2xl mx-auto mt-2 text-base text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                >
                    We are a well-equipped towing and vehicle management service. We provide fast & affordable services to both commercial and individual clients.
                </motion.p>
            </div>
            <div className="flex flex-col justify-between p-5 space-y-5 bg-gray-800 rounded-lg md:flex-row md:space-y-0 md:space-x-5">
                <motion.div
                    className="h-64 overflow-hidden rounded-lg md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial state
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }} // Animate based on inView
                    transition={{ duration: 0.5 }}
                >
                    {/* Google Map iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23307.214631957325!2d-1.1526194527374447!3d52.96555515443744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c0d47a6a4a2f%3A0x282f6f6a3df72902!2sNG5%201BS%2C%20Herbert%20Rd%2C%20Nottingham!5e0!3m2!1sen!2suk!4v1696952176434!5m2!1sen!2suk"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center p-5 bg-gray-900 rounded-lg md:w-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="mb-4 text-xl font-medium">Operating Hours</h3>
                    <div className="flex justify-between w-full mb-4 text-lg">
                        <span>Open</span>
                        <span className="font-semibold text-[#f5a623]">24/7</span>
                    </div>
                    <div className="text-base text-center">
                        <p>Call us on <strong className="text-[#f5a623] text-lg">07301977207</strong></p>
                        <p>Apex Auto Recovery & Transportation</p>
                        <p>Hebert Road, Nottingham. NG5 1BS</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Find;
