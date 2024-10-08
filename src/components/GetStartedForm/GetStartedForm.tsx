import { useState } from "react";
import { useNavigate } from "react-router";

const GetStartedForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    return (
        <div className="text-white text-center">
            <p className="font-bold leading-10">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex mt-4 gap-4">
                <input className="w-[440px] h-[60px] bg-transparent border border-slate-400 rounded-[6px] p-4
                " type="email" placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                    
                }}/>
                <button className="w-[210px] h-[60px] bg-red-600 rounded-[6px] font-extrabold text-2xl"
                onClick={(e) => {
                    navigate('/sign-up');
                }}>Get Started</button>
            </form>
        </div>
    )
}

export default GetStartedForm;
