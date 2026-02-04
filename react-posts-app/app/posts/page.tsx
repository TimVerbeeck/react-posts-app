import Link from "next/dist/client/link";

export default function Page() {
    return(
        <main>
            <input id="postSearch" placeholder="Search post titles" />
            <ul>
                <li className="flex items-center gap-6">
                    <Link href={"/posts/1"}>lorem ipsum</Link>
                </li>
                <li className="flex items-center gap-6">
                    <Link href={"/posts/2"}>lorem ipsum</Link>
                </li>
                <li className="flex items-center gap-6">
                    <Link href={"/posts/3"}>lorem ipsum</Link>
                </li>
                <li className="flex items-center gap-6">
                    <Link href={"/posts/4"}>lorem ipsum</Link>
                </li>
                <li className="flex items-center gap-6">
                    <Link href={"/posts/5"}>lorem ipsum</Link>
                </li>
            </ul>
        </main>
    );
}
