'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SolutionsSection from './SolutionsSection';
import SynapseFoundrySection from './SynapseFoundrySection';
import AcceleratorServicesSection from './AcceleratorServicesSection';
import IndustrialAgentsSection from './IndustrialAgentsSection';
import CapgeminiAISection from './CapgeminiAISection';

const pillarsData = [
	{
		name: 'Capgemini AI',
		iconPath:
			'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
		description:
			"Explore Capgemini's premier AI solutions that transform businesses through intelligent automation, data-driven insights, and cutting-edge technology innovation.",
	},
	{
		name: 'AI Nerve Centre Foundry',
		iconPath: 'M10 20l4-16m4 16l4-16M3 9h18M4 15h16',
		description:
			'The engine of agentic development. An open-core, enterprise-grade platform for building, orchestrating, and governing AI agents, featuring both no-code and pro-code interfaces to empower all users.',
	},
	{
		name: 'AI Nerve Centre Agent Hub',
		iconPath: 'M4 6h16M4 10h16M4 14h16M4 18h16',
		description:
			'Quality over quantity. A curated and rigorously certified marketplace of high-value "Agent Teams" designed to execute complex, end-to-end industry workflows, not just single tasks.',
	},
	{
		name: 'Accelerator Services',
		iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
		description:
			'The path to commercialization. A portfolio of productized, outcome-based solutions that solve high-impact business problems, moving towards value-sharing and co-investment commercial models.',
	},
	{
		name: 'Industrial Agents',
		iconPath:
			'M19.428 15.428a2 2 0 00-1.022-.547l-2.363-.472a6 6 0 00-4.37 0l-2.363.472a2 2 0 00-1.022.547m3.388-3.388l2.364-2.363a2 2 0 00-2.828-2.828L12 8.172l-1.612-1.612a2 2 0 00-2.828 2.828l2.364 2.363',
		description:
			"Our key differentiator. Leveraging Capgemini Engineering's deep expertise to deliver physical AI solutions for manufacturing, logistics, and supply chain, bridging the digital-physical gap.",
	},
];

function BlueprintSection() {
	const [expanded, setExpanded] = useState(null);
	const expandedContentRef = useRef(null);

	const handlePillarClick = (pillarName) => {
		setExpanded(expanded === pillarName ? null : pillarName);
	};

	// Effect to scroll to the expanded content when a pillar is clicked
	useEffect(() => {
		if (expanded && expandedContentRef.current) {
			// Add a small delay to ensure content is rendered before scrolling
			const scrollTimer = setTimeout(() => {
				expandedContentRef.current.scrollIntoView({ 
					behavior: 'smooth', 
					block: 'center' 
				});
			}, 300);

			return () => clearTimeout(scrollTimer);
		}
	}, [expanded]);

	return (
		<section
			id="blueprint"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F0A1A] overflow-hidden relative"
		>
			{/* Background decorative elements similar to Hero */}
			<div className="absolute inset-0 pointer-events-none bg-[#13071D]/70">
				<motion.div
					className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-300 rounded-full opacity-70"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.7, 1, 0.7],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				></motion.div>
				<motion.div
					className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-60"
					animate={{
						y: [0, -15, 0],
						opacity: [0.6, 0.9, 0.6],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				></motion.div>
				<motion.div
					className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-70"
					animate={{
						x: [0, 10, 0],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 3,
					}}
				></motion.div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Blueprint section header with improved styling */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-base font-semibold text-violet-400 tracking-wider uppercase">
						Capgemini AI Nerve Centre
					</h2>
					<motion.p
						className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
						style={{
							background:
								'linear-gradient(135deg, #ffffff 10%, #f8fafc 30%, #e2e8f0 50%, #cbd5e1 70%, #94a3b8 90%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
						}}
					>
						Our Differentiated Blueprint
					</motion.p>
					<p className="mt-4 max-w-3xl mx-auto text-xl text-gray-200">
          AI Nerve Centre is not just another platform; it&apos;s a complete ecosystem
						designed around Openness, Industrial Focus, and Verifiable Trust.
						Explore the four pillars that form the foundation of our offering.
					</p>
				</motion.div>

				{/* Pillar cards with glass effect - restructured for 3-2 layout */}
				<div className="mt-12 flex flex-col gap-8">
					{/* First row with 3 cards */}
					<motion.div
						className="grid gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{pillarsData.slice(0, 3).map((pillar, index) => (
							<motion.div
								key={pillar.name}
								onClick={() => handlePillarClick(pillar.name)}
								className={`bg-[#1A1025]/50 backdrop-blur-xl p-6 rounded-xl text-center cursor-pointer transform transition hover:-translate-y-2 border border-purple-900/30 ${
									expanded === pillar.name
										? 'ring-2 ring-violet-400 shadow-lg shadow-violet-500/60 scale-105'
										: ''
								}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								whileHover={{
									boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
									scale: expanded === pillar.name ? 1.05 : 1.02,
								}}
							>
								<div
									className={`flex items-center justify-center h-16 w-16 rounded-full mx-auto ${
										expanded === pillar.name
											? 'bg-violet-600'
											: 'bg-violet-800/60'
									}`}
								>
									<svg
										className={`h-8 w-8 ${
											expanded === pillar.name
												? 'text-white'
												: 'text-violet-200'
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d={pillar.iconPath}
										/>
									</svg>
								</div>

								{/* Floating glow effect similar to Hero */}
								<motion.div
									className={`absolute ${
										index % 2 === 0 ? 'top-2 right-2' : 'bottom-2 left-2'
									} w-10 h-10 bg-violet-600/20 rounded-full blur-lg`}
									animate={{
										y: [0, -5, 0],
										x: [0, 3, 0],
										opacity: [0.2, 0.3, 0.2],
									}}
									transition={{
										duration: 3 + index,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								></motion.div>

								<h3
									className={`mt-5 text-xl font-semibold ${
										expanded === pillar.name
											? 'text-violet-300'
											: 'text-gray-200'
									}`}
								>
									{pillar.name}
								</h3>
							</motion.div>
						))}
					</motion.div>

					{/* Second row with 2 cards centered */}
					<motion.div
						className="grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-[calc(66%)] mx-auto" 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						{pillarsData.slice(3).map((pillar, index) => (
							<motion.div
								key={pillar.name}
								onClick={() => handlePillarClick(pillar.name)}
								className={`bg-[#1A1025]/50 backdrop-blur-xl p-6 rounded-xl text-center cursor-pointer transform transition hover:-translate-y-2 border border-purple-900/30 ${
									expanded === pillar.name
										? 'ring-2 ring-violet-400 shadow-lg shadow-violet-500/60 scale-105'
										: ''
								}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 + (index + 3) * 0.1 }}
								whileHover={{
									boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
									scale: expanded === pillar.name ? 1.05 : 1.02,
								}}
							>
								<div
									className={`flex items-center justify-center h-16 w-16 rounded-full mx-auto ${
										expanded === pillar.name
											? 'bg-violet-600'
											: 'bg-violet-800/60'
									}`}
								>
									<svg
										className={`h-8 w-8 ${
											expanded === pillar.name
												? 'text-white'
												: 'text-violet-200'
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d={pillar.iconPath}
										/>
									</svg>
								</div>

								{/* Floating glow effect similar to Hero */}
								<motion.div
									className={`absolute ${
										index % 2 === 0 ? 'top-2 right-2' : 'bottom-2 left-2'
									} w-10 h-10 bg-violet-600/20 rounded-full blur-lg`}
									animate={{
										y: [0, -5, 0],
										x: [0, 3, 0],
										opacity: [0.2, 0.3, 0.2],
									}}
									transition={{
										duration: 3 + index + 3,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								></motion.div>

								<h3
									className={`mt-5 text-xl font-semibold ${
										expanded === pillar.name
											? 'text-violet-300'
											: 'text-gray-200'
									}`}
								>
									{pillar.name}
								</h3>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Expanded pillar content with glass styling */}
				{pillarsData.map((pillar) => {
					const isOpen = expanded === pillar.name;
					return (
						<AnimatePresence key={pillar.name}>
							{isOpen && (
								<motion.div
									key={pillar.name + '-expanded'}
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.5 }}
									className="mt-10 overflow-hidden bg-[#1A1025]/50 backdrop-blur-xl p-8 rounded-xl border border-purple-900/30 shadow-lg shadow-purple-900/20"
									ref={expandedContentRef}
								>
									<div className="text-center mb-8 relative">
										{/* Floating glow elements */}
										<motion.div
											className="absolute top-0 right-1/4 w-16 h-16 bg-violet-600/20 rounded-full blur-xl"
											animate={{
												y: [0, -8, 0],
												x: [0, 5, 0],
												scale: [1, 1.1, 1],
											}}
											transition={{
												duration: 4,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
										></motion.div>

										<motion.h3
											className="text-2xl font-bold mb-2"
											style={{
												background:
													'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #a5b4fc 50%, #8b5cf6 75%, #7c3aed 100%)',
												WebkitBackgroundClip: 'text',
												WebkitTextFillColor: 'transparent',
												backgroundClip: 'text',
												filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))',
											}}
										>
											{pillar.name} Solutions
										</motion.h3>
										<p className="text-gray-200 mb-6 max-w-3xl mx-auto">
											{pillar.description}
										</p>
									</div>
									<div className="solutions-wrapper">
										{pillar.name === 'AI Nerve Centre Foundry' && (
											<SynapseFoundrySection />
										)}
										{pillar.name === 'AI Nerve Centre Agent Hub' && (
											<SolutionsSection />
										)}
										{pillar.name === 'Accelerator Services' && (
											<AcceleratorServicesSection />
										)}
										{pillar.name === 'Industrial Agents' && (
											<IndustrialAgentsSection />
										)}
										{pillar.name === 'Capgemini AI' && (
											<CapgeminiAISection />
										)}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					);
				})}
			</div>
		</section>
	);
}

export default BlueprintSection;
