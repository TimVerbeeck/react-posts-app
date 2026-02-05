export type Post = {
    id: number;
    title: string;
    details: string;
};

export type Comment = {
    id: number;
    detail: string;
    postId: number;
};