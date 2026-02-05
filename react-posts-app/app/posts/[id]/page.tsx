import Link from "next/link";
import {fetchPostById, fetchPostcomments} from "@/lib/data";

export default async function Page({params}: { params: { id: string } }) {
    const {id} = await params;
    const post = await fetchPostById(id);
    const comments = await fetchPostcomments(id);

    return (<main className="max-w-3xl mx-auto py-10 px-4">
        <Link href="/posts"
              className="inline-block mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"> ←
                Back to posts
        </Link>
        <article className="bg-white shadow-md rounded p-6 mb-10"><h1
            className="text-3xl font-bold mb-4">{post.title}</h1> <p
            className="text-gray-700 leading-relaxed">{post.body}</p></article>
        <section><h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <ul className="space-y-4"> {comments.map((comment) => (
                <li key={comment.id} className="bg-gray-100 p-4 rounded shadow-sm"><p
                    className="text-gray-800">{comment.body}</p></li>))} </ul>
        </section>
    </main>);
}
