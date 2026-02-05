import {Post, Comment} from "@/lib/definitions";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(query?: string){
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json() as Post[];
        return posts.filter(post => post.title.toLowerCase().includes(query ? query.toLowerCase() : "") );
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts.');
    }
}

export async function fetchPostById(id: string) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`);
        const post = await response.json() as Post;
        return post;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch post details.');
    }
}

export async function fetchPostcomments(id: string){
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}/comments`);
        const comments = await response.json() as Comment[];
        return comments;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts\' comments.');
    }
}