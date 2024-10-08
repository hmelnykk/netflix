import { GetStartedForm } from "../GetStartedForm";

const Hero = () => {
    return (
        <div className="text-white h-[800px] flex justify-center items-center max-md:h-[400px]">
            <div className="w-[700px] text-center max-md:w-[350px]">
                <h1 className="text-7xl font-black text-wrap leading-[80px]
                max-md:text-xl">Unlimited movies, TV shows, and more</h1>
                <h2 className="text-xl font-extrabold leading-[100px]">Starts at EUR 4.99. Cancel anytime.</h2>
                <GetStartedForm />
            </div>
        </div>
    );
};

export default Hero;
