"use client";
export default function Error({error, reset}: { error: Error; reset: () => void }) {
    return (<div><p style={{color: "red"}}>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
    </div>);
}