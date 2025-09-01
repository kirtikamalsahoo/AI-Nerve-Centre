'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AcceleratorServicesSection = () => {
  // Data for Accelerator Services (industries and their solutions)
  const industriesData = [
    {
      id: 'financial',
      name: 'Financial Services',
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      solutions: [
        {
          id: 'loan',
          name: 'Autonomous Loan Processing',
          description: 'Automate the loan origination process from application to approval with AI agents handling document checks, risk scoring, and verification.',
          roi: { label: 'Processing Time Reduction', value: 60 },
          blueprint: {
            coordinator: 'Loan Coordinator Agent',
            agents: ['Document Parser', 'Risk Assessor', 'Credit Checker', 'Approval Engine']
          }
        },
        {
          id: 'fraud',
          name: 'Real-Time Fraud Detection',
          description: 'AI agents monitor transactions to detect fraudulent patterns in real-time, reducing losses and manual review effort.',
          roi: { label: 'Fraud Loss Reduction', value: 50 },
          blueprint: {
            coordinator: 'Fraud Supervisor Agent',
            agents: ['Transaction Scanner', 'Pattern Learner', 'Alert Dispatcher', 'Case Manager']
          }
        }
      ]
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      solutions: [
        {
          id: 'shopping',
          name: 'Personalized Shopping Agent',
          description: 'An AI agent interacts with customers online, offering personalized recommendations, answering questions, and guiding purchases.',
          roi: { label: 'Conversion Rate Increase', value: 20 },
          blueprint: {
            coordinator: 'Shopping Guide Agent',
            agents: ['Recommendation Engine', 'Chatbot Interface', 'Inventory Checker', 'Offer Personalizer']
          }
        },
        {
          id: 'demand',
          name: 'Demand Forecasting Service',
          description: 'A predictive agent analyzes sales trends and external factors to forecast product demand, optimizing stock levels and reducing waste.',
          roi: { label: 'Inventory Cost Reduction', value: 30 },
          blueprint: {
            coordinator: 'Forecast Agent',
            agents: ['Sales Data Analyzer', 'Trend Monitor', 'Reorder Planner', 'Alert Notifier']
          }
        }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.363-.472a6 6 0 00-4.37 0l-2.363.472a2 2 0 00-1.022.547m3.388-3.388l2.364-2.363a2 2 0 00-2.828-2.828L12 8.172l-1.612-1.612a2 2 0 00-2.828 2.828l2.364 2.363',
      solutions: [
        {
          id: 'maintenance',
          name: 'Predictive Maintenance',
          description: 'Agents analyze machine sensor data to predict failures before they happen, scheduling maintenance to reduce downtime.',
          roi: { label: 'Downtime Reduction', value: 40 },
          blueprint: {
            coordinator: 'Maintenance Planner',
            agents: ['Sensor Data Reader', 'Anomaly Detector', 'Schedule Optimizer', 'Technician Notifier']
          }
        },
        {
          id: 'quality',
          name: 'Automated Quality Inspection',
          description: 'Computer vision agents inspect products on the assembly line in real-time, catching defects without slowing production.',
          roi: { label: 'Defect Detection Rate', value: 90 },
          blueprint: {
            coordinator: 'Vision QA Agent',
            agents: ['Camera Sensor', 'Image Analyzer', 'Anomaly Highlighter', 'Rejection Controller']
          }
        }
      ]
    },
    {
      id: 'public',
      name: 'Public Sector',
      icon: 'M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      solutions: [
        {
          id: 'citizen',
          name: 'Citizen Support AI',
          description: 'A virtual assistant handles citizen queries, processes forms, and provides information for public services to improve accessibility and efficiency.',
          roi: { label: 'Service Response Improvement', value: 50 },
          blueprint: {
            coordinator: 'Citizen Service Agent',
            agents: ['Query Interpreter', 'Form Processor', 'Info Database', 'Response Generator']
          }
        },
        {
          id: 'traffic',
          name: 'Smart Traffic Management',
          description: 'AI-driven traffic lights adapt to real-time conditions and emergency vehicles to reduce congestion and improve commute times.',
          roi: { label: 'Congestion Reduction', value: 30 },
          blueprint: {
            coordinator: 'Traffic AI Controller',
            agents: ['Sensor Network', 'Congestion Predictor', 'Signal Optimizer', 'Alert Broadcaster']
          }
        }
      ]
    }
  ];

  // State for selected industry and solution
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);
  const [selectedSolution, setSelectedSolution] = useState(industriesData[0].solutions[0]);
  const [contentVisible, setContentVisible] = useState(true);

  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  // Update selectedSolution when selectedIndustry changes
  useEffect(() => {
    setSelectedSolution(selectedIndustry.solutions[0]);
  }, [selectedIndustry]);

  // Animate chart and content when selectedSolution changes
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => {
      setContentVisible(true);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (chartRef.current) chartRef.current.destroy();
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [selectedSolution.roi.value, 100 - selectedSolution.roi.value],
              backgroundColor: ['#7c3aed', '#e5e7eb'],
              borderColor: ['#7c3aed', '#e5e7eb'],
              borderWidth: 1,
              circumference: 180,
              rotation: 270
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: { tooltip: { enabled: false } }
          }
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedSolution]);

  // Reusable BlueprintDiagram component for the diagram
  const BlueprintDiagram = ({ blueprint }) => {
    const containerRef = useRef(null);
    const [agentPositions, setAgentPositions] = useState([]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
      
      // Fixed positions for 4 agents with increased horizontal spacing
      // Increased horizontal distance from 160px to 200px for better left/right spacing
      const fixedPositions = [
        { position: 'top', offsetX: 0, offsetY: -160 },    // Top
        { position: 'right', offsetX: 200, offsetY: 0 },   // Right - increased from 160 to 200
        { position: 'bottom', offsetX: 0, offsetY: 160 },  // Bottom
        { position: 'left', offsetX: -200, offsetY: 0 }    // Left - increased from -160 to -200
      ];
      
      const centerX = container.clientWidth / 2;
      const centerY = container.clientHeight / 2;
      
      // Map agents to fixed positions
      const positions = blueprint.agents.map((agent, idx) => {
        // Only use the first 4 agents if there are more
        if (idx > 3) return null;
        
        const { offsetX, offsetY, position } = fixedPositions[idx];
        return {
          name: agent,
          x: centerX + offsetX,
          y: centerY + offsetY,
          position
        };
      }).filter(Boolean); // Remove any null values
      
      setAgentPositions(positions);
    }, [blueprint]);

    return (
      <div ref={containerRef} className="relative w-full h-full">
        {/* Coordinator in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex items-center justify-center w-32 h-32 rounded-full 
                        bg-violet-600 text-white text-center shadow-lg z-10">
          <div className="flex items-center justify-center h-full w-full px-2">
            <span className="text-center">{blueprint.coordinator}</span>
          </div>
        </div>
        {/* Agents around coordinator */}
        {agentPositions.map(agent => (
          <div key={agent.name}
               className="absolute flex items-center justify-center w-28 h-16 
                          text-sm font-medium text-white text-center p-1 rounded-lg 
                          bg-gray-600/90 backdrop-blur-md shadow-md z-20"
               style={{ 
                 left: agent.position === 'left' ? agent.x : (agent.position === 'right' ? agent.x - 112 : agent.x - 56),
                 top: agent.position === 'top' ? agent.y : (agent.position === 'bottom' ? agent.y - 64 : agent.y - 32)
               }}>
            {agent.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 
                       bg-black/60 backdrop-blur-md text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-base font-semibold tracking-wide uppercase text-violet-400">
            Outcome Solutions
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Accelerator Services Portfolio
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Explore our portfolio of productized, outcome-driven solutions. First, select an industry. Then, choose a specific solution to see its blueprint and potential ROI.
          </p>
        </div>

        {/* Tier 1: Industries (Step 1) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Step 1: Select an Industry
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industriesData.map(ind => (
              <button 
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-lg shadow-md border-2 text-center 
                           flex flex-col items-center justify-center cursor-pointer 
                           transition-transform duration-300 
                           ${selectedIndustry.id === ind.id 
                              ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                              : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-500/20 mb-3">
                  <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ind.icon} />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm text-white">{ind.name}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Tier 2: Solutions (Step 2) */}
        <div className={`mt-12 transition-opacity duration-500 ${selectedIndustry ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Step 2: Select a Solution
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedIndustry.solutions.map(sol => (
              <button 
                key={sol.id}
                onClick={() => setSelectedSolution(sol)}
                className={`p-4 rounded-lg shadow-md border-2 text-center cursor-pointer 
                           transition-transform duration-300 
                           ${selectedSolution.id === sol.id 
                              ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                              : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
              >
                <h4 className="font-medium text-sm text-white">{sol.name}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Tier 3: Blueprint & ROI (Details) */}
        <div className={`mt-12 transition-all duration-500 transform 
                        ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-lg rounded-lg shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Blueprint Diagram Column */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedSolution.name}: Solution Blueprint
                </h3>
                <div className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-inner 
                                min-h-[20rem] flex items-center justify-center">
                  <BlueprintDiagram blueprint={selectedSolution.blueprint} />
                </div>
              </div>
              {/* Solution Details & ROI Column */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white">
                  {selectedSolution.name}
                </h3>
                <p className="mt-2 text-gray-300">{selectedSolution.description}</p>
                <div className="mt-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-inner text-center">
                  <h4 className="font-semibold text-gray-100">
                    Potential ROI: {selectedSolution.roi.label}
                  </h4>
                  <div className="relative w-40 h-52 mx-auto mt-2">
                    <div className="h-40">
                      <canvas ref={canvasRef} width="160" height="160"></canvas>
                    </div>
                    {/* Center text for percentage - positioned at bottom of semicircle */}
                    <div className="absolute top-32 left-0 right-0 flex items-center justify-center text-4xl font-bold text-violet-400">
                      {selectedSolution.roi.value}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default AcceleratorServicesSection;
