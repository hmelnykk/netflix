import { reasons } from "../initial";
import React from "react";

const MoreReasonsToJoin = () => (
        <div className="flex justify-center p-8">
            <div className="text-white w-[1200px] h-[450px] max-md:h-auto">
                <h1 className="text-3xl font-extrabold mb-4">More Reasons to Join</h1>
                <div className="reasons flex justify-center gap-4 mb-4 max-md:block max-md:gap-0">
                    {
                        reasons.map((reason, reasonIdx) => (
                                <div key={reasonIdx} className="bg-gradient-to-br from-[#424166] to-[#3d2833] rounded-[6px] p-6 w-[290px] h-[330px] text-wrap max-md:mb-4 max-md:w-[100%] max-md:h-auto">
                                    <h1 className="font-extrabold text-2xl mb-8">{reason.name}</h1>
                                    <p className="font-semibold text-gray-200">{reason.description}</p>
                                    {reason.img}
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )

export default MoreReasonsToJoin;
