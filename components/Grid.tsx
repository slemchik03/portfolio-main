import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import useContentProgress from "@/lib/hooks/useContentProgress";
import { useRef } from "react";
import { Variants } from "framer-motion";

function getGridItemVariants(): Variants {
  return {
    visible: {
      scale: [0.6, 1],
      opacity: [0, 1],
    },
    hidden: {
      scale: [1, 0.6],
      opacity: [1, 0],
    },
    initial: {
      opacity: 0,
      scale: 0.6,
    },
  };
}

export default function Grid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress } = useContentProgress({ containerRef });
  const percentPerElement = 100 / gridItems.length;
  const activeElementsCount = Math.floor(progress / percentPerElement);
  const gridItemVariants = getGridItemVariants();
  console.log(progress);

  return (
    <section id="about" ref={containerRef} className="min-h-[200vh]">
      <div className="sticky top-0">
        <BentoGrid className="w-full py-20">
          {gridItems.map((el, idx) => (
            <BentoGridItem
              key={el.id}
              gridElement={el}
              variants={gridItemVariants}
              initial="initial"
              animate={idx < activeElementsCount ? "visible" : "hidden"}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
