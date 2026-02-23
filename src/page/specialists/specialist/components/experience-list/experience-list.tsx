import { VerticalScroll } from "@/shared";
import { type TimelineIconType, type TimelineType } from "@/types";
import { GraduationCap, Stethoscope, Hospital } from "lucide-react";

interface ExperienceListProps {
  timeline: TimelineType[];
}

export const ExperienceList = ({ timeline }: ExperienceListProps) => {
  const getIcon = (icon: TimelineIconType) => {
    switch (icon) {
      case "School": {
        return <GraduationCap className="text-primary-foreground" />;
      }
      case "Work": {
        return <Stethoscope className="text-primary-foreground" />;
      }
      case "Hospital": {
        return <Hospital className="text-primary-foreground" />;
      }
      default: {
        throw new Error(`Unexpected icon ${icon}`);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 xl:gap-8 sm:p-6 xl:p-8">
      {timeline.map((e, i) => (
        <VerticalScroll
          key={`${e.title}-${i}`}
          className="flex items-center gap-4"
        >
          <div className="bg-primary rounded-full p-2.5 lg:p-3">
            {getIcon(e.icon)}
          </div>
          <div>
            <p className="text-muted-foreground text-sm sm:text-base">
              {e.year}
            </p>
            <h3 className="text-base md:text-lg lg:text-xl scroll-m-20 tracking-tight text-balance">
              {e.title}
            </h3>
          </div>
        </VerticalScroll>
      ))}
    </div>
  );
};
