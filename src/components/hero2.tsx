import hero2 from "../assets/heroimg.jpeg";

function Hero2() {
  return (
    <div>
      <div className="max-w-screen h-[745px] relative mb-48 md:mb-0">
        <img
          src={hero2}
          className="
    2xl:w-[689px] 2xl:h-[745px]
    xl:w-[639px] xl:h-[695px]
    lg:w-[589px] lg:h-[645px]
    md:w-[539px] md:h-[595px]
    sm:w-[489px] sm:h-[545px]
    w-[439px] h-[495px]
    absolute right-0 top-[-1px] object-cover
  "
        />
        <p className=" absolute ml-5 sm:ml-20 top-[300px] sm:top-[259px] text-6xl sm:text-8xl font-semibold text-left dark:text-[#fffafa] text-[#000000]">
          Wabaytech{" "}
        </p>
        <p className="max-w-[450px]  absolute ml-6 sm:left-[70px] top-[400px] sm:top-[413px] text-xl text-left dark:text-[#fffafa] text-[#000000]">
          Wbaytech est une société dynamique spécialisée dans le développement
          informatique et le conseil.{" "}
        </p>

        <div className="absolute z-20 grid w-full grid-cols-1 gap-6 px-6 pt-16 md:grid-cols-3 md:gap-8 md:pt-20 md:px-20 top-[500px]">
          <div className="flex-col items-start justify-start p-4 ">
            <div className="bg-black dark:bg-white h-[4px] w-full"></div>
            <div className="font-semibold text-black dark:text-white text-xl md:text-[24px] mt-3 ">
              01
            </div>
            <div className="text-black dark:text-white text-base md:text-[20px] mt-2 font-medium ">
              Conseil en informatique
            </div>
          </div>
          <div className="flex-col items-start justify-start p-4">
            <div className="bg-black dark:bg-white h-[4px] w-full"></div>
            <div className="font-semibold text-black dark:text-white text-xl md:text-[24px] mt-3 ">
              02
            </div>
            <div className="text-black dark:text-white text-base md:text-[20px] mt-2 font-medium ">
              Développement sur mesure
            </div>
          </div>
          <div className="flex-col items-start justify-start p-4 ">
            <div className="bg-black dark:bg-white h-[4px] w-full"></div>
            <div className="font-semibold text-black dark:text-white text-xl md:text-[24px] mt-3 ">
              03
            </div>
            <div className="text-black dark:text-white text-base md:text-[20px] mt-2 font-medium ">
              Support et maintenance technique
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
