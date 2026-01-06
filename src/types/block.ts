// 👈 type / interface ở đây
export type BlockType = "section" | "text" | "column" | "image";

export interface Block {
    id: string;
    type: BlockType;
    parentId: string | null;
    order: number
}

export interface BlockNode extends Block {
    children: BlockNode[];
}