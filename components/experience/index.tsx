import { workExperience } from "@/data";
import useContentProgress from "@/lib/hooks/useContentProgress";
import { useRef } from "react";
import ProgressBar from "./progress-bar";
import ExperienceList from "./experience-list";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress } = useContentProgress({ containerRef });
  const percentPerElement = 100 / workExperience.length;
  const activeElementProgress =
    progress / percentPerElement - Math.floor(progress / percentPerElement);
  const activeElementIdx = Math.min(
    Math.floor(progress / percentPerElement),
    workExperience.length - 1
  );
  return (
    <div ref={containerRef} className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="min-h-[600vh] pt-20">
        <div className="grid sticky grid-cols-1 top-[40%] gap-20 md:grid-rows-1 md:grid-cols-[3fr_1fr] min-h-full z-10">
          <ExperienceList
            workExperienceList={workExperience}
            activeElementIdx={activeElementIdx}
          />
          <ProgressBar
            stepCount={workExperience.length}
            stepProgress={activeElementProgress * 100}
            currentStep={activeElementIdx + 1}
          />
        </div>
      </div>
    </div>
  );
}
