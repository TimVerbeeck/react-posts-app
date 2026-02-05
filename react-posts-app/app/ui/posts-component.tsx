import {fetchPosts} from "@/lib/data";

export default async function PostsComponent() {
    const posts = await fetchPosts();

    return (
        <main>
            <input id="postSearch" placeholder="Search post titles"/>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </main>
);
}