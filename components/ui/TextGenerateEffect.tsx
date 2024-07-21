"use client";
import { useEffect } from "react";
import { AnimationScope, motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
interface WordsProps {
  words: string[];
  scope: AnimationScope;
  wordClassNames?: (string | undefined)[];
}
function Words({ wordClassNames, scope, words }: WordsProps) {
  return (
    <motion.div ref={scope}>
      {words.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className={cn(`opacity-0`, wordClassNames?.[idx])}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
export const TextGenerateEffect = ({
  words,
  className,
  wordsClassNames,
}: {
  words: string;
  className?: string;
  wordsClassNames?: (string | undefined)[];
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate, wordsArray]);

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          <Words
            wordClassNames={wordsClassNames}
            words={wordsArray}
            scope={scope}
          />
        </div>
      </div>
    </div>
  );
};
