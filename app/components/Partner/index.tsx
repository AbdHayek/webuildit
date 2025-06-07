export default function Partner() {
  return (
    <section className="bg-[#070322] py-[10%] text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl">OUR PARTNERS</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20 px-6 max-w-6xl mx-auto">
        <img
          src="/assets/Service/cloud_solution.svg"
          alt="dataBites"
          className="h-10 md:h-12"
        />
        <img
          src="/assets/Service/cloud_solution.svg"
          alt="MarketSavy"
          className="h-10 md:h-12"
        />
        <img
          src="/assets/Service/cloud_solution.svg"
          alt="EpicDev"
          className="h-10 md:h-12"
        />
        <img
          src="/assets/Service/cloud_solution.svg"
          alt="BestBank"
          className="h-10 md:h-12"
        />
      </div>

      <div className="mt-26 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </section>
  );
}
