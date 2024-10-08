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
        <div className="bg-black sm:w-[100%]">
            <div className="bg-hero bg-cover h-[880px] max-md:h-[530px]">
                <Header />
                <Hero />
            </div>
            { children }
            <Footer />
        </div>
    )
}

export default MainLayout;
