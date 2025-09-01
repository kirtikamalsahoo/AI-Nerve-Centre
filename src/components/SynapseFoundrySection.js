'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SynapseFoundrySection = () => {
  // Data structure for Foundry modules and features
  const modulesData = [
    {
      id: 'nocode',
      name: 'No-Code Studio',
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
      features: [
        {
          id: 'workflow',
          name: 'Visual Workflow Builder',
          description: 'Design complex agent behaviors with a drag-and-drop interface, enabling rapid prototyping without writing code.',
          roi: { label: 'Development Speed Increase', value: 50 },
          blueprint: {
            coordinator: 'Workflow Canvas',
            agents: ['Drag & Drop Blocks', 'AI Skill Library', 'Data Connector', 'Debug Console']
          }
        },
        {
          id: 'templates',
          name: 'Template Gallery',
          description: 'Start quickly with pre-built agent templates for common use cases, which you can customize to your needs.',
          roi: { label: 'Setup Time Reduction', value: 70 },
          blueprint: {
            coordinator: 'Template Library',
            agents: ['Pre-built Agents', 'Domain Templates', 'Best Practice Guides', 'One-click Deploy']
          }
        }
      ]
    },
    {
      id: 'procode',
      name: 'Pro-Code SDK',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      features: [
        {
          id: 'sdk',
          name: 'Extensible API & SDK',
          description: 'A robust SDK and API allows developers to extend agent capabilities, integrate custom models, and tailor workflows programmatically.',
          roi: { label: 'Customization Flexibility', value: 100 },
          blueprint: {
            coordinator: 'Developer SDK',
            agents: ['Language APIs', 'Plugin System', 'Custom Tools Support', 'Documentation Portal']
          }
        },
        {
          id: 'cli',
          name: 'Command-Line Tools',
          description: 'CLI tools for integration with CI/CD pipelines, enabling automated testing, deployment, and version control of agents.',
          roi: { label: 'CI/CD Integration', value: 90 },
          blueprint: {
            coordinator: 'CLI Tools',
            agents: ['Agent CLI', 'Continuous Integration', 'Scriptable Deploys', 'Version Control']
          }
        }
      ]
    },
    {
      id: 'orchestration',
      name: 'Orchestration & Monitoring',
      icon: 'M10 20l4-16m4 16l4-16M3 9h18M4 15h16',
      features: [
        {
          id: 'scheduler',
          name: 'Agent Scheduler & Orchestrator',
          description: 'Coordinate multiple agents with a scheduling and orchestration engine that ensures timely execution and resource allocation.',
          roi: { label: 'Throughput Increase', value: 40 },
          blueprint: {
            coordinator: 'Orchestration Engine',
            agents: ['Task Scheduler', 'Resource Manager', 'Dependency Handler', 'Retry Mechanism']
          }
        },
        {
          id: 'monitoring',
          name: 'Real-Time Monitoring Dashboard',
          description: 'Monitor agent performance in real-time with dashboards showing key metrics, allowing prompt intervention if needed.',
          roi: { label: 'Issue Detection Speed', value: 80 },
          blueprint: {
            coordinator: 'Monitoring Dashboard',
            agents: ['Live Metrics', 'Alert System', 'Log Stream', 'Health Checker']
          }
        }
      ]
    },
    {
      id: 'governance',
      name: 'Governance & Compliance',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-3.045A12.02 12.02 0 0112 17.95a12.02 12.02 0 016.682-1.432l5.318 3.045A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-2.382-3.04z',
      features: [
        {
          id: 'rbac',
          name: 'Role-Based Access Control',
          description: 'Fine-grained access controls and permissions to ensure that agents and data are only accessible by authorized personnel.',
          roi: { label: 'Unauthorized Access Reduction', value: 100 },
          blueprint: {
            coordinator: 'RBAC System',
            agents: ['User Roles', 'Permission Matrix', 'Audit Logs', 'Access Requests']
          }
        },
        {
          id: 'audit',
          name: 'Audit Trail & Reporting',
          description: 'Every agent action is logged, providing a full audit trail. Generate compliance reports to satisfy regulatory requirements.',
          roi: { label: 'Audit Prep Time Reduction', value: 50 },
          blueprint: {
            coordinator: 'Audit Trail',
            agents: ['Activity Logs', 'Anomaly Detection', 'Compliance Reports', 'Data Retention']
          }
        }
      ]
    }
  ];

  // State for selected module and feature
  const [selectedModule, setSelectedModule] = useState(modulesData[0]);
  const [selectedFeature, setSelectedFeature] = useState(modulesData[0].features[0]);
  const [contentVisible, setContentVisible] = useState(true);

  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  // When selectedModule changes, reset to its first feature
  useEffect(() => {
    setSelectedFeature(selectedModule.features[0]);
  }, [selectedModule]);

  // Animate content appearance and update chart whenever selectedFeature changes
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => {
      setContentVisible(true);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        // Destroy previous chart instance if exists
        if (chartRef.current) chartRef.current.destroy();
        // Create new half-doughnut chart for ROI/benefit
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [selectedFeature.roi.value, 100 - selectedFeature.roi.value],
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
  }, [selectedFeature]);

  // BlueprintDiagram component to visualize coordinator & agents
  const BlueprintDiagram = ({ blueprint }) => {
    const containerRef = useRef(null);
    const [agentPositions, setAgentPositions] = useState([]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
      const radius = 120;
      const centerX = container.clientWidth / 2;
      const centerY = container.clientHeight / 2;
      // Calculate positions for each agent around the coordinator
      const positions = blueprint.agents.map((agent, idx) => {
        const angle = (idx / blueprint.agents.length) * 2 * Math.PI - Math.PI / 2;
        return {
          name: agent,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius
        };
      });
      setAgentPositions(positions);
    }, [blueprint]);

    return (
      <div ref={containerRef} className="relative w-full h-full">
        {/* Coordinator in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex items-center justify-center w-32 h-32 rounded-full 
                        bg-violet-600 text-white text-center p-2 font-bold shadow-lg">
          {blueprint.coordinator}
        </div>
        {/* Agents around coordinator */}
        {agentPositions.map(agent => (
          <div key={agent.name}
               className="absolute flex items-center justify-center w-28 h-16 
                          text-sm font-medium text-white text-center p-1 rounded-lg 
                          bg-white/20 backdrop-blur-md shadow-md"
               style={{ left: agent.x - 56, top: agent.y - 32 }}>
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




        {/* Tier 3: Agentic Workbench Card (Details) */}
        <div className={`mt-12 transition-all duration-500 transform 
                        ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-lg rounded-lg shadow-xl">
            <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
              {/* Agentic Workbench Card */}
              <div className="order-1">
                <a 
                  href="https://agentic-workbench-uat.azurewebsites.net/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transform transition duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 p-1 rounded-xl shadow-lg hover:shadow-violet-500/30">
                    <div className="bg-[#1A1025]/90 backdrop-blur-md rounded-lg p-8 flex flex-col items-center text-center">
                      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-violet-600/30 mb-4">
                        <svg className="h-10 w-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Agentic Workbench
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        Access our powerful environment for building, testing, and deploying AI agents with an intuitive interface and enterprise-grade capabilities.
                      </p>
                      <div className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all duration-300">
                        <span>Launch Workbench</span>
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default SynapseFoundrySection;
