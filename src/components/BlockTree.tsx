import type { BlockNode } from "../types/block";

interface Props {
    nodes: BlockNode[];
    level?: number;
}

export function BlockTree({ nodes, level = 0 }: Props) {
    return (
        <>
            {nodes.map(node => (
                <div
                    key={node.id}
                    style={{
                        paddingLeft: level * 50,
                        borderLeft: level > 0 ? "2px dashed #898989ff" : "none",
                        marginLeft: level > 0 ? 8 : 0
                    }}
                >
                    <BlockItem node={node} />

                    {node.children.length > 0 && (
                        <BlockTree
                            nodes={node.children}
                            level={level + 1}
                        />
                    )}
                </div>
            ))}
        </>
    );
}

function BlockItem({ node }: { node: BlockNode }) {
    return (
        <div
            style={{
                padding: "10px 20px",
                border: "2px solid #1656d5ff",
                borderRadius: 6,
                marginBottom: 6,
                background: "#fafafa",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                gap: 8
            }}
        >
            <span style={{ opacity: 0.5 }}>▸</span>
            <strong>{node.type}</strong>
            <span style={{ opacity: 0.5 }}>
                id: {node.id}
            </span>
        </div>
    );
}
