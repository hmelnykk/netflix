import { ReactNode, useState } from "react";

const Carousel = ({ children, toShow = 4 }: {children: ReactNode[], toShow: number}) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const goBackHandler = () => {
        if (activeSlide > 0) setActiveSlide(activeSlide - 1)
    }
    const goNextHandler = () => {
        if (activeSlide < children.length - toShow) setActiveSlide(activeSlide + 1)
    }

    return <div className="flex justify-center gap-2 w-[100%]">
        <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goBackHandler}>{`<`}</button>
        <div className="films flex gap-4">
            { children.map((el, idx) => {
                return idx >= activeSlide && idx < activeSlide + toShow ? el : null
            }) }
        </div>
        <button className="p-4 hover:bg-slate-600/40 transition-all rounded-[6px]" onClick={goNextHandler}>{`>`}</button>
    </div>
}

export default Carousel;
