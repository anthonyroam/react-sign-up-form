import React from "react";

const Layout = ({children}) => {
    return (
        <main className="min-h-screen h-full w-full flex items-center bg-primary-red bg-intro-mobile">
            <div className="w-5/6 pt-14 pb-10 mx-auto grid gap-6 md:w-4/6 lg:grid-cols-2 ">
                {children}
            </div>
        </main>
    );
}

export { Layout };