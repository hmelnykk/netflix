import React, { ReactNode } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
    children? : ReactNode
}

const SecondaryLayout = ({ children } : LayoutProps) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default SecondaryLayout;
