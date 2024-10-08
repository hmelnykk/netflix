import { footerLinks } from "../../../../initial";
import React from "react";

const Footer = () => (
        <>
            <div className="footer__menu h-[368px] mt-4 text-gray-400 font-bold text-sm flex justify-center items-center bg-gray-100 border-t">
                <div className="w-[1200px]">
                    <a className="underline decoration-solid" href="">Qustions? Contact us.</a>
                    <ul className="mt-4 flex gap-32 underline decoration-solid">
                        {
                            footerLinks.map((footerBlock, idx) => <div key={idx} className="leading-8">
                                    {
                                        footerBlock.map((footerLink, linkIdx) => <li key={linkIdx + idx*4}><a href="">{footerLink}</a></li>)
                                    }
                                </div>)
                        }
                    </ul>
                    <p className="mt-8">Netflix Ukraine</p>
                </div>
            </div>
        </>
    )

export default Footer;
