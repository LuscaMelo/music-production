import img1 from "../assets/mixing.jpg"
import img2 from "../assets/mastering.jpg"
import img3 from "../assets/recording.jpg"

import { RxMixerHorizontal, RxMixerVertical } from "react-icons/rx"
import { MdPiano } from "react-icons/md"

export default function Highlights() {
    return (
        <div className="bg-dark flex items-center">
            <div className="container mx-auto">
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='bg-contrast'>
                        <div className="h-[150px]">
                            <img src={img1} alt="" className="h-[150px] w-full object-cover" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <RxMixerHorizontal className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Mixing</h1>
                            </div>
                            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                    <div className='bg-contrast'>
                        <div className="h-[150px]">
                            <img src={img2} alt="" className="h-[150px] w-full object-cover" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <RxMixerVertical className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Mastering</h1>
                            </div>
                            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                    <div className='bg-contrast'>
                        <div className="h-[150px]">
                            <img src={img3} alt="" className="h-[150px] w-full object-cover" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <MdPiano className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Recording</h1>
                            </div>
                            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                    <div className='bg-contrast'>
                        <div className="h-[150px]">
                            <img src={img3} alt="" className="h-[150px] w-full object-cover" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <MdPiano className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Recording</h1>
                            </div>
                            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
