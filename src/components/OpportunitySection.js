// components/OpportunitySection.js
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { motion } from 'framer-motion';

function OpportunitySection() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const ctx = chartRef.current.getContext('2d');
        // Create market growth bar chart
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2024', '2030'],
                datasets: [{
                    label: 'AI Agents Market Size ($ Billions)',
                    data: [5.1, 47.1],
                    backgroundColor: 'rgba(139, 92, 246, 0.8)', // violet-500
                    borderColor: 'rgba(124, 58, 237, 1)',       // violet-600
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => ` $${context.raw} Billion`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Market Size in Billions (USD)' }
                    }
                }
            }
        });
    }, []);

    return (
        <motion.section
            id="opportunity"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0A1A]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-violet-400 tracking-wider uppercase">Market Landscape</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">The Next Trillion-Dollar Shift</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-100">
                        The transition from generative to agentic AI isn't just a trend; it's a seismic market transformation.
                        We are moving from AI as a tool to AI as an autonomous actor, creating a massive opportunity for first-movers.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Market Growth Card */}
                    <div className="bg-[#1A1025]/50 backdrop-blur-xl p-8 rounded-xl shadow-md border border-purple-900/30">
                        <h3 className="text-2xl font-bold text-white text-center">Explosive Market Growth</h3>
                        <p className="text-center text-gray-100 mt-2">
                            The AI Agents market is projected to grow nearly 10x by 2030, signaling an urgent need for enterprise-grade solutions.
                        </p>
                        <div className="chart-container mt-6" style={{ position: 'relative', height: '350px' }}>
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                    {/* Strategic Imperative Card */}
                    <div className="bg-[#1A1025]/50 backdrop-blur-xl p-8 rounded-xl shadow-md border border-purple-900/30">
                        <h3 className="text-2xl font-bold text-white text-center">Strategic Imperative</h3>
                        <div className="mt-6 space-y-6">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600/80 text-white">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Services-Led Endeavor</h4>
                                    <p className="mt-2 text-base text-gray-100">
                                        Enterprise-scale deployment requires deep domain expertise, process redesign, and governance—placing IT services firms in the lead.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600/80 text-white">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Navigating the Hype</h4>
                                    <p className="mt-2 text-base text-gray-100">
                                        With over 40% of projects predicted to fail due to "agent washing," clients need a trusted partner who can deliver verifiable ROI, not just hype.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600/80 text-white">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-white">Economic Impact</h4>
                                    <p className="mt-2 text-base text-gray-100">
                                        Agentic AI is projected to add up to $4.4 trillion in annual value to the global GDP, reshaping productivity across all industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default OpportunitySection;
