import HeroSection from "@/components/hero-section/HeroSection";
import QouteSection from "@/components/quote-section/QuoteSection";

const MainPage = async ({
  searchParams,
}: {
  searchParams: { category: string | string[] | undefined };
}) => {
  return (
    <main
      className=" bg-light-gray-900  dark:bg-dark-gray-900  text-pure-gray dark:text-pure-white
     mx-auto min-h-screen px-6  max-w-full md:px-12 md:py-16 lg:px-24 lg:py-0 "
    >
      <div className="relative  z-30  bg-transparent  ">
        <div className="lg:flex lg:justify-between lg:gap-4  max-w-5xl mx-auto ">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-14">
            <HeroSection />
          </header>
          <main className=" pt-4 lg:pt-24 lg:w-1/2 lg:py-14">
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <QouteSection category={searchParams.category} />
            </section>
          </main>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
