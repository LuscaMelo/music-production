import { useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import { IoCloseSharp } from "react-icons/io5"

import { useEffect } from "react"


export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        nav ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, []);

    return (
        <div className="flex z-40">
            {/** Menu Icon **/}
            <div className="flex items-center justify-center fixed top-4 left-4 cursor-pointer bg-brand hover:hover:bg-brand-dark duration-300 text-slate-200 w-[60px] h-[60px] rounded-full" onClick={handleNav}>
                <HiMenuAlt2 className="text-3xl" />
            </div>

            {/** Overlay **/}
            <div className={nav ? "w-full h-full bg-black/80 z-0 fixed top-0 duration-300" : "duration-500"}></div>

            {/** Menu **/}
            <div className={nav ? "bg-brand-dark fixed top-0 left-0 w-[300px] h-full shadow-lg duration-500" : "absolute top-0 left-0 w-[300px] h-full ml-[-300px] duration-500"}>
                <div className="">
                    <div className={nav ? "absolute top-6 right-[-45px]" : ""} >
                        <IoCloseSharp className="text-4xl cursor-pointer text-slate-100" onClick={handleNav} />
                    </div>
                    <div className="h-full w-full ">

                    </div>
                </div>
            </div>
        </div >
    )
}
