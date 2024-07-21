import Marquee from "../Marquee";

export default function TechStack({ list }: { list: string[] }) {
  const midIndex = Math.floor(list.length / 2);
  const leftLists = list.slice(0, midIndex);
  const rightLists = list.slice(midIndex);

  return (
    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 top-0 lg:-right-2">
      {/* tech stack lists */}
      <Marquee
        containerClassName="flex flex-col"
        direction="top"
        gap="32px"
        speed={10000}
      >
        {leftLists.map((item, i) => {
          return (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          );
        })}
      </Marquee>
      <Marquee
        containerClassName="flex flex-col"
        direction="down"
        gap="32px"
        speed={3000}
      >
        {rightLists.map((item, i) => {
          return (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}
