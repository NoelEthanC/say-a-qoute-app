import React from "react";
import QuoteCard from "./QuoteCard";
import { fetchPaginatedQuotes } from "@/lib/actions";
import { DbQuote } from "@/lib/types";

const ScrollableQuoteList = async () => {
  const quotes = await fetchPaginatedQuotes();

  return (
    <div className="mt-4  ">
      {quotes?.map((quote) => (
        <QuoteCard quote={quote} key={quote.id} />
      ))}
    </div>
  );
};

export default ScrollableQuoteList;
