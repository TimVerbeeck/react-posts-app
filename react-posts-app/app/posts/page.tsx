import PostsComponent from "@/app/ui/posts-component";
import {Suspense} from "react";
import Search from "@/app/ui/search";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query: string = searchParams?.query || '';
    return (<main className="max-w-4xl mx-auto px-4 py-10 space-y-8"> {/* Page Header */}
            <div className="flex items-center justify-between">
                <h1
                    className="text-3xl font-bold tracking-tight">
                    Posts
                </h1>
            </div>
            <div className="bg-white shadow rounded p-4">
                <Search placeholder="Search post titles"/>
            </div>
            <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
                <div className="bg-white shadow rounded p-6"><PostsComponent query={query}/></div>
            </Suspense>
        </main>
    );
}
