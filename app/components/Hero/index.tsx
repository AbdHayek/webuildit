import Navbar from "../Navbar";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white">
      <Navbar />

      <video
        className="h-[100%]  w-full  object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/assets/Hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-[65%] left-0 w-full z-10 flex items-center justify-center text-center px-4">
        <div className="mt-10 animate-bounce">
          <svg
            width="59"
            height="57"
            viewBox="0 0 59 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.8147e-06 -2.57897e-06L29.5 21.2687L59 0L59 10.4216L29.5 31.6903L3.35915e-06 10.4216L3.8147e-06 -2.57897e-06ZM2.70837e-06 25.3097L29.5 46.5784L59 25.3097L59 35.7313L29.5 57L2.25283e-06 35.7313L2.70837e-06 25.3097Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
