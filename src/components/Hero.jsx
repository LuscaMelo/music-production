import { BsArrowRightShort } from "react-icons/bs"

export default function Hero() {
    return (
        <div className="h-[78vh] w-full" id="hero">
            <div className="container mx-auto flex flex-col justify-center items-center h-[100%] text-center">
                <h1 className="text-gray-50 text-5xl lg:text-6xl font-bold">Music production from scratch<span className="text-brand-dark">.</span> </h1>
                <div className="flex gap-2 mt-4">
                    <button className="flex items-center bg-brand hover:bg-brand-dark duration-300 px-7 py-3 text-gray-50 font-bold text-md lg:text-lg">Learn</button>
                    <button className="flex items-center bg-white hover:bg-brand-dark hover:text-white duration-300 px-7 py-3 text-brand font-bold text-md lg:text-lg">See more<BsArrowRightShort className="ml-2 text-xl" /></button>
                </div>
            </div>
        </div>
    )
}
