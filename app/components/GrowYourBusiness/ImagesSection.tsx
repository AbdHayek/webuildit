import Image from 'next/image';
import './GrowYourBusinessStyle.css';


export const ImagesSection = ({
  title,
  image,
  position,
  classes,
  sectionStyles = [],
}: {
  title: string[];
  image: string[];
  position: string[];
  classes: string;
  sectionStyles: string[];
}) => {
  const isSingle = image.length === 1;

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-12 px-4 img-section-padding">
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
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-[50%] w-[80%] uppercase tracking-wide">
                  {title[0]}
                </h2>
              </div>
            </div>
          ) : (
            <>
            {title.map((t, i) => {
              if (!image[i] || !title[i]) return null;
          
              const textPosition =  'inset-0';
          
              return (
                <div
                  key={i}
                  className={`absolute left-0 right-0 overflow-hidden ${sectionStyles[i]}`}
                >
                  <Image
                    src={image[i]}
                    alt={title[i]}
                    fill
                    className={`object-cover  object-${position[i]}`}
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 500px, (max-width: 1536px) 600px, 671px"
                    priority={i === 0}
                  />
                  <div
                    className={`absolute ${textPosition} flex flex-col justify-center items-center px-4 text-white text-center z-10`}
                  >
                    <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${i === 1 ? 'mt-[5%]' : ''} ${i === 2 ? 'mb-[30%]' : 'mb-0'} uppercase tracking-wide`}>
                      {title[i]}
                    </h2>
                  </div>
                </div>
              );
            })}
          </>
          
          )}
        </div>
      </div>
    </section>
  );
};
