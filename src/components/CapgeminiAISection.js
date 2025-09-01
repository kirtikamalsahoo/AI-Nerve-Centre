'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CapgeminiAISection = () => {
  const aiSolutions = [
    {
      id: 'raise',
      name: 'Capgemini Raise',
      description: 'Reliable AI Solution Engineering (RAISE) is our comprehensive approach to building responsible and reliable AI systems tailored to your business needs.',
      link: 'https://www.capgemini.com/solutions/raise-reliable-ai-solution-engineering/',
      gradient: 'from-blue-600 via-indigo-500 to-purple-600',
      hoverGradient: 'from-blue-500 via-indigo-400 to-purple-500',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      id: 'resonance',
      name: 'Resonance AI',
      description: 'Harness the power of Data & AI to transform your business with advanced analytics, machine learning, and AI-driven insights tailored to your industry needs.',
      link: 'https://www.capgemini.com/services/data-and-ai/',
      gradient: 'from-purple-600 via-violet-500 to-indigo-600',
      hoverGradient: 'from-purple-500 via-violet-400 to-indigo-500',
      iconPath: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
    },
    {
      id: 'agentic-control-tower',
      name: 'Agentic Control Tower',
      description: 'Centralized orchestration platform that manages and coordinates multiple AI agents to streamline complex workflows and deliver integrated solutions across your enterprise.',
      link: 'https://www.capgemini.com/services/agentic-solutions/',
      gradient: 'from-purple-600 via-violet-500 to-indigo-600',
      hoverGradient: 'from-purple-500 via-violet-400 to-indigo-500',
      iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    }
  ];

  return (
    <section className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-md text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-base font-semibold tracking-wide uppercase text-violet-400">
            Enterprise AI Solutions
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Capgemini AI Offerings
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Explore Capgemini&apos;s cutting-edge AI solutions designed to transform businesses and drive innovation across industries.
          </p>
        </div>

        {/* AI Solutions Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {aiSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              className={`rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                boxShadow: '0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.1)'
              }}
            >
              <Link href={solution.link} passHref target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer h-full">
                  <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                  <div className="bg-[#1A1025]/80 backdrop-blur-lg p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r ${solution.gradient}`}>
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.iconPath} />
                        </svg>
                      </div>
                      <h3 className="ml-4 text-2xl font-bold text-white">{solution.name}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8">{solution.description}</p>
                    
                    <div className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${solution.gradient} hover:${solution.hoverGradient} text-white font-medium transition-all duration-300 transform hover:translate-x-1`}>
                      <span>Learn More</span>
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapgeminiAISection;