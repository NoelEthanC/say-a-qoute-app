import { Skeleton } from "@/components/ui/skeleton";

const QuoteCardSkeleton = () => {
  return (
    <article className="flex px-3 py-4 border-b dark:border-dark-gray-700 border-light-gray-700 rounded-md text-2xl gap-x-2">
      {/* Skeleton for Like and Likes count button */}
      <div className="flex flex-col space-y-2 items-center">
        <Skeleton className="h-12 w-12  rounded-full" />
        <div className="">
          <Skeleton className="h-5 w-5" />
        </div>
      </div>
      {/* Skeleton for quote content */}
      <div className="pl-4 flex-grow">
        <div className="tracking-[0.015em] font-bold flex space-x-2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-[80%]" />
        </div>
        <footer className="mt-4">
          <div className="pl-5 flex gap-x-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-[40%]" />
          </div>
          <div className="flex gap-x-3 pl-5 mt-4">
            <Skeleton className="h-5 w-[60px] bg-saq-green rounded-full " />
          </div>
        </footer>
      </div>
    </article>
  );
};

export default QuoteCardSkeleton;
