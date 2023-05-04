import { BsTwitter, BsFacebook, BsGoogle, BsLinkedin, BsGithub } from "react-icons/bs"

export const Footer = () => {
    return (
        <div className='bg-dark text-slate-50 border-t border-gray-900 py-10'>
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex justify-center text-xl font-bold">
                    <h3 className="text-brand">MUSIC</h3>
                    <h3 className="text-brand-dark">PRODUCTION.</h3>
                </div>
                <div>
                    <p className="text-sm text-gray-600 text-center py-5 px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquam culpa ad eveniet possimus dignissimos aut reiciendis.</p>
                </div>
                <div className="flex justify-center gap-2 text-xl mt-8 text-gray-400">
                    <BsTwitter className="cursor-pointer hover:text-white duration-300" />
                    <BsFacebook className="cursor-pointer hover:text-white duration-300" />
                    <BsGoogle className="cursor-pointer hover:text-white duration-300" />
                    <BsLinkedin className="cursor-pointer hover:text-white duration-300" />
                    <BsGithub className="cursor-pointer hover:text-white duration-300" />
                </div>
            </div>
        </div>
    )
}
