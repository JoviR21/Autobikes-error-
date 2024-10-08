"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Error() {
    const router = useRouter();
    const [remainingTime, setRemainingTime] = useState(6);

    useEffect(() => {
        setInterval(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            } else {
                router.push("/");
            }
        }, 1000);
    }, [remainingTime, router]);

    return (
        <main>
            {/* Error */}
            <div className="h-screen text-center mt-48">
                <h3 className="text-4xl md:text-5xl font-cousine font-semibold">Page <span className="text-third">not found</span></h3>
                <h1 className="text-7xl md:text-8xl font-cousine font-bold my-7">404</h1>
                <p className="text-base md:text-2xl font-overpass font-semibold">You will be automatically returned to the homepage in <span className="text-third">{remainingTime}s</span></p>
            </div>
            {/* Error */}
        </main>
    )
}