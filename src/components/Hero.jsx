'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-4 overflow-hidden bg-[#0F0A1A]">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute w-full h-full object-cover opacity-60"
                    style={{ filter: 'brightness(0.5) contrast(1.2)' }}
                >
                    <source src="/Intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-[#13071D]/50 backdrop-blur-sm"></div>
            </div>

            {/* Glass card container with darker transparency */}
            <motion.div
                className="glass rounded-3xl p-8 md:p-12 max-w-6xl mx-auto text-center relative z-10 bg-[#1A1025]/50 backdrop-blur-xl border border-purple-900/30"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
            >
                {/* Main heading with enhanced glow */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                >
                    <motion.span
                        className="block gradient-text glow-text mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(139, 92, 246, 0.8)" }}
                        style={{
                            background: 'linear-gradient(135deg, #ffffff 10%, #f8fafc 30%, #e2e8f0 50%, #cbd5e1 70%, #94a3b8 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                            paddingBottom: '0.25em', // Add padding to the bottom
                            lineHeight: '1.3', // Increase line height for better text visibility
                            minHeight: '1.4em' // Ensure consistent height regardless of text content
                        }}
                    >
                        <div className="pb-2"> {/* Extra wrapper with padding for the Typewriter */}
                            <Typewriter
                                words={['The Agentic Enterprise.']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </div>
                    </motion.span>
                    <motion.span
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        style={{
                            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #a5b4fc 50%, #8b5cf6 75%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))',
                        }}
                    >
                        Built on Verifiable Trust.
                    </motion.span>
                </motion.h1>

                {/* Description with brighter text */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 font-medium text-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    Introducing <span
                        className="font-bold glow-text"
                        style={{
                            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #a5b4fc 50%, #8b5cf6 75%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))',
                        }}
                    >Project AI Nerve Centre</span>: Capgemini's strategic blueprint to lead in the new era of autonomous AI,
                    connecting systems, data, and functions to drive unprecedented business value.
                </motion.p>

                {/* CTA Button with brighter hover effect */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <motion.a
                        href="#opportunity"
                        className="inline-block glass-hover px-8 py-4 text-base font-semibold rounded-xl relative overflow-hidden group shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 25%, #6d28d9 50%, #5b21b6 75%, #4c1d95 100%)',
                            color: 'white'
                        }}
                    >
                        <span className="relative z-10">Explore the Vision</span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 25%, #7e22ce 50%, #6b21a8 75%, #581c87 100%)'
                            }}
                        ></div>
                    </motion.a>
                </motion.div>

                {/* Floating elements with brighter glow */}
                <motion.div
                    className="absolute top-4 right-4 w-20 h-20 bg-violet-600/40 rounded-full blur-xl floating-animation"
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-4 left-4 w-16 h-16 bg-purple-600/40 rounded-full blur-xl floating-animation"
                    animate={{
                        y: [0, 10, 0],
                        x: [0, -5, 0],
                        scale: [1, 0.9, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                ></motion.div>
            </motion.div>

            {/* Background decorative elements with enhanced brightness */}
            <div className="absolute inset-0 pointer-events-none z-[5]">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-300 rounded-full opacity-70"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-60"
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                ></motion.div>
                <motion.div
                    className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-70"
                    animate={{
                        x: [0, 10, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                ></motion.div>
            </div>
        </section>
    );
}

export default Hero;