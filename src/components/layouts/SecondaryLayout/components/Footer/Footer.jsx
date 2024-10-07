const Footer = () => {
    return (
        <>
            <div className="footer__menu h-[368px] mt-4 text-gray-400 font-bold text-sm flex justify-center items-center bg-gray-100 border-t">
                <div className="w-[1200px]">
                    <a className="underline decoration-solid" href="">Qustions? Contact us.</a>
                    <ul className="mt-4 flex gap-32 underline decoration-solid">
                        <div className="leading-8">
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Speed Test</a></li>
                        </div>
                        <div className="leading-8">
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Cookie Preferences</a></li>
                            <li><a href="">Legal Notices</a></li>
                        </div>
                        <div className="leading-8">
                            <li><a href="">Account</a></li>
                            <li><a href="">Ways to Watch</a></li>
                            <li><a href="">Corporate Information</a></li>
                            <li><a href="">Only in Netflix</a></li>
                        </div>
                        <div className="leading-8">
                            <li><a href="">Media Center</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Contact Us</a></li>
                        </div>
                    </ul>
                    <p className="mt-8">Netflix Ukraine</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
