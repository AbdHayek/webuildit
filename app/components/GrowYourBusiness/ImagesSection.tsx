import Image from 'next/image';

export const ImagesSection = ({
  title,
  image,
  position,
  classes
}: {
  title: string[];
  image: string[];
  position: string[];
  classes: string;
}) => {
  const isSingle = image.length === 1;

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-12 px-4">
      <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[550px] xl:w-[600px] xl:h-[650px] 2xl:w-[671px] 2xl:h-[718px]">
        <div className="relative w-full h-full">
          {/* Overlay */}
          <div className={classes} />
          {isSingle ? (
            <div className="absolute top-0 left-0 right-0 h-[100%] overflow-hidden">
              <Image
                src={image[0]}
                alt={title[0]}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                  {title[0]}
                </h2>
              </div>
            </div>
          ) : (
            <>
              {/* Top Section */}
              {image[0] && title[0] && (
                <div className="absolute top-0 left-0 right-0 h-1/4 overflow-hidden">
                  <Image
                    src={image[0]}
                    alt={title[0]}
                    fill
                    className={`object-cover object-${position[0]}`}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
                    priority
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                      {title[0]}
                    </h2>
                  </div>
                </div>
              )}

              {/* Middle Section */}
              {image[1] && title[1] && (
                <div className="absolute top-1/4 left-0 right-0 h-1/4 overflow-hidden">
                  <Image
                    src={image[1]}
                    alt={title[1]}
                    fill
                    className={`object-cover object-${position[1]}`}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                      {title[1]}
                    </h2>
                  </div>
                </div>
              )}

              {/* Bottom Section */}
              {image[2] && title[2] && (
                <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                  <Image
                    src={image[2]}
                    alt={title[2]}
                    fill
                    className={`object-cover object-${position[2]}`}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
                  />
                  <div className="absolute inset-0 bottom-[30%] flex flex-col justify-center items-center px-4 text-white text-center z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide">
                      {title[2]}
                    </h2>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
