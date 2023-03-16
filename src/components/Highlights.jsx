import img1 from "../assets/mixing.jpg"
import img2 from "../assets/mastering.jpg"
import img3 from "../assets/recording.jpg"

export default function Highlights() {
    return (
        <div className="bg-dark lg:h-[30vh] flex items-center">
            <div className="container mx-auto">
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex items-center gap-4 p-6 bg-contrast text-gray-50 rounded-md'>
                        <div className="object-cover w-[400px]">
                            <img src={img1} alt="" className="rounded-md" />
                        </div>
                        <div>
                            <h1 className="text-xl text-gray-50 font-bold">Mixing</h1>
                            <p className="text-sm pt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-6 bg-contrast text-gray-50 rounded-md'>
                        <div className="object-cover w-[400px]">
                            <img src={img2} alt="" className="rounded-md" />
                        </div>
                        <div>
                            <h1 className="text-xl text-gray-50 font-bold">Mastering</h1>
                            <p className="text-sm pt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-6 bg-contrast text-gray-50 rounded-md'>
                        <div className="object-cover w-[400px]">
                            <img src={img3} alt="" className="rounded-md" />
                        </div>
                        <div>
                            <h1 className="text-xl text-gray-50 font-bold">Recording</h1>
                            <p className="text-sm pt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae adipisci nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
