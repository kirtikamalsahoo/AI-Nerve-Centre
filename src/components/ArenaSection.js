// components/ArenaSection.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const competitorsData = [
    { id: 'ltim', name: 'LTIMindtree', platform: 'BlueVerse', strength: 'Well-structured 3-pillar model and strong Google/Salesforce partnerships.', weakness: 'Lacks a unique selling proposition; risks being seen as a "me-too" offering.' },
    { id: 'accenture', name: 'Accenture', platform: 'AI Refinery', strength: 'Unparalleled brand power, focus on industrialization, and a unique Physical AI SDK.', weakness: 'Highly proprietary, "walled garden" architecture may create vendor lock-in fears.' },
    { id: 'deloitte', name: 'Deloitte', platform: 'Agentic AI Blueprint', strength: 'Deep industry-first expertise, aligned with standards like eTOM, and a focus on workforce transformation.', weakness: 'Technology story is less cohesive; appears as a collection of services rather than a unified platform.' },
    { id: 'infosys', name: 'Infosys', platform: 'Agentic Foundry', strength: 'Potent "open" and "tech-agnostic" messaging to avoid vendor lock-in.', weakness: 'Potential disconnect between marketing and product maturity, with underdeveloped public assets.' },
    { id: 'tcs', name: 'TCS', platform: 'Embedded Offerings', strength: 'Strong leadership vision and tangible use cases like legacy modernization with MasterCraft™.', weakness: 'Lack of a single, cohesive brand and platform identity presents a marketing challenge.' },
    { id: 'cognizant', name: 'Cognizant', platform: 'Neuro AI', strength: 'Unique open-source strategy to build a developer community and focus on interoperability.', weakness: 'Faces a significant challenge in gaining mindshare against more established rivals.' },
    { id: 'genpact', name: 'Genpact', platform: 'Service-as-Agentic-Solutions', strength: 'Exceptionally clear value proposition for specific functions (e.g., AP) with demonstrable ROI.', weakness: 'Strong BPO brand association may limit their perception as an enterprise-wide transformation partner.' },
];

function ArenaSection() {
    const [selectedCompetitor, setSelectedCompetitor] = useState(competitorsData[0]);

    return (
        <motion.section
            id="arena"
            className="py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-violet-500 tracking-wider uppercase">Competitive Arena</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Deconstructing the Rivals</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                        Every major IT services firm has launched an agentic AI offering. Understanding their strategies, strengths, and weaknesses is key to carving out our unique, defensible position. Select a competitor to analyze their offering.
                    </p>
                </div>
                <div className="mt-10">
                    {/* Competitor Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {competitorsData.map(comp => (
                            <button
                                key={comp.id}
                                className={
                                    'competitor-logo px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg border-2 transition-transform ' +
                                    (selectedCompetitor.id === comp.id ? 'border-violet-500 scale-105 text-white' : 'border-transparent text-gray-300')
                                }
                                onClick={() => setSelectedCompetitor(comp)}
                            >
                                {comp.name}
                            </button>
                        ))}
                    </div>
                    {/* Competitor Details - removed min-height to adapt to content */}
                    <div id="competitor-details" className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8">
                        <AnimatePresence mode="wait">
                            {selectedCompetitor && (
                                <motion.div
                                    key={selectedCompetitor.id}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full text-left"
                                >
                                    <h3 className="text-3xl font-bold text-white">
                                        {selectedCompetitor.name} – <span className="text-violet-400">{selectedCompetitor.platform}</span>
                                    </h3>
                                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <h4 className="text-xl font-semibold text-green-400">Key Strength</h4>
                                            <p className="mt-2 text-gray-300">{selectedCompetitor.strength}</p>
                                        </div>
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <h4 className="text-xl font-semibold text-red-400">Weakness / Critique</h4>
                                            <p className="mt-2 text-gray-300">{selectedCompetitor.weakness}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default ArenaSection;
