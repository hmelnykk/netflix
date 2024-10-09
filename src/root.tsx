import MainLayout from "./components/layouts/MainLayout/MainLayout";
import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const Root = ({ children } : Props) => (
        <MainLayout>
            { children }
        </MainLayout>
    )

export default Root;
