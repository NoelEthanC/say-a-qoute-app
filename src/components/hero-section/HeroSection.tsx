import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { lobster } from "@/lib/fonts";
import clsx from "clsx";
import { Heart, QuoteIcon } from "lucide-react";
import Footer from "./Footer";
import CTAButton from "./CTAButton";
import QouteCard from "./QouteCard";

const HeroSection = () => {
  return (
    <div className="col-span-4  ">
      <section className=" mt-10  ">
        {/*header the name */}
        <header className="">
          <h1 className=" text-6xl lg:text-7xl font-extrabold  flex ">
            <>SayA</>
            <span className={clsx(lobster.className, "text-saq-green flex ")}>
              <>Quote</>
              <QuoteIcon />
            </span>
          </h1>
          <h2
            className="my-6 dark:text-light-gray-700/80 text-dark-gray-700/80 text-
              tracking- text-2xl lg:text-3xl "
          >
            {" "}
            "Discover, Share and Amplify the power of quotes to inspire and
            uplift others on the journey of life."{" "}
          </h2>
        </header>

        {/* main section */}
        <main className="">
          {/* CTA - Add a Qoute  , gradient*/}
          <CTAButton />

          {/* developers favourite qoutes section  */}
          <div className="mt-6 w-full ">
            <h5
              className={clsx(
                "text-lg dark:text-light-gray-700/80 text-dark-gray-700/80 uppercase )",
                "text-saq-green"
              )}
            >
              {/* Developer's Favourite Qoute */}
            </h5>
            <QouteCard />
          </div>
        </main>

        {/* footer */}
        <Footer />
      </section>
    </div>
  );
};
export default HeroSection;
