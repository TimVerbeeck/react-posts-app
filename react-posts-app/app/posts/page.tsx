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
    return(
        <main>
            <Search placeholder="Search post titles"/>
            <Suspense fallback={<p>Loading...</p>}>
                <PostsComponent  query={query}/>
            </Suspense>
        </main>
    );
}
