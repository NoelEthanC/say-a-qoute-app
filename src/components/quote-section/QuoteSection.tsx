import { Suspense } from "react";
import CategoryTabs from "./CategoryTabs";
import ScrollableQuoteList from "./ScrollableQuoteList";
import ScrollableQuoteListSkeleton from "../skeletons/ScrollableQuoteListSkeleton";

interface QouteSectionProps {
  category: string | string[] | undefined;
}

const QouteSection: React.FC<QouteSectionProps> = ({ category }) => {
  return (
    <div className="col-span-4 mt-10    ">
      <header className="">
        <CategoryTabs />
      </header>
      <Suspense
        key={category?.toString() || ""}
        fallback={<ScrollableQuoteListSkeleton />}
      >
        <ScrollableQuoteList category={category} />
      </Suspense>
    </div>
  );
};

export default QouteSection;
