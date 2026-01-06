// 👈 build tree / reorder / move logic

import type { Block, BlockNode } from "../types/block";

export function buildBlockTree(blocks: Block[]): BlockNode[] {
    const map = new Map<string, BlockNode>();

    // 1. Init map
    blocks.forEach(block => {
        map.set(block.id, { ...block, children: [] });
    });

    const roots: BlockNode[] = [];

    // 2. Gắn children
    blocks.forEach(block => {
        const node = map.get(block.id)!;

        if (block.parentId === null) {
            roots.push(node);
        } else {
            const parent = map.get(block.parentId);
            parent?.children.push(node);
        }
    });

    // 3. Sort theo order (rất quan trọng)
    const sortTree = (nodes: BlockNode[]) => {
        nodes.sort((a, b) => a.order - b.order);
        nodes.forEach(n => sortTree(n.children));
    };

    sortTree(roots);

    return roots;
}
