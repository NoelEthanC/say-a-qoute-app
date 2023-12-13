import { Heart } from "lucide-react";

const QouteCard = () => {
  return (
    <article
      className="flex px-3 py-4 rounded-md text-2xl gap-x-2 hover:dark:bg-dark-gray-800 hover:bg-light-gray-800 hover:border
             dark:border-dark-gray-700 border-light-gray-700  "
    >
      {/* Like and Likes count button */}
      <div className="flex justify-center items-center flex-col space-y-1 ">
        <Heart className=" text-saq-green cursor-pointer " fill="#4caf50" />
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
  );
};

export default QouteCard;
