import React from "react";

const Description = () => {
    return (
        <div className="flex flex-col items-center gap-6 text-white text-center lg:row-span-2 lg:place-content-center lg:text-left">
            <h1 className="w-4/5 font-bold text-3xl lg:text-4xl lg:w-full">Learn to code by watching others</h1>
            <p className="lg:text-lg">See how experienced developers solve problems in real-time. Watching scripted tutorials is great. but understanding how developers think is invaluable.</p>
        </div>
    );
}

export { Description };