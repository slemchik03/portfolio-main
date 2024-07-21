import { WorkExperienceItem } from "@/data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/MovingBorders";

interface ExperienceListProps {
  workExperienceList: WorkExperienceItem[];
  activeElementIdx: number;
}

export default function ExperienceList({
  workExperienceList,
  activeElementIdx,
}: ExperienceListProps) {
  return (
    <div className="relative order-2 md:order-1 grid h-[200px] items-center justify-center">
      {workExperienceList.map((el, idx) => (
        <div
          key={el.id}
          className={cn(
            "absolute top-0 left-0 opacity-0 -translate-y-2 scale-75 transition-all duration-300 ease-in-out",
            idx === activeElementIdx && "opacity-100 scale-100 translate-y-0"
          )}
        >
          <Button
            duration={10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 h-[200px] text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={el.thumbnail}
                alt={el.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {el.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {el.desc}
                </p>
              </div>
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
}
