type bgContent = {
    title: string,
    img: string
}

export default function Background({ title, img }: bgContent) {
    return (
        <section
            className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="ml-[10%] text-white">
                <h2 className="text-5xl lg:text-8xl  md:text-7xl font-meduim">{title}</h2>
            </div>
        </section>

    )
}

