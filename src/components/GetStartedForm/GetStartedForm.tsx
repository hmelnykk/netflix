const GetStartedForm = () => {
    return (
        <>
            <p className="font-bold leading-10">Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex mt-4 gap-4">
                <input className="w-[440px] h-[60px] bg-transparent border border-slate-400 rounded-[6px] p-4
                
                " type="email" placeholder="Email"/>
                <button className="w-[210px] h-[60px] bg-red-600 rounded-[6px] font-extrabold text-2xl">Get Started</button>
            </form>
        </>
    )
}

export default GetStartedForm;
