type bgContent = {
    title: string,
    img: string
}

export default function Background({ title, img }: bgContent) {
    return (
        <section
            className="relative bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="text-white pl-[15%] pr-[15%]">
                <h2 className="text-5xl lg:text-8xl  md:text-7xl font-meduim">{title}</h2>
            </div>
        </section>

    )
}

