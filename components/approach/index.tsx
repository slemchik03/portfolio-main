import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import { ComponentProps, useRef } from "react";
import useContentProgress from "@/lib/hooks/useContentProgress";
import approachCards from "@/lib/mocks/approachCards";
import { cn } from "@/lib/utils";

export interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isActive?: boolean;
  des: string;
}
const canvasRevealEffects: ComponentProps<typeof CanvasRevealEffect>[] = [
  {
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
  },
  {
    animationSpeed: 3,
    containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
    colors: [
      // change the colors of the
      [255, 166, 158],
      [221, 255, 247],
    ],
    dotSize: 2,
  },
  {
    animationSpeed: 3,
    containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
    colors: [[125, 211, 252]],
  },
];
const Approach = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress } = useContentProgress({ containerRef });
  const percentsPerCard = 100 / approachCards.length;
  const countOfActiveCards = Math.floor(progress / percentsPerCard);

  return (
    <section ref={containerRef} className="w-full min-h-[300vh] py-20 ">
      <div
        className={cn(
          "sticky top-0 left-0 z-[10] transition-all",
          countOfActiveCards > 0 && "pt-20"
        )}
      >
        <h1 className="heading">
          My <span className="text-purple">approach</span>
        </h1>
        {/* remove bg-white dark:bg-black */}
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          {approachCards.map((cardProps, idx) => (
            <Card key={idx} isActive={idx < countOfActiveCards} {...cardProps}>
              <CanvasRevealEffect {...canvasRevealEffects[idx]} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  isActive,
  // add this one for the desc
  des,
}: CardProps) => {
  return (
    <div
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className={cn(
            `text-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
         transition duration-200 min-w-40 mx-auto flex items-center justify-center`,
            isActive && "opacity-0 -translate-y-4"
          )}
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className={cn(
            `dark:text-white text-center text-3xl opacity-0 relative z-10 text-black mt-4  font-bold transition duration-200`,
            isActive && "opacity-100 -translate-y-2 text-white"
          )}
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className={cn(
            `text-sm opacity-0 relative z-10 mt-4 text-center transition duration-200`,
            isActive && "opacity-100 -translate-y-2 text-white"
          )}
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
