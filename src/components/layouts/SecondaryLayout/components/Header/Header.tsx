import { useNavigate } from "react-router";
import React from "react";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className="h-[90px] flex justify-around items-center border-b">
                <div className="logo bg-logo bg-cover w-[148px] h-[40px]" onClick={() => navigate('/')}></div>
            </header>
        </>
    );
}

export default Header;
