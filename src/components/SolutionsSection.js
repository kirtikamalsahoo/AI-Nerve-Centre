'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SolutionsSection = () => {
  // Data structure for functions and use cases (extracted from the provided HTML content)
  const functionsData = [
    {
  id: 'insurance',
  name: 'Insurance',
  icon: 'M12 2l4 4h6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6h6l4-4z',
  useCases: [
    {
      id: 'health_claim',
      name: 'Health Insurance Claim',
      description: 'Agents automate claim validation, policy checks, medical bill extraction, and approval workflows, reducing turnaround times for patients and providers.',
      roi: { label: 'Claim Processing Speed', value: 70 },
      blueprint: {
        coordinator: 'Health Claim Coordinator',
        agents: ['Medical Bill Extractor', 'Policy Validator', 'Claim Approver', 'Exception Handler']
      }
    },
    {
      id: 'vehicle_claim',
      name: 'Vehicle Insurance Claim',
      description: 'Agents manage accident report intake, damage photo analysis, repair estimation, and fraud checks, ensuring faster claim settlements and reduced disputes.',
      roi: { label: 'Settlement Time Reduction', value: 60 },
      blueprint: {
        coordinator: 'Auto Claim Supervisor',
        agents: ['Damage Analyzer', 'Repair Estimator', 'Fraud Detector', 'Settlement Agent']
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
      id: 'patient_care',
      name: 'Autonomous Patient Care',
      description: 'Agents monitor patient vitals, flag anomalies, and alert doctors or caregivers in real-time for proactive healthcare interventions.',
      roi: { label: 'Emergency Response Speed', value: 65 },
      blueprint: {
        coordinator: 'Care Coordinator',
        agents: ['Vitals Monitor', 'Anomaly Detector', 'Alert Agent', 'Care Escalator']
      }
    },
    {
      id: 'medical_records',
      name: 'Smart Medical Records',
      description: 'Agents automatically extract, update, and verify patient EHRs, ensuring compliance and accuracy across healthcare systems.',
      roi: { label: 'Record Accuracy Improvement', value: 85 },
      blueprint: {
        coordinator: 'Records Supervisor',
        agents: ['Data Extractor', 'Compliance Checker', 'Update Agent', 'Audit Reporter']
      }
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy Automation',
      description: 'Agents handle prescription validation, drug interaction checks, and automatic inventory restocking for seamless pharmacy operations.',
      roi: { label: 'Prescription Error Reduction', value: 75 },
      blueprint: {
        coordinator: 'Pharmacy Manager',
        agents: ['Prescription Validator', 'Interaction Checker', 'Inventory Monitor', 'Restocking Agent']
      }
    }
  ]
}
,
{
  id: 'warehouse',
  name: 'Warehouse Management',
  icon: 'M4 4h16v16H4V4zm8 2v12m-6-6h12',
  useCases: [
    {
      id: 'inventory_tracking',
      name: 'Intelligent Inventory Tracking',
      description: 'Agents track stock levels in real-time, predict shortages, and trigger replenishment orders automatically.',
      roi: { label: 'Stockout Reduction', value: 80 },
      blueprint: {
        coordinator: 'Inventory Coordinator',
        agents: ['Stock Monitor', 'Demand Forecaster', 'Replenishment Agent', 'Exception Reporter']
      }
    },
    {
      id: 'order_fulfillment',
      name: 'Autonomous Order Fulfillment',
      description: 'Agents pick, pack, and route orders using AI-driven optimization, reducing delays and minimizing errors.',
      roi: { label: 'Fulfillment Accuracy', value: 70 },
      blueprint: {
        coordinator: 'Fulfillment Supervisor',
        agents: ['Picking Agent', 'Packing Optimizer', 'Routing Planner', 'Error Handler']
      }
    },
    {
      id: 'asset_maintenance',
      name: 'Predictive Asset Maintenance',
      description: 'Agents monitor equipment health, predict failures, and schedule preventive maintenance to avoid downtime.',
      roi: { label: 'Downtime Reduction', value: 60 },
      blueprint: {
        coordinator: 'Maintenance Manager',
        agents: ['Sensor Monitor', 'Failure Predictor', 'Maintenance Scheduler', 'Repair Notifier']
      }
    }
  ]
}
,
    {
      id: 'finance',
      name: 'Finance & Accounting',
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      useCases: [
        {
          id: 'otc',
          name: 'Order-to-Cash',
          description: 'Agents autonomously manage invoice disputes, match accounts receivable, and escalate exceptions, dramatically speeding up cash flow cycles.',
          roi: { label: 'Cycle Time Reduction', value: 40 },
          blueprint: {
            coordinator: 'O2C Coordinator',
            agents: ['Invoice Validator', 'Dispute Resolver', 'AR Matcher', 'Collections Agent']
          }
        },
        {
          id: 'reconciliation',
          name: 'Autonomous Reconciliation',
          description: 'Automate ledger matching and inter-company reconciliations in minutes instead of days, with agents handling the matching and humans managing only the exceptions.',
          roi: { label: 'Manual Effort Reduction', value: 95 },
          blueprint: {
            coordinator: 'Reconciliation Supervisor',
            agents: ['Data Extractor', 'Matching Engine', 'Exception Handler', 'Reporting Agent']
          }
        },
        {
          id: 'forecasting',
          name: 'Dynamic Forecasting',
          description: 'Agents continuously pull data from ERPs, banks, and market feeds to provide real-time cash forecasts, predict shortfalls, and suggest optimal fund allocation.',
          roi: { label: 'Forecast Accuracy', value: 30 },
          blueprint: {
            coordinator: 'Treasury Analyst',
            agents: ['Market Data Agent', 'ERP Connector', 'Forecasting Modeler', 'Alerting Agent']
          }
        },
        {
          id: 'fraud',
          name: 'Continuous Fraud Detection',
          description: 'A team of agents monitors transactions 24/7, using advanced analytics to flag anomalies and suspicious patterns far more effectively than rule-based systems.',
          roi: { label: 'Fraud Loss Reduction', value: 20 },
          blueprint: {
            coordinator: 'Risk Management Lead',
            agents: ['Transaction Monitor', 'Pattern Detector', 'Case Creator', 'Blocking Agent']
          }
        }
      ]
    },
    {
      id: 'hr',
      name: 'Human Resources',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      useCases: [
        {
          id: 'recruiting',
          name: 'Full-Cycle Recruiting',
          description: 'Agents automate the entire recruitment workflow, from sourcing and screening candidates to scheduling interviews and initiating hiring processes.',
          roi: { label: 'Time-to-Hire Reduction', value: 50 },
          blueprint: {
            coordinator: 'Hiring Manager Agent',
            agents: ['Candidate Sourcer', 'Resume Screener', 'Interview Scheduler', 'Offer Drafter']
          }
        },
        {
          id: 'onboarding',
          name: 'Automated Onboarding',
          description: 'Ensure a seamless day-one experience by having agents automatically set up new hire accounts, assign training, and provision necessary resources.',
          roi: { label: 'Admin Time Saved', value: 90 },
          blueprint: {
            coordinator: 'Onboarding Orchestrator',
            agents: ['IT Provisioner', 'HR Policy Agent', 'Training Scheduler', 'Welcome Agent']
          }
        },
        {
          id: 'payroll',
          name: 'Intelligent Payroll',
          description: 'Agents auto-adjust calculations for tax and overtime, detect discrepancies before pay runs, and handle routine payroll inquiries autonomously.',
          roi: { label: 'Payroll Error Reduction', value: 80 },
          blueprint: {
            coordinator: 'Payroll Supervisor',
            agents: ['Time-sheet Validator', 'Tax Calculator', 'Discrepancy Detector', 'Query Responder']
          }
        },
        {
          id: 'service',
          name: 'Proactive Employee Service',
          description: 'Go beyond simple chatbots. Agents proactively resolve common inquiries, escalate complex cases with full context, and free up HR staff for strategic work.',
          roi: { label: 'HR Ticket Deflection', value: 60 },
          blueprint: {
            coordinator: 'HR Service Desk',
            agents: ['Policy Bot', 'Leave Request Agent', 'Benefits Advisor', 'Escalation Agent']
          }
        }
      ]
    },
    {
      id: 'supplychain',
      name: 'Supply Chain',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.363-.472a6 6 0 00-4.37 0l-2.363.472a2 2 0 00-1.022.547m3.388-3.388l2.364-2.363a2 2 0 00-2.828-2.828L12 8.172l-1.612-1.612a2 2 0 00-2.828 2.828l2.364 2.363',
      useCases: [
        {
          id: 'forecasting_sc',
          name: 'Continuous Demand Forecasting',
          description: 'Agents analyze live sales data, market trends, and external signals to continuously update demand forecasts, making planning proactive instead of reactive.',
          roi: { label: 'Stockout Reduction', value: 35 },
          blueprint: {
            coordinator: 'Planning Supervisor',
            agents: ['Demand Sensing', 'Market Trend Analyzer', 'Inventory Monitor', 'Replenishment Agent']
          }
        },
        {
          id: 'logistics',
          name: 'Dynamic Logistics Planning',
          description: 'Automate logistics by having agents re-route shipments in real-time to avoid disruptions, optimize for cost and delivery time, and coordinate with carriers.',
          roi: { label: 'Logistics Cost Savings', value: 15 },
          blueprint: {
            coordinator: 'Logistics Orchestrator',
            agents: ['Route Optimizer', 'Disruption Monitor', 'Carrier Booker', 'Tracking Agent']
          }
        },
        {
          id: 'procurement',
          name: 'Automated Procurement',
          description: 'Agents can identify optimal suppliers, generate and send RFPs, evaluate bids against complex criteria, and manage contracts to drive savings.',
          roi: { label: 'Procurement Cycle Time', value: 45 },
          blueprint: {
            coordinator: 'Procurement Lead',
            agents: ['Supplier Scout', 'RFP Generator', 'Bid Analyzer', 'Contract Manager']
          }
        }
      ]
    },
    {
      id: 'support',
      name: 'Customer Service',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      useCases: [
        {
          id: 'omnichannel',
          name: 'Autonomous Omni-Channel Support',
          description: 'Deploy agents that can fully handle routine customer queries via chat, voice, and email, and complete transactions on behalf of users 24/7.',
          roi: { label: 'Service Cost Reduction', value: 10 },
          blueprint: {
            coordinator: 'Customer Support Hub',
            agents: ['Query Classifier', 'Resolution Bot', 'Transaction Agent', 'Human Handoff']
          }
        },
        {
          id: 'summarization',
          name: 'Case Summarization & Analysis',
          description: 'Agents instantly summarize long case histories for human agents, providing context for faster resolution. They also perform post-case analysis and sentiment tagging.',
          roi: { label: 'Avg. Handle Time Reduction', value: 25 },
          blueprint: {
            coordinator: 'Agent Assist',
            agents: ['Case Summarizer', 'Sentiment Analyzer', 'Next-Best-Action', 'Knowledge Agent']
          }
        }
      ]
    },
    {
      id: 'sales',
      name: 'Sales & Marketing',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      useCases: [
        {
          id: 'leadgen',
          name: 'Automated Lead Nurturing',
          description: 'Agents engage and qualify leads 24/7, automating outreach, scheduling demos, and updating the CRM with conversational insights to free up sales teams.',
          roi: { label: 'Sales Productivity Uplift', value: 14 },
          blueprint: {
            coordinator: 'Sales Development Rep',
            agents: ['Lead Qualifier', 'Outreach Agent', 'Demo Scheduler', 'CRM Updater']
          }
        },
        {
          id: 'campaigns',
          name: 'Agent-Driven Marketing Campaigns',
          description: 'Let agents plan and execute campaigns by analyzing market trends, drafting personalized content and ad copy, and optimizing spend based on real-time results.',
          roi: { label: 'Campaign ROI Uplift', value: 20 },
          blueprint: {
            coordinator: 'Marketing Manager',
            agents: ['Trend Analyzer', 'Content Creator', 'Ad Optimizer', 'Performance Reporter']
          }
        }
      ]
    },
    // {
    //   id: 'itops',
    //   name: 'IT Ops & DevOps',
    //   icon: 'M10 20l4-16m4 16l4-16M3 9h18M4 15h16',
    //   useCases: [
    //     {
    //       id: 'servicemgmt',
    //       name: 'Self-Healing IT Service Mgmt',
    //       description: 'Agents go beyond ticketing to autonomously resolve routine IT incidents, diagnose issues, generate resolution plans, and even push fixes without human intervention.',
    //       roi: { label: 'L1 Ticket Automation', value: 75 },
    //       blueprint: {
    //         coordinator: 'ITSM Supervisor',
    //         agents: ['Incident Diagnoser', 'Remediation Planner', 'Script Executor', 'Knowledge Base Writer']
    //       }
    //     },
    //     {
    //       id: 'cloudops',
    //       name: 'Autonomous Cloud Operations',
    //       description: 'Agents manage cloud infrastructure by monitoring performance, optimizing resource allocation for cost, managing deployments, and ensuring security compliance.',
    //       roi: { label: 'Cloud Spend Reduction', value: 18 },
    //       blueprint: {
    //         coordinator: 'Cloud Ops Lead',
    //         agents: ['Cost Optimizer', 'Security Scanner', 'CI/CD Agent', 'Performance Monitor']
    //       }
    //     }
    //   ]
    // },
    {
      id: 'compliance',
      name: 'Compliance & Risk',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-3.045A12.02 12.02 0 0112 17.95a12.02 12.02 0 016.682-1.432l5.318 3.045A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-2.382-3.04z',
      useCases: [
        {
          id: 'audit',
          name: 'Continuous Compliance Auditing',
          description: 'Agents proactively enforce policies by continuously auditing processes, analyzing new regulations, and flagging potential violations in real-time.',
          roi: { label: 'Audit Prep Time Reduction', value: 60 },
          blueprint: {
            coordinator: 'Chief Compliance Officer',
            agents: ['Policy Monitor', 'Regulation Scanner', 'Violation Alerter', 'Audit Trail Agent']
          }
        },
        {
          id: 'contracts',
          name: 'Intelligent Contract Review',
          description: 'Deploy agents to parse thousands of legal documents and contracts, automatically extracting key clauses, identifying risks, and ensuring obligations are met.',
          roi: { label: 'Contract Review Speed', value: 40 },
          blueprint: {
            coordinator: 'Legal Ops Manager',
            agents: ['Clause Extractor', 'Risk Identifier', 'Obligation Tracker', 'Summary Generator']
          }
        }
      ]
    }
  ];

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
            Solutions in Action
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Agentic Automation Catalogue
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Explore our catalogue of productized, outcome-driven solutions. First, select a core business function. Then, choose a specific automation opportunity to see its blueprint and potential ROI.
          </p>
        </div>

        {/* Tier 1: Business Functions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-white mb-6">
            Step 1: Select a Business Function
          </h3>
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

        {/* Tier 2: Use Cases (visible once a function is selected) */}
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

        {/* Tier 3: Blueprint & ROI content (visible once a use-case is selected) */}
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
          </div>
        </div>
      </div> 
    </section>
  );
};

export default SolutionsSection;
