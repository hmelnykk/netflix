import { reasons } from "../initial";

const MoreReasonsToJoin = () => {
    return (
        <div className="flex justify-center p-8">
            <div className="text-white w-[1200px] h-[450px]">
                <h1 className="text-3xl font-extrabold mb-4">More Reasons to Join</h1>
                <div className="reasons flex gap-4 mb-4">
                    {
                        reasons.map((reason) => {
                            return (
                                <div className="bg-gradient-to-br from-[#424166] to-[#3d2833] rounded-[6px] p-6 w-[290px] h-[330px] text-wrap">
                                    <h1 className="font-extrabold text-2xl mb-8">{reason.name}</h1>
                                    <p className="font-semibold text-gray-200">{reason.description}</p>
                                    {reason.img}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MoreReasonsToJoin;
