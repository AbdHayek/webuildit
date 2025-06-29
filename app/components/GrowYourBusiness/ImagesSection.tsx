export const ImagesSection = ({ title, image }: { title: Array<string>, image: Array<string> }) => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative rounded-full overflow-hidden w-[671px] h-[718px]">
        {/* One shape divided into 3 vertical sections */}
        <div className="relative w-full h-full">
          {/* Top Section - 1/3 of the circle */}
          <div className="absolute top-0 left-0 right-0 h-1/3 overflow-hidden">
            <img
              src={image[0]}
              alt="Visual Process Top"
              className="w-full h-full object-cover"
            />

            {/* Centered Text for Top Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                {title[0]}
              </h2>
            </div>
          </div>

          {/* Middle Section - 1/3 of the circle */}
          <div className="absolute top-1/3 left-0 right-0 h-1/3 overflow-hidden">
            <img
              src={image[1]}
              alt="Visual Process Middle"
              className="w-full h-full object-cover"
            />

            {/* Centered Text for Middle Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                {title[1]}
              </h2>
            </div>
          </div>

          {/* Bottom Section - 1/3 of the circle */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
            <img
              src={image[2]}
              alt="Visual Process Bottom"
              className="w-full h-full object-cover"
            />

            {/* Centered Text for Bottom Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
                {title[2]}
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};