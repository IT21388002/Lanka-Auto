

// import React from 'react';
// import contactImg from '../../assets/contact.png';

// const Contact = () => {
//     return (
//         <div className="relative z-10 w-full py-16 bg-gradient-to-b from-white to-[#f5a623]">
//             {/* Background image applied using ::before pseudo-element */}
//             <div className="absolute inset-0 bg-[url('../../assets/FaqBg.png')] bg-cover bg-center opacity-10 z-[-1]"></div>

//             <div className="mt-32 mb-12 text-center">
//                 <h2 className="text-[#f5a623] font-medium text-lg mb-2">CONTACT US</h2>
//                 <h1 className="text-4xl text-black md:text-5xl">Contact information</h1>
//             </div>

//             <div className="flex flex-col w-full gap-8 p-6 mx-auto bg-white rounded-lg shadow-lg md:flex-row md:justify-center md:p-12 md:w-[60%]">
//                 <div className="w-full md:w-1/2">
//                     <h3 className="mb-8 text-2xl font-bold">Write us a message</h3>
//                     <form>
//                         <div className="mb-6">
//                             <label className="block mb-2 text-sm text-gray-700">Your name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623]"
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block mb-2 text-sm text-gray-700">Your email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623]"
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block mb-2 text-sm text-gray-700">Your message</label>
//                             <textarea
//                                 name="message"
//                                 className="w-full p-3 h-40 md:h-56 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623] resize-none"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="px-6 py-3 text-white bg-[#f5a623] rounded-lg hover:bg-[#e5951d] font-bold">
//                             Submit
//                         </button>
//                     </form>
//                 </div>

//                 {/* Show image only on medium and larger screens */}
//                 <div className="justify-center hidden md:flex md:w-1/2">
//                     <img
//                         src={contactImg}
//                         alt="Car breakdown"
//                         className="object-cover w-full h-auto rounded-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;




import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import contactImg from '../../assets/contact.png';

const Contact = () => {
    const ref = useRef(null); // Create a ref for the section
    const isInView = useInView(ref, { once: false }); // Check if in view

    return (
        <div ref={ref} className="relative z-10 w-full py-16 bg-gradient-to-b from-white to-[#f5a623]">
            {/* Background image applied using ::before pseudo-element */}
            <div className="absolute inset-0 bg-[url('../../assets/FaqBg.png')] bg-cover bg-center opacity-10 z-[-1]"></div>

            <div className="mt-32 mb-12 text-center">
                <motion.h2
                    className="text-[#f5a623] font-medium text-lg mb-2"
                    initial={{ opacity: 0, y: -20 }} // Initial state
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }} // Animate based on inView
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    CONTACT US
                </motion.h2>
                <motion.h1
                    className="text-4xl text-black md:text-5xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact information
                </motion.h1>
            </div>

            <div className="flex flex-col w-full gap-8 p-6 mx-auto bg-white rounded-lg shadow-lg md:flex-row md:justify-center md:p-12 md:w-[60%]">
                <div className="w-full md:w-1/2">
                    <motion.h3
                        className="mb-8 text-2xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Write us a message
                    </motion.h3>
                    <form>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label className="block mb-2 text-sm text-gray-700">Your name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623]"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label className="block mb-2 text-sm text-gray-700">Your email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623]"
                            />
                        </motion.div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <label className="block mb-2 text-sm text-gray-700">Your message</label>
                            <textarea
                                name="message"
                                className="w-full p-3 h-40 md:h-56 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-[#f5a623] resize-none"
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="px-6 py-3 text-white bg-[#f5a623] rounded-lg hover:bg-[#e5951d] font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            Submit
                        </motion.button>
                    </form>
                </div>

                {/* Show image only on medium and larger screens */}
                <motion.div
                    className="justify-center hidden md:flex md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }} // Initial state
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }} // Animate based on inView
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={contactImg}
                        alt="Car breakdown"
                        className="object-cover w-full h-auto rounded-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
