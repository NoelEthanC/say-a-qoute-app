import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md  dark:bg-dark-gray-700 border-light-gray-700 ",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
