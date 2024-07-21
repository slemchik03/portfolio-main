import { ComponentProps, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "../GradientBg";
import GridGlobe from "../GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../../MagicButton";
import Image from "next/image";
import TechStack from "./TechStack";
import { GridItemElement, techStack } from "@/data";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
interface BentoGridItemProps extends ComponentProps<typeof motion.div> {
  gridElement: GridItemElement;
}
export const BentoGridItem = ({
  gridElement,
  ...props
}: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "vadim.savin.work@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <motion.div
      {...props}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl  shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        gridElement.className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${gridElement.id === 6 && "flex justify-center"} h-full`}
      >
        <div className="w-full h-full absolute">
          {gridElement.img && (
            <Image
              src={gridElement.img}
              alt={gridElement.img}
              fill
              className={cn(
                gridElement.imgClassName,
                "object-cover object-center"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            gridElement.id === 5 && "w-full opacity-80"
          } `}
        >
          {gridElement.spareImg && (
            <Image
              src={gridElement.spareImg}
              alt={gridElement.spareImg}
              fill
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {gridElement.id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            gridElement.titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {gridElement.description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {gridElement.title}
          </div>

          {gridElement.id === 2 && <GridGlobe />}

          {gridElement.id === 3 && <TechStack list={techStack} />}
          {gridElement.id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
