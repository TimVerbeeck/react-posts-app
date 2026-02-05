export type Post = {
    userid: number;
    id: number;
    title: string;
    body: string;
};

export type Comment = {
    postid: number;
    id: number;
    name: string;
    email: number;
    body: string;
};