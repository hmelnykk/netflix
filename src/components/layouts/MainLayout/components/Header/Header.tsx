import { HeaderProps } from "../../../../types";
import { LanguageSelect } from "../LanguageSelect";

const Header = ({children} : HeaderProps) => {
    return (
        <>
            <header className="h-[90px] flex justify-around items-center">
                <div className="logo bg-logo bg-cover w-[148px] h-[40px]">
                    {/* <img className="text-white" src="./netflix-logo.png" alt="logo" /> */}
                </div>
                <div className="header__buttons justify-around w-[280px] hidden md:flex">
                    <LanguageSelect />
                    <button className="p-2 w-[76px] h-[32px] bg-red-500 text-white flex items-center justify-center rounded-[6px] font-bold text-sm">
                        Sign in
                    </button>
                </div>
            </header>
            {/* <img src="" alt="" aria-hidden="true" className="default-ltr-cache-19j6xtr"></img> */}
        </>
    );
}

export default Header;
