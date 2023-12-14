import QuoteCardSkeleton from "./QuoteCardSkeleton";

const ScrollableQuoteListSkeleton = () => {
  const skeletonItems = Array.from({ length: 5 }, (_, index) => (
    <QuoteCardSkeleton key={index} />
  ));

  return <div className="mt-4 w-full ">{skeletonItems}</div>;
};

export default ScrollableQuoteListSkeleton;
