import { cn } from "@/lib/utils";
import { VerticalScroll } from "../vertical-scroll";
import { LinkButton } from "../link-button";

interface BannerProps {
  buttons?: {
    primary?: {
      href: string;
      label: string;
    };
    secondary?: {
      href: string;
      label: string;
    };
  };
  description?: string;
  subDescription?: string;
  time?: {
    title: string;
    time: {
      day: string;
      hours: string;
    }[];
  };
  title?: string;
  variant?: "sm" | "base";
}

export const Banner = ({
  buttons,
  description,
  subDescription,
  time,
  title,
  variant = "base",
}: BannerProps) => {
  const isSmall = variant === "sm";

  return (
    <VerticalScroll
      className={cn(
        "w-full p-6 md:p-10 lg:p-16 bg-accent rounded-4xl",
        isSmall ? "bg-primary" : "bg-accent",
      )}
    >
      <div
        className={cn(
          "flex gap-4 lg:gap-4 items-center",
          isSmall
            ? "flex-col md:flex-row sm:justify-between"
            : "flex-col justify-center",
        )}
      >
        <div>
          {title ? (
            <h1
              className={cn(
                "scroll-m-20 tracking-tight text-balance mb-2 lg:mb-4",
                isSmall
                  ? "text-center md:text-left text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground"
                  : "text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold",
              )}
            >
              {title}
            </h1>
          ) : null}
          {description ? (
            <p
              className={cn(
                "text-sm md:text-base xl:text-lg mb-2 lg:mb-4",
                isSmall
                  ? "text-center md:text-left md:font-medium text-primary-foreground"
                  : "text-center font-semibold text-muted-foreground mx-auto",
                "max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl",
              )}
            >
              {description}
            </p>
          ) : null}
          {subDescription ? (
            <p
              className={cn(
                "text-sm sm:text-base lg:text-lg mb-2 lg:mb-4",
                isSmall
                  ? "text-center md:text-left md:font-medium text-primary-foreground"
                  : "text-center font-bold text-primary mx-auto",
                "max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl",
              )}
            >
              {subDescription}
            </p>
          ) : null}
          {time ? (
            <div className="flex flex-col justify-center items-center sm:flex-row md:items-start md:justify-start gap-2 text-primary-foreground">
              <p className="font-medium">{time.title}</p>
              <p className="grid gap-1">
                {time.time.map((e) => (
                  <time key={e.day} dateTime={e.day}>
                    <span className="text-sm sm:text-base">{e.day}: </span>
                    <span className="text-sm sm:text-base whitespace-nowrap">
                      {e.hours}
                    </span>
                  </time>
                ))}
              </p>
            </div>
          ) : null}
        </div>
        {buttons ? (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3.5 lg:gap-5">
            {buttons.primary ? (
              <LinkButton
                className={cn(
                  "h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg",
                  isSmall ? "" : "text-primary-foreground!",
                )}
                href={buttons.primary.href}
                variant={isSmall ? "outline" : "default"}
              >
                {buttons.primary.label}
              </LinkButton>
            ) : null}
            {buttons.secondary ? (
              <LinkButton
                className="h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg"
                href={buttons.secondary.href}
                variant="outline"
              >
                {buttons.secondary.label}
              </LinkButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </VerticalScroll>
  );
};
