import React, { ReactNode } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GetStartedForm } from "../../GetStartedForm";
import { Hero } from "../../Hero";

interface LayoutProps {
    children? : ReactNode
}

const MainLayout = ({ children } : LayoutProps) => {
    return (
        <div className="bg-black">
            <div className="bg-hero bg-cover h-[880px]">
                <Header />
                <Hero />
            </div>
            { children }
            <Footer />
        </div>
    )
}

export default MainLayout;
