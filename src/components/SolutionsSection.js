'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SolutionsSection = () => {
  // Core processes data
  const coreProcessesData = [
    {
      id: 'o2c',
      name: 'Order-to-Cash (O2C)',
      icon: 'M3 3v18h18V3H3zm16 16H5V5h14v14zm-8-8h6v2h-6v-2zm0 4h6v2h-6v-2z',
      description: 'Streamline the entire order-to-cash process with intelligent automation',
      automationOpportunities: [
        { id: 'order_entry', name: 'Order Entry Automation' },
        { id: 'credit_check', name: 'Credit Check Processing' },
        { id: 'order_fulfillment', name: 'Order Fulfillment' },
        { id: 'invoicing', name: 'Automated Invoicing' },
        { id: 'payment_collection', name: 'Payment Collection' },
        { id: 'reconciliation', name: 'Account Reconciliation' }
      ]
    },
    {
      id: 'p2p',
      name: 'Procure-to-Pay (P2P)',
      icon: 'M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z',
      description: 'Automate procurement workflows from requisition to payment',
      automationOpportunities: [
        { id: 'requisition', name: 'Purchase Requisition' },
        { id: 'vendor_selection', name: 'Vendor Selection' },
        { id: 'purchase_order', name: 'Purchase Order Creation' },
        { id: 'goods_receipt', name: 'Goods Receipt Processing' },
        { id: 'invoice_processing', name: 'Invoice Processing' },
        { id: 'payment', name: 'Payment Processing' }
      ]
    },
    {
      id: 'h2r',
      name: 'Hire-to-Retire (H2R)',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      description: 'Complete HR lifecycle management from recruitment to retirement',
      automationOpportunities: [
        { id: 'recruitment', name: 'Recruitment Process' },
        { id: 'onboarding', name: 'Employee Onboarding' },
        { id: 'payroll', name: 'Payroll Management' },
        { id: 'performance_mgmt', name: 'Performance Management' },
        { id: 'training', name: 'Training & Development' },
        { id: 'offboarding', name: 'Employee Offboarding' }
      ]
    },
    {
      id: 'r2r',
      name: 'Record-to-Report (R2R)',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      description: 'Automate financial record keeping and reporting processes',
      automationOpportunities: [
        { id: 'journal_entries', name: 'Journal Entry Processing' },
        { id: 'ledger_maintenance', name: 'Ledger Maintenance' },
        { id: 'reconciliations', name: 'Account Reconciliations' },
        { id: 'financial_close', name: 'Financial Close Process' },
        { id: 'reporting', name: 'Financial Reporting' },
        { id: 'compliance', name: 'Compliance Monitoring' }
      ]
    },
    {
      id: 'customer_acquisition',
      name: 'Customer Acquisition',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      description: 'AI-driven customer acquisition and lead generation processes',
      automationOpportunities: [
        { id: 'market_research', name: 'Market Research' },
        { id: 'campaign_execution', name: 'Campaign Execution' },
        { id: 'lead_generation', name: 'Lead Generation' },
        { id: 'crm_updates', name: 'CRM Management' },
        { id: 'sales_conversion', name: 'Sales Conversion' }
      ]
    }
  ];

  // Data structure for industries (updated to match user's requirements)
  const functionsData = [
    {
      id: 'insurance',
      name: 'Insurance',
      icon: 'M12 2l4 4h6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6h6l4-4z',
      useCases: [
        {
          id: 'vehicle_claim',
          name: 'Vehicle Insurance Claim',
          description: 'Agents manage accident report intake, damage photo analysis, repair estimation, and fraud checks, ensuring faster claim settlements and reduced disputes.',
          roi: { label: 'Settlement Time Reduction', value: 60 },
          blueprint: {
            coordinator: 'Auto Claim Supervisor',
            agents: ['Damage Analyzer', 'Repair Estimator', 'Fraud Detector', 'Settlement Agent']
          },
          demoVideo: {
            title: 'Vehicle Claim Processing Demo',
            thumbnail: '/api/placeholder/400/225',
            description: 'Watch how AI agents process a vehicle insurance claim from accident report to settlement in under 2 minutes.'
          },
          liveDemo: {
            url: 'https://insurance-frontend-agentic-c4gqbafzgxf9egc0.canadacentral-01.azurewebsites.net/',
            label: 'Try Vehicle Claim Demo'
          }
        },
        {
          id: 'health_claim',
          name: 'Health Insurance Claim',
          description: 'Agents automate claim validation, policy checks, medical bill extraction, and approval workflows, reducing turnaround times for patients and providers.',
          roi: { label: 'Claim Processing Speed', value: 70 },
          blueprint: {
            coordinator: 'Health Claim Coordinator',
            agents: ['Medical Bill Extractor', 'Policy Validator', 'Claim Approver', 'Exception Handler']
          },
          demoVideo: {
            title: 'Health Insurance Automation Demo',
            thumbnail: '/api/placeholder/400/225',
            description: 'See how medical bills are processed automatically with policy validation and instant approvals.'
          },
          liveDemo: {
            url: '/demos/health-claim',
            label: 'Try Health Claim Demo'
          }
        },
        {
          id: 'property_claim',
          name: 'Property Insurance Claim',
          description: 'Agents evaluate incident reports, validate ownership documents, estimate loss, and recommend payouts for faster property claim resolution.',
          roi: { label: 'Manual Effort Reduction', value: 85 },
          blueprint: {
            coordinator: 'Property Claim Manager',
            agents: ['Document Verifier', 'Loss Assessor', 'Policy Checker', 'Payout Recommender']
          },
          demoVideo: {
            title: 'Property Damage Assessment Demo',
            thumbnail: '/api/placeholder/400/225',
            description: 'Experience how AI agents evaluate property damage reports and calculate payouts automatically.'
          },
          liveDemo: {
            url: '/demos/property-claim',
            label: 'Try Property Claim Demo'
          }
        }
      ]
    },
    {
      id: 'banking_financial',
      name: 'Banking & Financial Services',
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      useCases: [
        {
          id: 'loan_processing',
          name: 'Loan Processing',
          description: 'Automated loan application processing, credit assessment, and approval workflows for financial institutions.',
          roi: { label: 'Processing Time Reduction', value: 70 },
          blueprint: {
            coordinator: 'Loan Manager',
            agents: ['Application Processor', 'Credit Analyzer', 'Risk Assessor', 'Approval Agent']
          }
        }
      ]
    },
    {
      id: 'energy_utilities',
      name: 'Energy & Utilities',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      useCases: [
        {
          id: 'grid_management',
          name: 'Grid Management',
          description: 'Automated energy grid monitoring, load balancing, and predictive maintenance for energy systems.',
          roi: { label: 'Grid Efficiency', value: 45 },
          blueprint: {
            coordinator: 'Grid Manager',
            agents: ['Load Monitor', 'Balance Controller', 'Maintenance Predictor', 'Outage Manager']
          }
        }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7z',
      useCases: [
        {
          id: 'patient_billing',
          name: 'Healthcare Billing Automation',
          description: 'Automated medical billing, insurance claims processing, and payment reconciliation for healthcare providers.',
          roi: { label: 'Billing Accuracy', value: 90 },
          blueprint: {
            coordinator: 'Billing Manager',
            agents: ['Claims Processor', 'Insurance Validator', 'Payment Tracker', 'Reconciliation Agent']
          }
        }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.363-.472a6 6 0 00-4.37 0l-2.363.472a2 2 0 00-1.022.547m3.388-3.388l2.364-2.363a2 2 0 00-2.828-2.828L12 8.172l-1.612-1.612a2 2 0 00-2.828 2.828l2.364 2.363',
      useCases: [
        {
          id: 'quality_control',
          name: 'Quality Control Automation',
          description: 'AI agents automate quality inspections, defect detection, and compliance reporting across manufacturing processes.',
          roi: { label: 'Defect Reduction', value: 75 },
          blueprint: {
            coordinator: 'Quality Manager',
            agents: ['Inspection Agent', 'Defect Detector', 'Compliance Monitor', 'Report Generator']
          }
        }
      ]
    },
    {
      id: 'retail_consumer',
      name: 'Retail & Consumer Goods',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L2 21m5-8a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z',
      useCases: [
        {
          id: 'inventory_management',
          name: 'Inventory Management',
          description: 'Automated inventory tracking, demand forecasting, and stock replenishment across retail operations.',
          roi: { label: 'Inventory Optimization', value: 65 },
          blueprint: {
            coordinator: 'Inventory Manager',
            agents: ['Stock Monitor', 'Demand Forecaster', 'Replenishment Agent', 'Analytics Reporter']
          }
        }
      ]
    },
    {
      id: 'telecom_media',
      name: 'Telecom & Media',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      useCases: [
        {
          id: 'network_monitoring',
          name: 'Network Monitoring',
          description: 'Automated network performance monitoring, fault detection, and service optimization for telecom operations.',
          roi: { label: 'Network Uptime', value: 95 },
          blueprint: {
            coordinator: 'Network Manager',
            agents: ['Performance Monitor', 'Fault Detector', 'Service Optimizer', 'Alert Manager']
          }
        }
      ]
    }
  ];

  // State for the two-step navigation system
  const [currentView, setCurrentView] = useState('initial'); // 'initial', 'industries', 'core_processes'
  const [selectedCoreProcess, setSelectedCoreProcess] = useState(null);
  
  // State for selected function and use-case. Initialize with the first function & its first use-case.
  const [selectedFunction, setSelectedFunction] = useState(functionsData[0]);
  const [selectedUseCase, setSelectedUseCase] = useState(functionsData[0].useCases[0]);
  const [contentVisible, setContentVisible] = useState(true);  // controls content fade-in

  // Refs for the ROI chart
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  // When selectedFunction changes, auto-select its first use-case
  useEffect(() => {
    setSelectedUseCase(selectedFunction.useCases[0]);
  }, [selectedFunction]);

  // Animate content appearance whenever selected use-case changes
  useEffect(() => {
    // Trigger fade-out
    setContentVisible(false);
    // Small timeout to allow fade-out (if any) then fade-in with new content
    const timer = setTimeout(() => {
      setContentVisible(true);
      // Re-draw ROI chart for the new use-case
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        // Destroy previous chart instance if exists
        if (chartRef.current) chartRef.current.destroy();
        // Create new doughnut chart for ROI
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [selectedUseCase.roi.value, 100 - selectedUseCase.roi.value],
              backgroundColor: ['#7c3aed', '#e5e7eb'],  // violet for ROI, light gray for remainder
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
  }, [selectedUseCase]);

  // Blueprint diagram positioning – compute agent positions around coordinator
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
            AI Nerve Centre Agent Hub
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Agentic Automation Catalogue
          </p>
          <p className="mt-4 text-xl text-gray-300">
            {currentView === 'initial' && 'Choose your exploration path to discover automation solutions.'}
            {currentView === 'industries' && 'Explore our catalogue of productized, outcome-driven solutions. First, select a core business function. Then, choose a specific automation opportunity to see its blueprint and potential ROI.'}
            {currentView === 'core_processes' && 'Select a core business process to explore automation opportunities.'}
          </p>
        </div>

        {/* Initial View - Choose between Industries and Core Processes */}
        {currentView === 'initial' && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center text-white mb-6">
              Choose Your Path
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <button 
                onClick={() => setCurrentView('industries')}
                className="p-8 rounded-lg shadow-md border-2 border-transparent bg-white/10 
                         hover:border-violet-500 hover:bg-violet-500/20 hover:-translate-y-1 
                         hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-violet-500/20 mb-4 mx-auto">
                  <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-xl text-white mb-2">Industries</h4>
                <p className="text-gray-300">
                  Browse by industry sector to find solutions tailored to your domain
                </p>
              </button>
              
              <button 
                onClick={() => setCurrentView('core_processes')}
                className="p-8 rounded-lg shadow-md border-2 border-transparent bg-white/10 
                         hover:border-violet-500 hover:bg-violet-500/20 hover:-translate-y-1 
                         hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-violet-500/20 mb-4 mx-auto">
                  <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-xl text-white mb-2">Core Processes</h4>
                <p className="text-gray-300">
                  Explore by business process to find cross-industry automation solutions
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Industries View - Original Business Functions */}
        {currentView === 'industries' && (
          <>
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  Step 1: Select a Business Function
                </h3>
                <button 
                  onClick={() => setCurrentView('initial')}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  ← Back to Path Selection
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {functionsData.map(func => (
                  <button 
                    key={func.id}
                    onClick={() => setSelectedFunction(func)}
                    className={`p-4 rounded-lg shadow-md border-2 text-center 
                               flex flex-col items-center justify-center cursor-pointer 
                               transition-transform duration-300 
                               ${selectedFunction.id === func.id 
                                  ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                                  : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-500/20 mb-3">
                      <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={func.icon} />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-sm text-white">{func.name}</h4>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Core Processes View */}
        {currentView === 'core_processes' && (
          <>
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  Step 1: Select a Core Process
                </h3>
                <button 
                  onClick={() => setCurrentView('initial')}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  ← Back to Path Selection
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {coreProcessesData.map(process => (
                  <button 
                    key={process.id}
                    onClick={() => setSelectedCoreProcess(process)}
                    className={`p-4 rounded-lg shadow-md border-2 text-center 
                               flex flex-col items-center justify-center cursor-pointer 
                               transition-transform duration-300 
                               ${selectedCoreProcess?.id === process.id 
                                  ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                                  : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-500/20 mb-3">
                      <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-sm text-white">{process.name}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Automation Opportunities (visible once a core process is selected) */}
            {selectedCoreProcess && (
              <div className="mt-12 transition-opacity duration-500 opacity-100">
                <h3 className="text-xl font-bold text-center text-white mb-6">
                  Step 2: Select an Automation Opportunity
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedCoreProcess.automationOpportunities.map(opportunity => (
                    <button 
                      key={opportunity.id}
                      className="p-4 rounded-lg shadow-md border-2 text-center cursor-pointer 
                               transition-transform duration-300 border-transparent bg-white/10 
                               hover:border-violet-500 hover:bg-violet-500/20 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h4 className="font-medium text-sm text-white">{opportunity.name}</h4>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Tier 2: Use Cases (visible once a function is selected and in industries view) */}
        {currentView === 'industries' && (
          <div className={`mt-12 transition-opacity duration-500 ${selectedFunction ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-center text-white mb-6">
              Step 2: Select an Automation Opportunity
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedFunction.useCases.map(uc => (
                <button 
                  key={uc.id}
                  onClick={() => setSelectedUseCase(uc)}
                  className={`p-4 rounded-lg shadow-md border-2 text-center cursor-pointer 
                             transition-transform duration-300 
                             ${selectedUseCase.id === uc.id 
                                ? 'border-violet-500 bg-violet-500/20 -translate-y-1 shadow-lg' 
                                : 'border-transparent bg-white/10 hover:-translate-y-1 hover:shadow-lg'}`}
                >
                  <h4 className="font-medium text-sm text-white">{uc.name}</h4>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tier 3: Blueprint & ROI content (visible once a use-case is selected and in industries view) */}
        {currentView === 'industries' && (
          <div className={`mt-12 transition-all duration-500 transform 
                          ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-lg rounded-lg shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Blueprint Diagram Column */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedUseCase.name}: Automation Blueprint
                </h3>
                <div className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-inner 
                                min-h-[20rem] flex items-center justify-center">
                  {/* Render the coordinator and agents diagram */}
                  <BlueprintDiagram blueprint={selectedUseCase.blueprint} />
                </div>
              </div>
              
              {/* Use-case Details & ROI Column */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white">
                  {selectedUseCase.name}
                </h3>
                <p className="mt-2 text-gray-300">{selectedUseCase.description}</p>
                <div className="mt-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-inner text-center">
                  <h4 className="font-semibold text-gray-100">
                    Potential ROI: {selectedUseCase.roi.label}
                  </h4>
                  <div className="relative w-40 h-52 mx-auto mt-2">
                    <div className="h-40">
                      <canvas ref={canvasRef} width="160" height="160"></canvas>
                    </div>
                    {/* Center text for percentage - positioned at bottom of semicircle */}
                    <div className="absolute top-32 left-0 right-0 flex items-center justify-center text-4xl font-bold text-violet-400">
                      {selectedUseCase.roi.value}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Video and Live Demo Cards - Below Blueprint and ROI */}
            {selectedUseCase.demoVideo && (
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {/* Demo Video Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-inner overflow-hidden">
                  <div className="relative">
                    <img 
                      src={selectedUseCase.demoVideo.thumbnail} 
                      alt={selectedUseCase.demoVideo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button className="w-16 h-16 rounded-full bg-violet-600/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-violet-600 transition-colors duration-300">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-white mb-2 text-lg">
                      {selectedUseCase.demoVideo.title}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {selectedUseCase.demoVideo.description}
                    </p>
                  </div>
                </div>

                {/* Live Demo Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-inner p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-3 text-lg">
                      Try It Yourself
                    </h4>
                    <p className="text-sm text-gray-300 mb-6">
                      Experience the power of AI agents with our interactive demo. No signup required.
                    </p>
                    <button 
                      onClick={() => window.open(selectedUseCase.liveDemo.url, '_blank')}
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {selectedUseCase.liveDemo.label}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div> 
    </section>
  );
};

export default SolutionsSection;
