'use client';

import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const nodeDefaults = {
    style: {
        border: '1px solid #9333ea',
        padding: 10,
        borderRadius: 8,
        background: '#1f1f1f',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
};

const agentWorkflows = {
    finance: {
        nodes: [
            { id: '1', data: { label: 'Transaction Monitor' }, position: { x: 0, y: 0 }, ...nodeDefaults },
            { id: '2', data: { label: 'Fraud Detection Agent' }, position: { x: 200, y: 0 }, ...nodeDefaults },
            { id: '3', data: { label: 'Compliance Reporter' }, position: { x: 400, y: 0 }, ...nodeDefaults },
            { id: '4', data: { label: 'CFO Dashboard' }, position: { x: 600, y: 0 }, ...nodeDefaults },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#a78bfa' } },
            { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#a78bfa' } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#a78bfa' } },
        ],
    },
    manufacturing: {
        nodes: [
            { id: '1', data: { label: 'Sensor Data Agent' }, position: { x: 0, y: 0 }, ...nodeDefaults },
            { id: '2', data: { label: 'Predictive Maintenance' }, position: { x: 200, y: -50 }, ...nodeDefaults },
            { id: '3', data: { label: 'Logistics Optimizer' }, position: { x: 200, y: 50 }, ...nodeDefaults },
            { id: '4', data: { label: 'Inventory Agent' }, position: { x: 400, y: 0 }, ...nodeDefaults },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#a78bfa' } },
            { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#a78bfa' } },
            { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#a78bfa' } },
            { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#a78bfa' } },
        ],
    },
};

export default function WorkflowDiagram({ solutionId }) {
    const { nodes, edges } = agentWorkflows[solutionId] || { nodes: [], edges: [] };

    return (
        <div style={{ width: '100%', height: 300 }} className="rounded-xl overflow-hidden bg-slate-900/40">
            <ReactFlow nodes={nodes} edges={edges} fitView>
                <MiniMap />
                <Controls />
                <Background color="#555" gap={16} />
            </ReactFlow>
        </div>
    );
}
