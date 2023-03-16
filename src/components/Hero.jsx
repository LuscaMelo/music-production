import { BsArrowRightShort } from "react-icons/bs"

export default function Hero() {
    return (
        <div className="h-[100vh] w-full" id="hero">
            <div className="container mx-auto flex flex-col justify-center items-center h-[100%] text-center">
                <h1 className="text-gray-50 text-5xl lg:text-6xl font-bold">Music production from scratch.</h1>
                <p className="text-gray-50/50 max-w-4xl my-7 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptatum, qui eos ad ipsum vero earum minima quaerat aliquid, corrupti quis vitae autem vel dolore eligendi? Quibusdam qui placeat nam.</p>
                <button className="flex items-center bg-brand px-7 py-3 rounded-3xl text-gray-50 text-md lg:text-lg mb-40">See more <BsArrowRightShort className="ml-2 text-xl" /></button>
            </div>
        </div>
    )
}
