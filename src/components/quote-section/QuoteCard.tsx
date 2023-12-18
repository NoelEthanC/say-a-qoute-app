import { DbQuote } from "@/lib/types";
import ClickableLikeButton from "../general/ClickableLikeButton";
import { fetchQuoteLikes } from "@/lib/actions";
import { cookies } from "next/headers";

const QuoteCard = async ({ quote }: { quote: DbQuote | any }) => {
  const likes = await fetchQuoteLikes(quote.id);

  const likeCookie = cookies().get(`uid-${quote.id}`)?.value;

  return (
    <article
      className="flex px-3 py-4 border-b  rounded-md text-2xl gap-x-2 hover:dark:bg-dark-gray-800 hover:bg-light-gray-800 hover:border
             dark:border-dark-gray-700 border-light-gray-700  "
    >
      {/* Like and Likes count button */}
      <ClickableLikeButton
        key={quote.id}
        likeCookie={likeCookie}
        quoteID={quote.id}
        likes={likes}
      />
      {/* qoute  */}
      <div className="pl-4 ">
        <div className="tracking-[0.015em] font-bold flex ">
          <span className=" dark:text-light-gray-700 text-dark-gray-700 px-1 text-3xl ">
            &ldquo;
          </span>
          <p className="">
            {quote.quote}
            <span className="dark:text-light-gray-700 text-dark-gray-700  text-3xl ">
              &rdquo;
            </span>
          </p>
        </div>
        <footer className="mt-4">
          <div className="pl-5 flex gap-x-2 dark:text-light-gray-700 text-dark-gray-700/90 ">
            <span className="">&#8210;</span>
            <p className=""> {quote.author}</p>
          </div>

          <div className="flex gap-x-3  pl-5 mt-4 ">
            <span className="bg-saq-green text-green-100 text-base rounded-full px-3  ">
              {quote.category}
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default QuoteCard;
