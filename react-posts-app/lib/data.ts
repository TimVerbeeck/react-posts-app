import {Post} from "@/lib/definitions";

const BASE_URL = " https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json() as Post[];
        return posts;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts.');
    }
}

export async function fetchPostDetails() {


}