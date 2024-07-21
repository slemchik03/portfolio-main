import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface TrackItemProps {
  value: number;
  offset?: number;
  active?: boolean;
  progress: number;
  progressBar?: boolean;
  vertical?: boolean;
}
interface AnimatedTrackItemBgProps {
  active?: boolean;
  progress: number;
}

function ProgressBar({
  vertical,
  progress,
}: {
  vertical?: boolean;
  progress: number;
}) {
  const progressMotionValue = useMotionValue(progress);
  const magnitude = useTransform(progressMotionValue, [0, 100], ["0%", "100%"]);
  return (
    <div
      className={cn(
        vertical ? "track-progress-bar" : "track-progress-bar-horizontal"
      )}
      style={{
        [vertical ? "height" : "width"]: magnitude.get(),
      }}
    ></div>
  );
}
function AnimatedTrackItemBg({ active, progress }: AnimatedTrackItemBgProps) {
  const progressMotionValue = useMotionValue(progress);
  const opacity = useTransform(progressMotionValue, [0, 100], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className={cn("track-item-bg")}
    ></motion.div>
  );
}
export default function TrackItem({
  value,
  offset,
  active,
  progress,
  vertical,
  progressBar,
}: TrackItemProps) {
  const progressMotionValue = useMotionValue(progress);
  const scale = useTransform(progressMotionValue, [0, 100], [1, 1.2]);

  useEffect(() => {
    progressMotionValue.set(progress);
  }, [progress, progressMotionValue]);

  const isActive = progress >= 100;
  return (
    <Link className="relative" href={""}>
      <motion.div
        style={{
          [vertical ? "marginTop" : "marginLeft"]: offset + "px",
          scale,
        }}
        className={cn(
          "relative w-[60px] h-[55px] p-4 text-white font-bold md:text-xl text-center z-10 transition-all cursor-pointer",
          !active && "opacity-70"
        )}
        transition={{ ease: "easeInOut", duration: 0.29 }}
      >
        {value}
        <AnimatedTrackItemBg
          key={progress}
          progress={progress}
          active={isActive}
        />
      </motion.div>
      {progressBar && (
        <ProgressBar key={progress} vertical={vertical} progress={progress} />
      )}
    </Link>
  );
}
