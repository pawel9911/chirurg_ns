import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { agaData, robertData } from "@/constants";
import { Facebook, FamousDoctor } from "@/icons";
import {
  HorizontalScroll,
  LinkButton,
  StatisticValue,
  TypingText,
  VerticalScroll,
} from "@/shared";
import { Navigate, useParams } from "react-router";
import { ExperienceList } from "./components";
import { cn } from "@/lib/utils";

export const Specialist = () => {
  const { id } = useParams();

  const getStaticData = () => {
    switch (id) {
      case "robert-gajewski": {
        return robertData;
      }
      case "agnieszka-olchawa": {
        return agaData;
      }
      default: {
        return null;
      }
    }
  };

  const data = getStaticData();

  if (!data) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 p-6 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <VerticalScroll className="rounded-l-4xl flex flex-col justify-center gap-4 md:gap-8 order-2 md:order-1">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left scroll-m-20 tracking-tight text-balance">
                {data.profile.title}{" "}
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left scroll-m-20 tracking-tight text-balance">
                <TypingText texts={data.profile.spec} />
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-center md:text-left scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16">
                {data.profile.name}
              </h2>
              <p className="hidden sm:block text-muted-foreground text-center md:text-left">
                {data.profile.description}
              </p>
            </div>

            <div className="flex justify-center md:justify-start flex-wrap gap-2 sm:gap-3.5 lg:gap-5">
              {data.profile.links
                ? data.profile.links.map((link, i) => (
                    <LinkButton
                      key={link.title}
                      className={cn(
                        "h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg",
                        i % 2 === 0 ? "text-primary-foreground!" : "",
                      )}
                      href={link.href}
                      variant={i % 2 === 0 ? "default" : "outline"}
                    >
                      {link.title}
                    </LinkButton>
                  ))
                : data.profile.tags.map((tag) => (
                    <Badge
                      className="h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
            </div>
          </VerticalScroll>

          <HorizontalScroll className="flex items-center justify-center order-1 md:order-2">
            <div className="bg-primary/10 rounded-4xl w-full">
              <img
                src={data.profile.imageSrc}
                alt={data.profile.name}
                width={996}
                height={1280}
                className="w-full h-full max-h-80 sm:max-h-96 md:max-h-[650] object-contain"
              />
            </div>
          </HorizontalScroll>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:gap-10 sm:py-3 md:py-6 md:px-12 lg:px-16">
          {data.statistics.map((statistic) => (
            <Card key={statistic.id} className="border-0 shadow-none">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
                  <StatisticValue value={statistic.value} />
                  {statistic.postfix}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base tracking-tight text-balance">
                  {statistic.title}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <VerticalScroll className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <VerticalScroll className="grid auto-cols-auto gap-4">
              <div>
                <Badge
                  variant="outline"
                  className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2"
                >
                  Biogrrafia
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base xl:text-lg">
                {data.biography.text}
              </p>
            </VerticalScroll>
            <HorizontalScroll>
              <img
                src={data.biography.imageSrc}
                alt={data.profile.name}
                width={996}
                height={1280}
                className="mx-auto w-auto h-full max-h-96 lg:max-h-[450] xl:max-h-[500] rounded-4xl object-cover"
                loading="lazy"
              />
            </HorizontalScroll>
          </div>
        </VerticalScroll>

        {data.timeline ? (
          <VerticalScroll className="w-full p-8 md:p-12 xl:p-16 bg-accent rounded-4xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-2 lg:gap-8">
              <HorizontalScroll
                custom={true}
                className="order-2 lg:order-1 flex items-center"
              >
                <img
                  src={data.timeline.image}
                  alt={data.profile.name}
                  width={996}
                  height={1280}
                  className="mx-auto w-full h-full max-w-md md:max-w-lg lg:max-w-none max-h-80 md:max-h-96 xl:max-h-[500] rounded-4xl object-cover"
                  loading="lazy"
                />
              </HorizontalScroll>
              <HorizontalScroll className="order-1 lg:order-2">
                <ExperienceList timeline={data.timeline.item} />
              </HorizontalScroll>
            </div>
          </VerticalScroll>
        ) : null}

        <VerticalScroll className="w-full grid lg:grid-cols-2 lg:gap-8 bg-accent rounded-4xl">
          <iframe
            className="rounded-4xl order-2 lg:order-1 h-72 md:h-80 lg:h-96"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.7505750614746!2d20.691228499999998!3d49.62130679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de580e62b882b%3A0xbcb9764209ffba6!2sSpecjalistyczna%20Praktyka%20Lekarska%20Robert%20Gajewski!5e0!3m2!1spl!2spl!4v1764007838914!5m2!1spl!2spl"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <VerticalScroll className="h-full p-6 lg:p-8 flex flex-col justify-center items-center gap-2 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16 text-primary text-center">
              {data.profile.name}
            </h3>
            <address>
              {data.contact.openingTime ? (
                <div className="flex flex-col items-center mb-3">
                  <p className="text-sm sm:text-base font-medium">
                    Godziny otwarcia:
                  </p>
                  <p className="grid gap-1">
                    {data.contact.openingTime?.map((e) => (
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

              <div className="flex flex-col items-center mb-3">
                <p className="text-sm sm:text-base font-medium">Telefon:</p>
                <a
                  className="text-sm sm:text-base"
                  href={`tel:${data.contact.phone}`}
                >
                  {data.contact.phone}
                </a>
              </div>
            </address>
            <div className="flex gap-2">
              {data.contact.facebookHref ? (
                <LinkButton
                  href={data.contact.facebookHref}
                  variant="outline"
                  size="icon-lg"
                >
                  <Facebook className="text-blue-700" />
                </LinkButton>
              ) : null}
              <LinkButton
                href={data.contact.famousDoctorHref}
                variant="outline"
                size="icon-lg"
              >
                <FamousDoctor className="text-green-700/85" />
              </LinkButton>
            </div>
          </VerticalScroll>
        </VerticalScroll>
      </div>
    </div>
  );
};
