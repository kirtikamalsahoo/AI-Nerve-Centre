'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Navbar({ activeSection }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentActive, setCurrentActive] = useState(activeSection || '');
    
    const navLinks = [
        { href: '#opportunity', label: 'Opportunity', id: 'opportunity' },
        { href: '#arena', label: 'Arena', id: 'arena' },
        { href: '#blueprint', label: 'Blueprint', id: 'blueprint' },
        { href: '#gomarket', label: 'Go-to-Market', id: 'gomarket' },
    ];

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
            // Check which section is currently in view
            const heroElement = document.getElementById('hero');
            if (heroElement) {
                const heroRect = heroElement.getBoundingClientRect();
                // If hero section is in the viewport and taking significant space
                if (heroRect.top <= 100 && heroRect.bottom >= window.innerHeight / 2) {
                    // When in hero section, don't highlight any nav item
                    setCurrentActive('');
                    return;
                }
            }
            
            // Update active section based on scroll position for other sections
            const sections = navLinks.map(link => link.id);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is in the viewport (more visible)
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setCurrentActive(section);
                        break;
                    }
                }
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[1000] w-full">
            <motion.div 
                id="header"
                className={`${
                    scrolled 
                        ? 'bg-[#0F0A1A]/90 backdrop-blur-lg shadow-lg shadow-violet-900/20 border-b border-violet-900/30' 
                        : 'bg-[#0F0A1A]/70 backdrop-blur-sm'
                } transition-all duration-300`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <a href="#" className="flex items-center">
                            <Image 
                                src="/logo.png" 
                                alt="Capgemini Synapse Logo" 
                                width={300} 
                                height={68} 
                                priority
                            />
                        </a>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    className="relative"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                >
                                    <a
                                        href={link.href}
                                        className={
                                            'nav-link px-4 py-2 rounded-xl text-base md:text-lg font-medium transition-all duration-300 ' +
                                            (currentActive === link.href.substring(1)
                                                ? `text-violet-300 ${scrolled ? 'bg-violet-800/30' : 'bg-violet-900/40'} border border-violet-600/40 shadow-md shadow-violet-700/30`
                                                : 'text-gray-300 hover:text-violet-200 hover:bg-violet-700/20')
                                        }
                                        onClick={() => setCurrentActive(link.href.substring(1))}
                                    >
                                        {link.label}
                                        {currentActive === link.href.substring(1) && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]"></div>
                                        )}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-3 rounded-xl ${
                                scrolled ? 'bg-gray-900/70' : 'bg-gray-900/40'
                            } hover:bg-violet-900/30 text-gray-300 hover:text-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-600/50`}
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Links */}
                {mobileMenuOpen && (
                    <motion.div
                        className={`md:hidden ${
                            scrolled ? 'bg-gray-900/90' : 'bg-[#0F0A1A]/80'
                        } backdrop-blur-lg m-4 rounded-2xl shadow-lg shadow-violet-900/30 border border-violet-900/20`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="px-4 pt-4 pb-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                >
                                    <a
                                        href={link.href}
                                        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                                            currentActive === link.href.substring(1)
                                                ? 'text-violet-300 bg-violet-800/30'
                                                : 'text-gray-300 hover:text-violet-200 hover:bg-violet-800/20'
                                        }`}
                                        onClick={() => {
                                            setCurrentActive(link.href.substring(1));
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default Navbar;