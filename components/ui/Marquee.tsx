import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

type MarqueeDirection = "top" | "down" | "right" | "left";

interface MarqueeProps {
  direction: MarqueeDirection;
  speed: number;
  children: React.ReactNode;
  gap: string;
  containerClassName?: string;
  wrapperClassName?: string;
}

const directionMapping: Record<
  Exclude<MarqueeDirection, "down" | "right">,
  { x: string; y: string }
> = {
  top: {
    x: "0%",
    y: "-100%",
  },

  left: {
    x: "-100%",
    y: "0%",
  },
};

export default function Marquee({
  children,
  speed,
  gap,
  direction,
  containerClassName,
  wrapperClassName,
}: MarqueeProps) {
  const isVertical = direction === "top" || direction === "down";
  const verticalGap = isVertical ? gap : "0px";
  const horizontalGap = !isVertical ? gap : "0px";
  const leftDirection = isVertical ? "0px" : directionMapping["left"].x;
  const topDirection = isVertical ? directionMapping["top"].y : "0px";

  const marqueeStyles = {
    "--animation-duration": `${speed}ms`,
    "--animation-direction-x": `calc(${leftDirection} - ${horizontalGap})`,
    "--animation-direction-y": `calc(${topDirection} - ${verticalGap})`,
    animationDirection:
      direction === "down" || direction === "right" ? "reverse" : "normal",
    gap,
  } as CSSProperties;

  return (
    <div
      className={cn(`flex`, wrapperClassName, isVertical && "flex-col")}
      style={{ gap }}
    >
      <div
        className={cn("animate-marquee", containerClassName)}
        style={marqueeStyles}
      >
        {children}
      </div>
      <div
        className={cn("animate-marquee", containerClassName)}
        style={marqueeStyles}
      >
        {children}
      </div>
    </div>
  );
}
