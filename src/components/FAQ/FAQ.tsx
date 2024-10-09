import { useState } from "react";
import { questionsList } from "../initial";
import React from "react";

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    const changeActiveQuestion = (idx: number) => activeQuestion === idx + 1 ? setActiveQuestion(0) : setActiveQuestion(idx + 1);

    return (
        <div className="flex justify-center p-8 max-md:block max-md:h-auto">
            <div className="text-white w-[1200px] max-md:w-[100%]">
                <h1 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h1>
                <div className="faq gap-4 mb-4 text-left">
                    {
                        questionsList.map((q, idx) => (
                                <div key={idx}>
                                    <button className="flex justify-between bg-[#2d2d2d] mb-2 p-4 text-2xl text-left font-semibold w-[100%] transition-all
                                    hover:bg-[#4b4b4b]"
                                        onClick={() => changeActiveQuestion(idx)}>
                                        {q.question}
                                        <p>{activeQuestion === idx + 1 ? '-' : '+'}</p>
                                    </button>
                                    {
                                        activeQuestion === idx + 1 ? <div className="bg-[#2d2d2d] p-4 mb-2 text-2xl font-semibold">
                                            {q.answer}
                                        </div> : ''
                                    }
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FAQ;
