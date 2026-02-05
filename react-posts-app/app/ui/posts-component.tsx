import {fetchPosts} from "@/lib/data";
import Link from "next/dist/client/link";

export default async function PostsComponent() {
    const posts = await fetchPosts();

    return (
        <main>
            <input id="postSearch" placeholder="Search post titles"/>
            <ul>
                {posts?.map(post => (
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <Link key={post.id} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' href={`/posts/${post.id}`}>View</Link>
                    </li>
                ))}
            </ul>
        </main>
);
}