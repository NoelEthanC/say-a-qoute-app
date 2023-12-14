import React from "react";
import Link from "next/link";
import QuoteCard from "./QuoteCard";
import { fetchPaginatedQuotes } from "@/lib/actions";
import { DbQuote } from "@/lib/types";
import { Info } from "lucide-react";

const ScrollableQuoteList = async ({
  category,
}: {
  category: string | string[] | undefined;
}) => {
  const quotes = await fetchPaginatedQuotes(category);

  return (
    <div className="mt-4">
      {quotes && quotes.length > 0 ? (
        quotes.map((quote) => <QuoteCard quote={quote} key={quote.id} />)
      ) : (
        <div className="flex flex-col  items-center text-gray-500 py-8">
          <Info className="text-5xl mb-4" />
          <p className="text-xl font-semibold mb-2">
            No quotes available in this category.
          </p>
          <p className="text-lg text-center ">
            Check out other categories for inspiring quotes or the latest quotes
          </p>
          {/* Provide links to other category tabs */}
          <div className="mt-4 space-x-4">
            <Link
              href="/?category=recent"
              className="text-blue-500 hover:text-blue-700"
            >
              Latest
            </Link>
            <Link
              href="/?category=motivation"
              className="text-blue-500 hover:text-blue-700"
            >
              Motivation
            </Link>
            {/* Add more category links as needed */}
          </div>
          {/* Attractive link to prompt user to create a new quote */}
          <div className="mt-6">
            <Link
              href="/add-quote"
              // className="text-blue-600 hover:text-blue-800 font-semibold"
              className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-blue-800 text-transparent
               bg-clip-text hover:from-blue-800 hover:to-blue-600 hover:bg-clip-text"
            >
              Be the first to create a quote in this category!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableQuoteList;
