import { lobster } from "@/lib/fonts";
import clsx from "clsx";

const GhostVerticalText = () => {
  return (
    <div
      className={clsx(
        lobster.className,
        "dark:text-soft-gray text-soft-white -rotate-90  text-7xl font-semibold fixed -z-20 tracking-widest -left-36 bottom-64"
      )}
    >
      Say A Quote
    </div>
  );
};

export default GhostVerticalText;
