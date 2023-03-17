import Highlights from "./Highlights"

export const SeeMore = () => {
    return (
        <div className='bg-dark text-slate-50 lg:py-16'>
            <div className="container mx-auto grid gap-10  lg:grid-cols-2 items-center">
                <div>
                    <div className='pb-8'>
                        <h1 className='text-4xl font-bold'>What Is<br className="md:hidden" /> Music Production?</h1>
                        <h2 className='text-xl text-brand'>Learn the Basics</h2>
                    </div>
                    <div className='text-gray-400'>
                        <p>Music production is the process of writing, recording, and manipulating music for distribution. Every song you’ve ever heard has gone through this process of music production.</p>
                        <p>Music is produced nearly every second. On Spotify alone, 60,000 new tracks are uploaded every day. This implies that approximately 22 million tracks are uploaded to Spotify each year.</p>
                        <p>Of course, not all songs are popular or even known. Some songs have an extremely niche following, if any at all. To know how songs are made, what makes them popular, and how to produce the most impactful music, you should understand the mechanics of the music industry.</p>
                        <p>Music production encompasses the entire life cycle of a piece of music. It’s a multistage process that includes the conception of an idea, songwriting, composition, recording music, mixing, and mastering. While the process may seem long and daunting, knowing what happens at each stage can help start your music production journey.</p>
                        <p>This article is for anyone who is still a beginner in their music career. It’s a one-stop tutorial to help get you started in the music production process.</p>
                        <p className="pt-8 underline underline-offset-4">In our course you will learn:</p>
                    </div>
                </div>
                <div>
                    <Highlights />
                </div>
            </div>
        </div>
    )
}
