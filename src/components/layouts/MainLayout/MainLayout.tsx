import React, { ReactNode } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
    children? : ReactNode;
}

const MainLayout = ({ children } : LayoutProps) => {
    return (
        <>
            <div className="bg-hero bg-cover h-[880px]">
                <Header />
                { children }
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;
