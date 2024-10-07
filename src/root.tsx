import MainLayout from "./components/layouts/MainLayout/MainLayout";
import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const Root = ({ children } : Props) => {
    return (
        <MainLayout>
            { children }
        </MainLayout>
    );
}

export default Root;
