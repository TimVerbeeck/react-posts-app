import Link from "next/link";

export default function Page() {
    return(
        <main>
            <Link className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' href={`/posts/`}>Close</Link>
            <h1>Lorem Ipsum</h1>
            <p>dolor si amet auia et suscipit sucipit recusandae consequuntur</p>
            <h2>Comments</h2>
            <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
            </ul>
        </main>
    );
}
