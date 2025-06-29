import Image from 'next/image';

export const ImagesSection = ({ title, image }: { title: Array<string>, image: Array<string> }) => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[550px] xl:w-[600px] xl:h-[650px] 2xl:w-[671px] 2xl:h-[718px]">
        {/* One shape divided into 3 vertical sections */}
        <div className="relative w-full h-full">
          {/* Top Section - 1/3 of the circle */}
          <div className="absolute top-0 left-0 right-0 h-1/4 overflow-hidden">
            <Image
              src={image[0]}
              alt="Visual Process Top"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
              priority
            />

            {/* Centered Text for Top Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                {title[0]}
              </h2>
            </div>
          </div>

          {/* Middle Section - 1/3 of the circle */}
          <div className="absolute top-1/4 left-0 right-0 h-1/4 overflow-hidden">
            <Image
              src={image[1]}
              alt="Visual Process Middle"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
            />

            {/* Centered Text for Middle Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                {title[1]}
              </h2>
            </div>
          </div>

          {/* Bottom Section - 1/3 of the circle */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
            <Image
              src={image[2]}
              alt="Visual Process Bottom"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
            />

            {/* Centered Text for Bottom Section */}
            <div className="absolute inset-0 bottom-[30%] flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                {title[2]}
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};