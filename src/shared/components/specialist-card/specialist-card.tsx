import { Badge } from "@/components/ui/badge";
import { type ProfileType } from "@/types";
import { NavLink } from "react-router";

interface SpecialistCardProps extends ProfileType {
  href: string;
}

export const SpecialistCard = ({
  description,
  href,
  imageSrc,
  name,
  tags,
}: SpecialistCardProps) => {
  return (
    <div>
      <NavLink to={href}>
        <div className="flex items-center justify-center">
          <div className="flex w-full justify-center bg-primary/10 rounded-4xl">
            <img
              src={imageSrc}
              alt={name}
              width={996}
              height={1280}
              className="w-full h-full max-h-60 sm:max-h-72 md:max-h-80 xl:max-h-96 object-contain"
            />
          </div>
        </div>
        <div>
          {name ? (
            <h2 className="text-xl md:text-2xl xl:text-3xl scroll-m-20 tracking-tight text-balance font-medium leading-10 md:leading-14 xl:leading-16">
              {name}
            </h2>
          ) : null}
          {description ? (
            <p className="text-sm xl:text-base text-muted-foreground mb-4">
              {description}
            </p>
          ) : null}
          {tags ? (
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Badge key={tag} className="text-[12px] xl:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </NavLink>
    </div>
  );
};
