import { ReactNode, useState } from "react";
import Media from "react-media";

const Carousel = ({ children, toShow = 4 }: { children: ReactNode[], toShow: number }) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    
    let numOfSlidesToShow = toShow;

    const goBackHandler = () => {
        if (activeSlide > 0) setActiveSlide(activeSlide - 1)
    }
    const goNextHandler = () => {
        if (activeSlide < children.length - numOfSlidesToShow) setActiveSlide(activeSlide + 1)
    }

    return <div className="flex justify-center gap-2 w-[100%]">
        <Media query="(max-width: 768px)">
            {(matches) => {
                numOfSlidesToShow = matches ? 1 : toShow;

                return <>
                    <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goBackHandler}>{`<`}</button>
                    <div className="films flex gap-4 max-md:block">
                        {children.map((el, idx) => {
                            return idx >= activeSlide && idx < activeSlide + numOfSlidesToShow ? el : null
                        })}
                    </div>
                    <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goNextHandler}>{`>`}</button>
                </>
            }}
        </Media>
    </div>
}

export default Carousel;


{/* <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goBackHandler}>{`<`}</button>
                    <div className="films flex gap-4 max-md:block">
                        {children.map((el, idx) => {
                            return idx >= activeSlide && idx < activeSlide + toShow ? el : null
                        })}
                    </div>
                    <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goNextHandler}>{`>`}</button> */}