import PostsComponent from "@/app/ui/posts-component";
import {Suspense} from "react";

export default function Page() {
    return(
        <main>
            <Suspense fallback={<p>Loading...</p>}>
                <PostsComponent/>
            </Suspense>
        </main>
    );
}
