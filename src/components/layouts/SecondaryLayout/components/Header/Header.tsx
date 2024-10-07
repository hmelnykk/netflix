import { ReactNode } from "react";

interface HeaderProps {
    children? : ReactNode
}

const Header = ({children} : HeaderProps) => {
    return (
        <>
            <header className="h-[90px] flex justify-around items-center border-b">
                <div className="logo bg-logo bg-cover w-[148px] h-[40px]"></div>
            </header>
        </>
    );
}

export default Header;
