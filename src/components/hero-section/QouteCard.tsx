import { Heart } from "lucide-react";

const QouteCard = () => {
  return (
    <article
      className="flex px-3 py-4 rounded-md text-2xl gap-x-2 dark:bg-dark-gray-800 bg-light-gray-800 border
             dark:border-dark-gray-700 border-light-gray-700  "
    >
      <div className="flex justify-center items-center flex-col space-y-1 ">
        <Heart className=" text-saq-green cursor-pointer " fill="#4caf50" />
      </div>
      {/* qoute  */}
      <div className="pl-4 ">
        <div className="tracking-[0.015em] font-bold flex ">
          <span className=" dark:text-light-gray-700 text-dark-gray-700 px-1 text-xl lg:text-3xl ">
            &ldquo;
          </span>
          <p className="">
            Code is like humor. When you have to explain it, it’s bad.
            <span className="dark:text-light-gray-700 text-dark-gray-700  text-xl lg:text-3xl ">
              &rdquo;
            </span>
          </p>
        </div>
        <footer className="mt-4">
          <div className="pl-5 flex gap-x-2 dark:text-light-gray-700 text-dark-gray-700/90 ">
            <span className="">&#8210;</span>
            <p className=""> Cory House</p>
          </div>

          <div className="flex gap-x-3  pl-5 mt-4 ">
            <span className="bg-saq-green text-green-100 text-base rounded-full px-3  ">
              life
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default QouteCard;
