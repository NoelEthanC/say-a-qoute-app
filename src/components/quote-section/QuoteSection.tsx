import CategoryTabs from "./CategoryTabs";
import ScrollableQuoteList from "./ScrollableQuoteList";

const QouteSection = () => {
  return (
    <div className="col-span-4 mt-10    ">
      <header className="">
        <CategoryTabs />
      </header>

      <ScrollableQuoteList />
    </div>
  );
};

export default QouteSection;
