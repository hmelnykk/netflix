import { useState } from "react";

const questionsList = [
    {
        id: 1,
        question: 'What is Netflix?',
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
        id: 2,
        question: 'How much does Netflix cost?',
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 4.99 to EUR 9.99 a month. No extra costs, no contracts."
    },
    {
        id: 3,
        question: 'Where can I watch?',
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },

]

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    return (
        <div className="flex justify-center p-8">
            <div className="text-white w-[1200px]">
                <h1 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h1>
                <div className="faq gap-4 mb-4 text-left">
                    {
                        questionsList.map((q, idx) => {
                            return (
                                <>
                                    <button className="flex justify-between bg-[#2d2d2d] mb-2 p-4 text-2xl font-semibold w-[100%] transition-all
                                    hover:bg-[#4b4b4b]"
                                        onClick={(e) => {
                                            console.log(idx);
                                            activeQuestion === idx + 1 ? setActiveQuestion(0) : setActiveQuestion(idx + 1);
                                        }}>
                                        {q.question}
                                        <p>{activeQuestion === idx + 1 ? '-' : '+'}</p>
                                    </button>
                                    {
                                        activeQuestion === idx + 1 ? <div className="bg-[#2d2d2d] p-4 mb-2 text-2xl font-semibold">
                                            {q.answer}
                                        </div> : ''
                                    }
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FAQ;
