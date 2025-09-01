'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IndustrialAgentsSection = () => {
  // Data for Industrial Agents (domains and their physical AI solutions)
  const domainsData = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.363-.472a6 6 0 00-4.37 0l-2.363.472a2 2 0 00-1.022.547m3.388-3.388l2.364-2.363a2 2 0 00-2.828-2.828L12 8.172l-1.612-1.612a2 2 0 00-2.828 2.828l2.364 2.363',
      solutions: [
        {
          id: 'inspector',
          name: 'Autonomous Factory Inspector',
          description: 'A mobile robot with AI vision roams the factory floor to inspect equipment and products for anomalies, ensuring quality and safety.',
          roi: { label: 'Inspection Coverage', value: 100 },
          blueprint: {
            coordinator: 'Inspection Bot',
            agents: ['Camera Vision', 'Thermal Sensor', 'Anomaly Detector', 'Navigation System']
          }
        },
        {
          id: 'cobot',
          name: 'Collaborative Assembly Cobot',
          description: 'A collaborative robot works alongside humans on assembly tasks, adjusting its actions to maximize safety and efficiency on the line.',
          roi: { label: 'Productivity Increase', value: 20 },
          blueprint: {
            coordinator: 'Cobot Controller',
            agents: ['Sensor Suite', 'Adaptive AI Core', 'Safety Monitor', 'Task Executor']
          }
        }
      ]
    },
    {
      id: 'logistics',
      name: 'Logistics & Warehouse',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      solutions: [
        {
          id: 'picking',
          name: 'Warehouse Picking Robot',
          description: 'Autonomous robots navigate warehouse aisles to pick items for orders, boosting picking speed and accuracy 24/7.',
          roi: { label: 'Picking Speed Increase', value: 50 },
          blueprint: {
            coordinator: 'Warehouse Bot',
            agents: ['Navigation System', 'Vision Picking', 'Order Integration', 'Shelf Scanner']
          }
        },
        {
          id: 'drone',
          name: 'Inventory Drone',
          description: 'Flying drones perform inventory checks by scanning barcodes on high shelves, reducing the need for manual stock counts.',
          roi: { label: 'Stock Count Time Saved', value: 80 },
          blueprint: {
            coordinator: 'Inventory Drone AI',
            agents: ['Flight Control', 'Scanner', 'Mapping System', 'Anomaly Reporter']
          }
        }
      ]
    },
    {
      id: 'field',
      name: 'Field Operations',
      icon: 'M10 20l4-16m4 16l4-16M3 9h18M4 15h16',
      solutions: [
        {
          id: 'inspection',
          name: 'Remote Inspection Drone',
          description: 'Drones with cameras and sensors inspect remote or dangerous sites, sending real-time data and alerts to central systems.',
          roi: { label: 'Safety Improvement', value: 100 },
          blueprint: {
            coordinator: 'Remote Drone AI',
            agents: ['High-Res Camera', 'Lidar Sensor', 'Live Feed AI', 'Fault Detector']
          }
        },
        {
          id: 'arassistant',
          name: 'AR Maintenance Assistant',
          description: 'Field technicians use AR glasses with an AI assistant that recognizes equipment and provides real-time repair guidance and checklists.',
          roi: { label: 'First-Time Fix Rate', value: 60 },
          blueprint: {
            coordinator: 'AR Assistant',
            agents: ['Object Recognition', 'Knowledge Base', 'Step Guide', 'Voice Interface']
          }
        }
      ]
    },
    {
      id: 'infrastructure',
      name: 'Smart Infrastructure',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-3.045A12.02 12.02 0 0112 17.95a12.02 12.02 0 016.682-1.432l5.318 3.045A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-2.382-3.04z',
      solutions: [
        {
          id: 'security',
          name: 'Security Patrol Robot',
          description: 'Autonomous security robots patrol facilities using cameras and sensors to detect intrusions or hazards and alert human guards.',
          roi: { label: 'Coverage Increase', value: 100 },
          blueprint: {
            coordinator: 'Security Bot',
            agents: ['Motion Detection', 'Facial Recognition', 'Alarm System', 'Two-way Comms']
          }
        },
        {
          id: 'traffic',
          name: 'Smart Traffic Light System',
          description: 'AI-driven traffic lights adjust timing based on real-time traffic and emergency vehicles, reducing congestion and commute times.',
          roi: { label: 'Commute Time Reduction', value: 25 },
          blueprint: {
            coordinator: 'Traffic AI Controller',
            agents: ['Sensor Network', 'Signal Optimizer', 'Emergency Override', 'Analytics Dashboard']
          }
        }
      ]
    }
  ];

  // State for selected domain and solution
  const [selectedDomain, setSelectedDomain] = useState(domainsData[0]);
  const [selectedSolution, setSelectedSolution] = useState(domainsData[0].solutions[0]);
  const [contentVisible, setContentVisible] = useState(true);

  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  // Update selectedSolution when selectedDomain changes
  useEffect(() => {
    setSelectedSolution(selectedDomain.solutions[0]);
  }, [selectedDomain]);

  // Animate content and update chart when selectedSolution changes
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

  // Blueprint diagram (same logic as other sections)
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
        {agentPositions.map((agent) => (
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
            Physical AI Solutions
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Industrial Agents Catalogue
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Explore our AI-powered physical solutions. First, select a domain. Then, choose a specific solution to see its blueprint and potential benefits.
          </p>
        </div>

        {/* Tier 1: Domains (Step 1) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Step 1: Select a Domain
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domainsData.map(dom => (
              <button 
                key={dom.id}
                onClick={() => setSelectedDomain(dom)}
                className={`p-4 rounded-lg shadow-md border-2 text-center 
                           flex flex-col items-center justify-center cursor-pointer 
                           transition-transform duration-300 
                           ${selectedDomain.id === dom.id 
                              ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                              : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-500/20 mb-3">
                  <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dom.icon} />
                  </svg>
                </div>
                <h4 className="font-semibold text-sm text-white">{dom.name}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Tier 2: Solutions (Step 2) */}
        <div className={`mt-12 transition-opacity duration-500 ${selectedDomain ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Step 2: Select a Solution
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedDomain.solutions.map(sol => (
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

        {/* Tier 3: Blueprint & Benefit (Details) */}
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
              {/* Solution Details & Benefit Column */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white">
                  {selectedSolution.name}
                </h3>
                <p className="mt-2 text-gray-300">{selectedSolution.description}</p>
                <div className="mt-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-inner text-center">
                  <h4 className="font-semibold text-gray-100">
                    Potential Benefit: {selectedSolution.roi.label}
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

export default IndustrialAgentsSection;
