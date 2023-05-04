import img from "../assets/waves.png"

export const Softwares = () => {
    return (
        <div className='bg-dark text-slate-50 lg:py-14'>
            <div className="container mx-auto max-w-[1200px]">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className='pb-8'>
                            <h2 className='text-2xl md:text-3xl font-bold'>Digital Audio Workstation</h2>
                            <h3 className='text-lg text-brand'>The best audio editors</h3>
                        </div>
                        <div className='text-gray-400 text-sm'>
                            <p>A digital audio workstation (DAW) is a piece of software designed specifically to aid in the production of music recordings, film and television audio, and any other type of audio work that requires signal processing and mixing.</p>
                            <p>This kind of application is appropriate for beat makers, singer-songwriters, recording studios, film production companies, podcasters, vloggers, audiobook narrators, and pretty much anyone working in any industry where audio is a large component of the final product.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-gray-400 text-sm'>
                            <p>They provide the ability to record many tracks at once, bounce mono, stereo, and surround sound audio files, and edit waveforms. They let you cut, copy, paste, arrange, and loop audio. You can use audio units like VST plugins.</p>
                            <p>You can capture or produce MIDI data and reproduce sounds using synthesizers, samples, and one-shots. And of course, you can do signal processing, volume balancing, and final mixdowns. If you need most of these capabilities, then you need a top DAW and not some rinky-dink software.</p>
                        </div>
                        <img src={img} alt="" className="max-w-[270px] mx-auto mb-8 mt-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}
