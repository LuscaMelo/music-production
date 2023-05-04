export const SeeMore = () => {
    return (
        <div className='bg-dark text-slate-50 lg:py-14'>
            <div className="container grid md:grid-cols-2 gap-8 mx-auto max-w-[1200px]">
                <div>
                    <div className='pb-8'>
                        <h2 className='text-4xl font-bold'>What is<br className="md:hidden" /> Music Production?</h2>
                        <h3 className='text-xl text-brand'>Learn the Basics</h3>
                    </div>
                    <div className='text-gray-400'>
                        <p>Music production is the process of writing, recording, and manipulating music for distribution. Every song you’ve ever heard has gone through this process of music production.</p>
                        <p>Music is produced nearly every second. On Spotify alone, 60,000 new tracks are uploaded every day. This implies that approximately 22 million tracks are uploaded to Spotify each year.</p>
                        <p>Of course, not all songs are popular or even known. Some songs have an extremely niche following, if any at all. To know how songs are made, what makes them popular, and how to produce the most impactful music, you should understand the mechanics of the music industry.</p>
                        <p>Music production encompasses the entire life cycle of a piece of music. It’s a multistage process that includes the conception of an idea, songwriting, composition, recording music, mixing, and mastering. While the process may seem long and daunting, knowing what happens at each stage can help start your music production journey.</p>
                    </div>
                </div>
                <div>
                    <div className='text-gray-400'>
                        <p className="mt-[-30px] md:mt-0">This course is for anyone who is still a beginner in their music career. It’s a one-stop tutorial to help get you started in the music production process.</p>
                        <div className='pb-8 text-slate-50 py-8'>
                            <h2 className='text-4xl font-bold'>The work of a Music Producer</h2>
                            <h3 className='text-xl text-brand'>Who is this professional</h3>
                        </div>
                        <p>A producer brings together the various requirements of the music production process. They combine the necessary creative talent, resources, external stakeholders, and software to ensure that the music production process is streamlined and efficient.</p>
                        <p>Producers oversee the project in real time and manage the logistics and budgets. The role of the producer involves but isn’t limited to:</p>
                        <ul className="list-disc pl-4 py-3">
                            <li>
                                <p><span className="underline underline-offset-4">Running recording sessions.</span> The first role of a producer is to book, and provide other logistical help with, recording sessions. Depending on the schedule and production budget, a producer books the session and ensures that everyone follows the overall production workflow.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
