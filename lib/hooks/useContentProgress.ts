import { useMotionValueEvent, useScroll } from "framer-motion";
import { RefObject, useState } from "react";

export default function useContentProgress({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement>;
}) {
  const [progress, setProgress] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTopOffset = y + containerRect.y;
    const newProgress =
      (y - containerTopOffset + window.innerHeight) /
      (containerRect.height / 100);

    setProgress(Math.min(Math.max(newProgress, 0), 100));
  });

  return { progress };
}
