"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import TrackItem from "./track-item";
import { useMediaQuery } from "react-responsive";
interface ProgressTrackProps {
  currentStep: number;
  stepCount: number;
  stepProgress: number;
}

export default function ProgressTrack({
  currentStep,
  stepCount,
  stepProgress,
}: ProgressTrackProps) {
  const [isMounted, setIsMounted] = useState(false);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="min-h-[min-content] flex justify-center order-1 md:order-2 max-w-[max-content]">
      <motion.div
        // In order to paint progress-track properly during initial page load
        key={isMounted + ""}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "max-h-[100px]  md:max-h-full min-w-[100vw]",
          "left-0 top-0 flex justify-center backdrop-blur-md md:block md:min-w-[min-content]"
        )}
      >
        <div className="grid relative grid-flow-col min-w-[min-content] md:grid-flow-row gap-5 md:gap-4 border border-[#7042f88b] p-1 rounded-full transition-all">
          {Array(stepCount)
            .fill(0)
            .map((_, idx) => {
              const isPassed = idx < currentStep;
              const isCurrent = idx === currentStep;
              return (
                <TrackItem
                  key={idx}
                  value={idx + 1}
                  offset={isCurrent && !isMobile ? 100 : 0}
                  active={isPassed}
                  vertical={!isTablet}
                  progressBar={idx !== 0}
                  progress={isCurrent ? stepProgress : isPassed ? 100 : 0}
                />
              );
            })}
        </div>
      </motion.div>
    </div>
  );
}
