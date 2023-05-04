import img1 from "../assets/mixing.jpg"
import img2 from "../assets/mastering.jpg"
import img3 from "../assets/recording.jpg"
import img4 from "../assets/sound.jpg"

import { RxMixerHorizontal, RxMixerVertical } from "react-icons/rx"
import { MdPiano } from "react-icons/md"
import { AiTwotoneAudio } from "react-icons/ai"

export default function Highlights() {
    return (
        <div className='bg-dark text-slate-50'>
            <div className="container max-w-[1200px] mx-auto">
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold'>Work processes</h2>
                    <h3 className='text-lg text-brand'>Audio editing</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-[1200px] mx-auto">
                    <div className='bg-contrast rounded-md overflow-hidden md:col-span-5'>
                        <div className="h-[180px]">
                            <img src={img1} alt="" className="h-[180px] w-full object-cover hover:scale-105 duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <RxMixerHorizontal className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Mixing</h1>
                            </div>
                            <p className="text-sm text-gray-400 pt-3">At the simplest level, mixing is the process of balancing, treating and combining multitrack material into a multichannel format. Oftentimes, that format is two-channel stereo.</p>
                        </div>
                    </div>
                    <div className='bg-contrast rounded-md overflow-hidden md:col-span-7'>
                        <div className="h-[180px]">
                            <img src={img2} alt="" className="h-[180px] w-full object-cover hover:scale-105 duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <RxMixerVertical className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Mastering</h1>
                            </div>
                            <p className="text-sm text-gray-400 pt-3">Mastering happens after the mixing process. This is the final step to creating a master, which is then used to generate compact discs, vinyl cutting masters and digital files for streaming or download.</p>
                        </div>
                    </div>
                    <div className='bg-contrast rounded-md overflow-hidden md:col-span-7'>
                        <div className="h-[180px]">
                            <img src={img3} alt="" className="h-[180px] w-full object-cover hover:scale-105 duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <AiTwotoneAudio className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Recording</h1>
                            </div>
                            <p className="text-sm text-gray-400 pt-3">Music recording, physical record of a musical performance that can then be played back, or reproduced.</p>
                        </div>
                    </div>
                    <div className='bg-contrast rounded-md overflow-hidden md:col-span-5'>
                        <div className="h-[180px]">
                            <img src={img4} alt="" className="h-[180px] w-full object-cover hover:scale-105 duration-300" />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2">
                                <MdPiano className="text-brand text-2xl" />
                                <h1 className="text-xl text-gray-50 font-bold">Sound Design</h1>
                            </div>
                            <p className="text-sm text-gray-400 pt-3">Sound design is the craft of creating an overall sonic palette for a piece of art, especially media like film, TV shows, live theater, commercials, and podcasts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
