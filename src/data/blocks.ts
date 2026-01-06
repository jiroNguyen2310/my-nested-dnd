//👈 fake data ở đây
import type { Block } from "../types/block";

export const initialBlocks: Block[] = [
    { id: "1", type: "section", parentId: null, order: 0 },
    { id: "2", type: "text", parentId: "1", order: 0 },
    { id: "3", type: "column", parentId: "1", order: 1 },
    { id: "4", type: "image", parentId: "3", order: 0 },
    { id: "5", type: "text", parentId: "3", order: 1 },
    { id: "6", type: "section", parentId: null, order: 1 }
];
