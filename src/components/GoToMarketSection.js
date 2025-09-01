// components/GoToMarketSection.js
import { motion } from 'framer-motion';
import { useState } from 'react';

const phasesData = [
    {
        phase: 'Phase 1',
        title: 'Internal Adoption & Lighthouse Program',
        duration: 'First 6 Months',
        description: 'Deploy AI Nerve Centre internally to generate case studies. Engage 3-5 strategic lighthouse clients in a co-creation program to ensure market alignment.',
        icon: '🚀', // Launch icon
        color: 'from-blue-500 to-violet-600'
    },
    {
        phase: 'Phase 2',
        title: 'Broad Market Launch',
        duration: 'Months 6-12',
        description: 'Official public launch of the AI Nerve Centre brand, supported by a comprehensive marketing campaign.',
        icon: '🌐', // Globe icon
        color: 'from-violet-600 to-fuchsia-600'
    },
    {
        phase: 'Phase 3',
        title: 'Scale & Expand',
        duration: 'Months 12-24',
        description: 'Aggressively grow the Agent Hub, launch new Accelerator Services for more industries, and host a &quot;AI Nerve Centre Developer Day&quot; to foster the ecosystem.',
        icon: '📈', // Growth chart icon
        color: 'from-fuchsia-600 to-pink-600'
    },
];

function GoToMarketSection() {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <motion.section
            id="gomarket"
            className="py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-violet-500 tracking-wider uppercase">Go-to-Market</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Our Phased Launch Plan</p>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
                        Our launch is a carefully orchestrated campaign designed to build momentum, gather proof points, and mitigate risk, all centered on our narrative of &quot;Verifiable Trust.&quot;
                    </p>
                </div>
                
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {phasesData.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="relative pt-6" // Added pt-6 for padding-top and removed overflow-hidden
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Phase Indicator - Moved outside the card container */}
                            <motion.div 
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
                                animate={{
                                    scale: activeCard === index ? 1.1 : 1,
                                    y: activeCard === index ? -2 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1 rounded-full text-white font-bold shadow-lg">
                                    {item.phase}
                                </div>
                            </motion.div>

                            {/* Card Container */}
                            <motion.div 
                                className={`h-full bg-gradient-to-br ${item.color} p-[2px] rounded-2xl`}
                                animate={{
                                    scale: activeCard === index ? 1.03 : 1,
                                    boxShadow: activeCard === index 
                                        ? '0 0 30px rgba(139, 92, 246, 0.6)' 
                                        : '0 0 0px rgba(139, 92, 246, 0)',
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Card Content */}
                                <div className="bg-gray-900 p-6 h-full rounded-2xl flex flex-col relative">
                                    {/* Icon */}
                                    <motion.div 
                                        className="text-5xl mb-4 self-center"
                                        animate={{ 
                                            y: activeCard === index ? [-5, 0, -5] : 0,
                                            rotateZ: activeCard === index ? [-2, 0, 2, 0] : 0
                                        }}
                                        transition={{ 
                                            repeat: activeCard === index ? Infinity : 0, 
                                            duration: 2
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    
                                    {/* Title with gradient underline */}
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <motion.div 
                                        className={`h-1 bg-gradient-to-r ${item.color} mb-3 rounded-full`}
                                        animate={{ 
                                            width: activeCard === index ? "100%" : "40%",
                                        }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    />
                                    
                                    {/* Duration */}
                                    <p className="font-semibold text-violet-400 mb-3">{item.duration}</p>
                                    
                                    {/* Description */}
                                    <p className="text-gray-300 flex-grow">{item.description}</p>
                                    
                                    {/* Read More button that appears on hover */}
                                    <motion.div 
                                        className="mt-4 text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ 
                                            opacity: activeCard === index ? 1 : 0,
                                            y: activeCard === index ? 0 : 10
                                        }}
                                        transition={{ type: "spring" }}
                                    >
                                        <button className={`bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full font-medium text-sm`}>
                                            Learn More
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default GoToMarketSection;
