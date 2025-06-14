
import Image from "next/image"

export default function AboutBg() {
    return (
        <section
            className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: "url('/assets/AboutUs/cover.jpg')" }}
        >
            <div className="ml-[10%] text-white">
                <h2 className="text-8xl font-meduim">About Us</h2>
            </div>
        </section>

    )
}

