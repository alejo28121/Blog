
import {
  Background,
  Controls,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";
import "../assets/styles/Familiogram.css";
import SymbolLegend from "./SymbolLegend";

const initialNodes = [
    {
    id: "junction-h18-dashed",
    type: "junction",
    position: { x: 950, y: 600 },
    data: {},
    },
      // Descenso individual de Nelson y Dora
  {
    id: "nelson-left",
    type: "junction",
    position: { x: 930, y: 470 },
    data: {},
  },
  {
    id: "dora-right",
    type: "junction",
    position: { x: 1160, y: 470 },
    data: {},
    },

  // Unión central de la pareja
  {
    id: "union-nelson-dora",
    type: "junction",
    position: { x: 1045, y: 470 },
    data: {},
  },

  // Descenso desde el centro de la unión
  {
    id: "descent-nelson-dora",
    type: "junction",
    position: { x: 1045, y: 530 },
    data: {},
  },

  // Línea horizontal de los tres hijos
    ...Array.from({ length: 3 }, (_, i) => ({
    id: `junction-nelson-dora-${i + 1}`,
    type: "junction",
    position: { x: [930, 1045, 1160][i], y: 600 },
    data: {},
    })),

  // Tres hijos
  {
    id: "h18",
    type: "person",
    position: { x: 870, y: 660 },
    data: { symbol: "square", label: "Edier" },
  },
  {
    id: "h19",
    type: "person",
    position: { x: 985, y: 660 },
    data: { symbol: "circle", label: "Evelyn" },
    },
  {
    id: "h20",
    type: "person",
    position: { x: 1100, y: 660 },
    data: { symbol: "circle", label: "Marian Pauline" },
  },
  // Segunda familia: padres
  {
    id: "p3",
    type: "person",
    position: { x: 1100, y: 80 },
    data: {
      symbol: "square-x",
      label: "Jose Orlando",
      labelPosition: "top",
    },
  },
  {
    id: "p4",
    type: "person",
    position: { x: 1380, y: 80 },
    data: {
      symbol: "circle",
      label: "Maria Margarita",
      labelPosition: "top",
    },
  },

  // Nodo auxiliar entre el segundo y tercer hijo
  {
    id: "junction-2-middle",
    type: "junction",
    position: { x: 1295, y: 300 },
    data: {},
  },

  // Unión de la segunda pareja
  {
    id: "parent2-left",
    type: "junction",
    position: { x: 1160, y: 168 },
    data: {},
  },
  {
    id: "union-parents-2",
    type: "junction",
    position: { x: 1295, y: 168 },
    data: {},
  },
  {
    id: "parent2-right",
    type: "junction",
    position: { x: 1440, y: 168 },
    data: {},
  },

  // Descenso de la segunda familia
  {
    id: "descent-2",
    type: "junction",
    position: { x: 1295, y: 230 },
    data: {},
  },

  // Cuatro puntos auxiliares de los hijos
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `junction-2-${i + 1}`,
    type: "junction",
    position: { x: 1160 + i * 90, y: 300 },
    data: {},
  })),

  // Cuatro hijos
  {
    id: "h14",
    type: "person",
    position: { x: 1100, y: 360 },
    data: { symbol: "circle", label: "Dora Helena", labelPosition: "left",},
  },
  {
    id: "h15",
    type: "person",
    position: { x: 1190, y: 360 },
    data: { symbol: "square-diagonal-question", label: "Rodrigo" },
  },
  {
    id: "h16",
    type: "person",
    position: { x: 1280, y: 360 },
    data: { symbol: "square", label: "Aldemar" },
  },
  {
    id: "h17",
    type: "person",
    position: { x: 1370, y: 360 },
    data: { symbol: "circle", label: "Ruby" },
  },

  // Primera familia: padres
  {
    id: "p1",
    type: "person",
    position: { x: 30, y: 80 },
    data: {
      symbol: "square-x",
      label: "Luis Eduardo",
      labelPosition: "top",
    },
  },
  {
    id: "p2",
    type: "person",
    position: { x: 870, y: 80 },
    data: {
      symbol: "circle",
      label: "Blanca Libia",
      labelPosition: "top",
    },
  },

  // Unión horizontal de los padres
  {
    id: "parent-left",
    type: "junction",
    position: { x: 90, y: 168 },
    data: {},
  },
  {
    id: "union-parents",
    type: "junction",
    position: { x: 510, y: 168 },
    data: {},
  },
  {
    id: "parent-right",
    type: "junction",
    position: { x: 930, y: 168 },
    data: {},
  },

  // Descenso central: alineado con junction-7
  {
    id: "descent",
    type: "junction",
    position: { x: 510, y: 230 },
    data: {},
  },

  // 13 puntos auxiliares, uno por cada hijo
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `junction-${i + 1}`,
    type: "junction",
    position: { x: 90 + i * 70, y: 300 },
    data: {},
  })),

  // Hijos de la primera familia
  {
    id: "h1",
    type: "person",
    position: { x: 30, y: 360 },
    data: { symbol: "circle-x", label: "Blanca" },
  },
  {
    id: "h2",
    type: "person",
    position: { x: 100, y: 360 },
    data: { symbol: "circle", label: "Helena" },
  },
  {
    id: "h3",
    type: "person",
    position: { x: 170, y: 360 },
    data: { symbol: "circle", label: "Marta" },
  },
  {
    id: "h4",
    type: "person",
    position: { x: 240, y: 360 },
    data: { symbol: "circle", label: "Marina" },
  },
  {
    id: "h5",
    type: "person",
    position: { x: 310, y: 360 },
    data: { symbol: "square", label: "Carlos" },
  },
  {
    id: "h6",
    type: "person",
    position: { x: 380, y: 360 },
    data: { symbol: "square", label: "Rodrigo" },
  },
  {
    id: "h7",
    type: "person",
    position: { x: 450, y: 360 },
    data: { symbol: "square", label: "Alberto" },
  },
  {
    id: "h8",
    type: "person",
    position: { x: 520, y: 360 },
    data: { symbol: "square", label: "Gonzaga" },
  },
  {
    id: "h9",
    type: "person",
    position: { x: 590, y: 360 },
    data: { symbol: "circle", label: "Mayela" },
  },
  {
    id: "h10",
    type: "person",
    position: { x: 660, y: 360 },
    data: { symbol: "square", label: "Jhon Jairo" },
  },
  {
    id: "h11",
    type: "person",
    position: { x: 730, y: 360 },
    data: { symbol: "square", label: "Hector" },
  },
  {
    id: "h12",
    type: "person",
    position: { x: 800, y: 360 },
    data: { symbol: "square", label: "Jesus" },
  },
  {
    id: "h13",
    type: "person",
    position: { x: 870, y: 360 },
    data: {
      symbol: "square",
      label: "Nelson",
      labelPosition: "right",
    },
  },
];

const initialEdges = [
      // Nelson baja por separado
  {
    id: "nelson-drop",
    source: "h13",
    sourceHandle: "bottom",
    target: "nelson-left",
    targetHandle: "top",
    type: "straight",
  },

  // Dora baja por separado
  {
    id: "dora-drop",
    source: "h14",
    sourceHandle: "bottom",
    target: "dora-right",
    targetHandle: "top",
    type: "straight",
  },

  // Unión horizontal de la pareja
  {
    id: "nelson-union-left",
    source: "nelson-left",
    sourceHandle: "right",
    target: "union-nelson-dora",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "nelson-union-right",
    source: "union-nelson-dora",
    sourceHandle: "right",
    target: "dora-right",
    targetHandle: "left",
    type: "straight",
  },

  // Línea horizontal que conecta a los tres hijos
  {
    id: "children-branch-left",
    source: "junction-nelson-dora-1",
    sourceHandle: "right",
    target: "junction-nelson-dora-2",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "children-branch-right",
    source: "junction-nelson-dora-2",
    sourceHandle: "right",
    target: "junction-nelson-dora-3",
    targetHandle: "left",
    type: "straight",
  },

  // Descenso central hacia la línea de los hijos
  {
    id: "descent-to-children-branch",
    source: "union-nelson-dora",
    sourceHandle: "bottom",
    target: "junction-nelson-dora-2",
    targetHandle: "top",
    type: "straight",
  },

  // Conexión vertical de cada hijo
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `child-nelson-dora-${i + 1}`,
    source: `junction-nelson-dora-${i + 1}`,
    sourceHandle: "bottom",
    target: `h${i + 18}`,
    targetHandle: "top",
    type: "straight",
  })),
  {
    id: "child-nelson-dora-1-dashed",
    source: "junction-h18-dashed",
    sourceHandle: "bottom",
    target: "h18",
    targetHandle: "top",
    type: "straight",
    style: {
        stroke: "#26334d",
        strokeWidth: 2,
        strokeDasharray: "5 5",
    },
    },
  // Segunda familia: descenso de cada padre
  {
    id: "father2-drop",
    source: "p3",
    sourceHandle: "bottom",
    target: "parent2-left",
    targetHandle: "top",
    type: "straight",
  },
  {
    id: "mother2-drop",
    source: "p4",
    sourceHandle: "bottom",
    target: "parent2-right",
    targetHandle: "top",
    type: "straight",
  },

  // Segunda familia: unión horizontal de los padres
  {
    id: "parents2-horizontal-left",
    source: "parent2-left",
    sourceHandle: "right",
    target: "union-parents-2",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "parents2-horizontal-right",
    source: "union-parents-2",
    sourceHandle: "right",
    target: "parent2-right",
    targetHandle: "left",
    type: "straight",
  },

  // Descenso central hacia junction-2-2
  {
    id: "descent2-to-branch",
    source: "union-parents-2",
    sourceHandle: "bottom",
    target: "junction-2-middle",
    targetHandle: "top",
    type: "straight",
  },

  // Línea horizontal entre los hijos de la segunda familia
  {
    id: "branch-2-1",
    source: "junction-2-1",
    sourceHandle: "right",
    target: "junction-2-2",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "branch-2-2-middle",
    source: "junction-2-2",
    sourceHandle: "right",
    target: "junction-2-middle",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "branch-middle-2-3",
    source: "junction-2-middle",
    sourceHandle: "right",
    target: "junction-2-3",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "branch-2-3",
    source: "junction-2-3",
    sourceHandle: "right",
    target: "junction-2-4",
    targetHandle: "left",
    type: "straight",
  },

  // Conexiones de cada hijo de la segunda familia
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `child2-line-${i + 1}`,
    source: `junction-2-${i + 1}`,
    sourceHandle: "bottom",
    target: `h${i + 14}`,
    targetHandle: "top",
    type: "straight",
  })),

  // Primera familia: padre y madre bajan verticalmente
  {
    id: "father-drop",
    source: "p1",
    sourceHandle: "bottom",
    target: "parent-left",
    targetHandle: "top",
    type: "straight",
  },
  {
    id: "mother-drop",
    source: "p2",
    sourceHandle: "bottom",
    target: "parent-right",
    targetHandle: "top",
    type: "straight",
  },

  // Primera familia: línea horizontal entre los padres
  {
    id: "parents-horizontal-left",
    source: "parent-left",
    sourceHandle: "right",
    target: "union-parents",
    targetHandle: "left",
    type: "straight",
  },
  {
    id: "parents-horizontal-right",
    source: "union-parents",
    sourceHandle: "right",
    target: "parent-right",
    targetHandle: "left",
    type: "straight",
  },

  // Conectar horizontalmente los 13 puntos auxiliares
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `branch-${i + 1}`,
    source: `junction-${i + 1}`,
    sourceHandle: "right",
    target: `junction-${i + 2}`,
    targetHandle: "left",
    type: "straight",
  })),

  // Descenso central hacia el séptimo punto auxiliar
  {
    id: "descent-to-branch",
    source: "union-parents",
    sourceHandle: "bottom",
    target: "junction-7",
    targetHandle: "top",
    type: "straight",
  },

  // Conectar cada punto auxiliar con su hijo
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `child-line-${i + 1}`,
    source: `junction-${i + 1}`,
    sourceHandle: "bottom",
    target: `h${i + 1}`,
    targetHandle: "top",
    type: "straight",
  })),
];

function JunctionNode() {
    return (
        <>
        <Handle type="target" position={Position.Top} id="top" />
        <Handle type="source" position={Position.Bottom} id="bottom" />
        <Handle type="target" position={Position.Left} id="left" />
        <Handle type="source" position={Position.Right} id="right" />
        </>
    );
}

function PersonNode({ data }) {
    const labelPosition = data.labelPosition || "bottom";

    return (
        <div className="familiogram-person">
        <div className="familiogram-symbol-wrapper">
            {/* Conexiones del nodo */}
            <Handle
            type="target"
            position={Position.Top}
            id="top"
            className="familiogram-handle"
            />

            <Handle
            type="source"
            position={Position.Right}
            id="right"
            className="familiogram-handle"
            />

            <Handle
            type="target"
            position={Position.Left}
            id="left"
            className="familiogram-handle"
            />

            <Handle
            type="source"
            position={Position.Bottom}
            id="bottom"
            className="familiogram-handle"
            />

            {/* Símbolo de la persona */}
            {data.symbol === "square-diagonal-question" ? (
            <div className="familiogram-symbol familiogram-unknown-symbol">
                <span className="question-top">?</span>
                <span className="question-bottom">?</span>
                <i className="diagonal-line" />
            </div>
            ) : (
            <div
                className={`familiogram-symbol familiogram-symbol--${data.symbol}`}
            >
                {data.symbol?.includes("question") && <span>?</span>}
            </div>
            )}

            {/* Nombre de la persona */}
            {labelPosition === "top" && (
            <div className="familiogram-person__label label-top">
                {data.label || "\u00A0"}
            </div>
            )}

            {labelPosition === "right" && (
            <div className="familiogram-person__label label-right">
                {data.label || "\u00A0"}
            </div>
            )}

            {labelPosition === "left" && (
            <div className="familiogram-person__label label-left">
                {data.label || "\u00A0"}
            </div>
            )}
        </div>

        {/* Nombre debajo del símbolo */}
        {labelPosition === "bottom" && (
            <div className="familiogram-person__label">
            {data.label || "\u00A0"}
            </div>
        )}
        </div>
    );
}


const nodeTypes = {
    person: PersonNode,
    junction: JunctionNode,
};

export default function Familiogram() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    const handleInit = useCallback((instance) => {
        instance.fitView({ padding: 0.2 });
    }, []);

    return (
        <section className="familiogram-section" id="familiograma">
        <div className="familiogram-section__header">
            <span className="familiogram-section__eyebrow">
            NUESTRO ÁRBOL FAMILIAR
            </span>

            <h2>El familiograma</h2>

            <p>
            Una representación de las personas, sus vínculos y las conexiones que
            forman nuestra historia.
            </p>
        </div>

        <div className="familiogram-board">
            <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodesDraggable={false}
            onInit={handleInit}
            nodesConnectable={false}
            elementsSelectable
            minZoom={0.25}
            maxZoom={2}
            fitView
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{
                type: "smoothstep",
                style: {
                stroke: "#26334d",
                strokeWidth: 2,
                },
            }}
            >
            <Background color="#dce4f1" gap={22} size={1} />

            <Controls />

            <MiniMap
                nodeColor={(node) =>
                node.data.symbol?.includes("circle") ? "#97D2FB" : "#d9c7ff"
                }
                maskColor="rgba(247, 249, 255, 0.7)"
            />
            </ReactFlow>
        </div>
        <SymbolLegend />
        </section>
    );
}
