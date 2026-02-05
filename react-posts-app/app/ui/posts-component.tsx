import {fetchPosts} from "@/lib/data";
import Link from "next/dist/client/link";

export default async function PostsComponent({query}: { query: string }) {
    const posts = await fetchPosts(query);

    return (
        <main className="space-y-6">
            <ul className="space-y-4">
                {posts?.map(post => (
                    <li key={post.id} className="flex items-center justify-between bg-white shadow p-4 rounded border border-gray-200">
                        <p className="text-lg font-medium text-gray-800"> {post.title} </p>
                        <Link href={`/posts/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-semibold">
                            View
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}