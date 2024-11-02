import { cn } from "@/lib/utils";

function CardGrid({ children, className }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 w-[min(1400px,85vw)] place-items-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default CardGrid;
