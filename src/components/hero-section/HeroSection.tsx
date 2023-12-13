import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { lobster } from "@/lib/fonts";
import clsx from "clsx";
import { Heart, QuoteIcon } from "lucide-react";
import Footer from "./Footer";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <div className="col-span-4  ">
      <section className=" mt-10  ">
        {/*header the name */}
        <header className="">
          <h1 className="text-7xl font-extrabold  flex ">
            <>SayA</>
            <span className={clsx(lobster.className, "text-saq-green flex ")}>
              <>Quote</>
              <QuoteIcon />
            </span>
          </h1>
          <h2
            className="my-6 dark:text-light-gray-700/80 text-dark-gray-700/80 text-
              tracking- text-3xl "
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
            <article
              className="flex px-3 py-4 rounded-md text-2xl gap-x-2 dark:bg-dark-gray-800 bg-light-gray-800 border
             dark:border-dark-gray-700 border-light-gray-700  "
            >
              {/* Like and Likes count button */}
              <div className="flex justify-center items-center flex-col space-y-1 ">
                <Heart
                  className=" text-saq-green cursor-pointer "
                  fill="#4caf50"
                />
                <span className=" ">10</span>
              </div>
              {/* qoute  */}
              <div className="pl-4 ">
                <div className="tracking-[0.015em] font-bold flex ">
                  <span className=" dark:text-light-gray-700 text-dark-gray-700 px-1 text-3xl ">
                    &ldquo;
                  </span>
                  <p className="">
                    Code is like humor. When you have to explain it, it’s bad.
                    <span className="dark:text-light-gray-700 text-dark-gray-700  text-3xl ">
                      &rdquo;
                    </span>
                  </p>
                </div>
                <footer className="mt-4">
                  {/* <div className="flex"> */}
                  <div className="pl-5 flex gap-x-2 dark:text-light-gray-700 text-dark-gray-700/90 ">
                    <span className="">&#8210;</span>
                    <p className=""> Cory House</p> |
                    <span className=" "> Programmer </span>
                    {/* </div> */}
                  </div>

                  <div className="flex gap-x-3  pl-5 mt-4 ">
                    <span className="bg-green-800/50 text-lime-300 text-base rounded-full px-3  ">
                      life
                    </span>
                    <span className="bg-green-800/80 text-lime-300 text-base rounded-full px-3  ">
                      life
                    </span>
                    <span className="bg-green-800/80 text-lime-300 text-base rounded-full px-3  ">
                      life
                    </span>
                    {/* tags */}
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </main>

        {/* footer */}
        <Footer />
      </section>
    </div>
  );
};
export default HeroSection;
