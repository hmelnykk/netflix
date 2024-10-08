import { LanguageSelect } from "../LanguageSelect";
import { footerLinks } from "../../../../initial";

const Footer = () => {
    return (
        <>
            <div className="footer__menu h-[368px] max-md:h-auto p-8 mt-4 text-gray-400 font-bold text-sm flex justify-center items-center">
                <div className="w-[1200px] max-md:w-[100%]">
                    <a className="underline decoration-solid" href="">Qustions? Contact us.</a>
                    <ul className="mt-4 flex max-md:block gap-32 underline decoration-solid max-md:hidden">
                        {
                            footerLinks.map((footerBlock, idx) => {
                                return <div className="leading-8">
                                    {
                                        footerBlock.map((footerLink) => {
                                            return <li><a href="">{footerLink}</a></li>
                                        })
                                    }
                                </div>
                            })
                        }
                    </ul>
                    <div className="mt-8">
                        <LanguageSelect />
                    </div>
                    <p className="mt-8">Netflix Ukraine</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
