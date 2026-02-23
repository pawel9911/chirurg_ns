import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  aboutUs,
  aboutUsImage,
  contactBanner,
  contactItem,
  generalSurgeryPage,
  robertData,
  specialists,
} from "@/constants";
import {
  Banner,
  HorizontalScroll,
  LinkButton,
  StatisticValue,
  TypingText,
  VerticalScroll,
} from "@/shared";
import { NavLink } from "react-router";

export const Home = () => {
  const { items } = generalSurgeryPage;

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 p-6 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <VerticalScroll className="rounded-l-4xl flex flex-col justify-center gap-4 md:gap-8 order-2 md:order-1">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left scroll-m-20 tracking-tight text-balance">
                {robertData.profile.title}{" "}
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left scroll-m-20 tracking-tight text-balance">
                <TypingText texts={robertData.profile.spec} />
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-center md:text-left scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16">
                {robertData.profile.name}
              </h2>
              <p className="hidden sm:block text-muted-foreground text-center md:text-left">
                {robertData.profile.description}
              </p>
            </div>
            <div className="flex justify-center md:justify-start flex-wrap gap-2 sm:gap-3.5 lg:gap-5">
              <LinkButton
                className="h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg text-primary-foreground!"
                href={contactItem.href}
              >
                {contactItem.title}
              </LinkButton>

              <LinkButton
                className="h-9 md:h-10 lg:h-11 xl:h-12 px-5 md:px-7 lg:px-9 text-sm md:text-base lg:text-lg"
                href={specialists.href}
                variant="outline"
              >
                {specialists.title}
              </LinkButton>
            </div>
          </VerticalScroll>

          <HorizontalScroll className="flex items-center justify-center order-1 md:order-2">
            <div className="bg-primary/10 rounded-4xl w-full">
              <img
                src={robertData.profile.imageSrc}
                alt={robertData.profile.name}
                width={996}
                height={1280}
                className="w-full h-full max-h-80 sm:max-h-96 md:max-h-162.5 object-contain"
              />
            </div>
          </HorizontalScroll>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:gap-10 sm:py-3 md:py-6 md:px-12 lg:px-16">
          {robertData.statistics.map((statistic) => (
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
          <VerticalScroll className="grid gap-6">
            <Badge
              variant="outline"
              className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2 mx-auto"
            >
              Moje specjalizacje
            </Badge>
            <p className="tracking-tight text-balance text-center text-sm md:text-base lg:text-lg font-medium mb-4">
              W swojej praktyce skupiam się na kompleksowej diagnostyce i
              leczeniu schorzeń, które wymagają indywidualnego podejścia,
              doświadczenia oraz nowoczesnych metod terapeutycznych.
            </p>
          </VerticalScroll>

          <VerticalScroll className="flex overflow-x-auto snap-x snap-mandatory py-4 scrollbar-x">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                className="shrink-0 w-40 md:w-48 xl:w-1/6 snap-start"
              >
                <Card className="h-full py-0 gap-3 md:gap-5 mx-2 relative">
                  <CardContent className="px-0">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      width={996}
                      height={1280}
                      className="aspect-square rounded-2xl object-cover max-h-32 sm:max-h-40 lg:max-h-48"
                      loading="lazy"
                    />
                  </CardContent>
                  <div className="absolute flex items-center justify-center w-full h-full bg-black/40 p-2 rounded-2xl ">
                    <CardTitle className="text-accent text-center text-base sm:text-xl leading-none">
                      {item.title}
                    </CardTitle>
                  </div>
                </Card>
              </NavLink>
            ))}
          </VerticalScroll>
        </VerticalScroll>

        <Banner
          buttons={contactBanner.buttons}
          time={contactBanner.time}
          title={contactBanner.title}
          variant="sm"
        />

        <VerticalScroll className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <div className="grid gap-3 sm:gap-6">
            <VerticalScroll className="grid gap-6">
              <Badge
                variant="outline"
                className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2 mx-auto"
              >
                O nas
              </Badge>
              <p className="tracking-tight text-balance text-center text-sm md:text-base lg:text-lg font-medium mb-4">
                {aboutUs.description.main}
              </p>
            </VerticalScroll>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              <VerticalScroll className="col-span-4 sm:col-span-5 xl:col-span-4 rounded-4xl">
                <img
                  src={aboutUsImage.first.src}
                  alt={aboutUsImage.first.alt}
                  width={996}
                  height={1280}
                  className="w-full h-full max-h-64 rounded-4xl object-cover"
                />
              </VerticalScroll>
              <VerticalScroll className="col-span-4 sm:col-span-3 xl:col-span-2 bg-primary rounded-4xl py-6 sm:py-3 px-4 flex items-center">
                <p className="tracking-tight text-balance font-medium text-center text-sm md:text-base text-primary-foreground">
                  {aboutUs.description.sm}
                </p>
              </VerticalScroll>
              <VerticalScroll className="col-span-4 sm:col-span-4 xl:col-span-2">
                <img
                  src={aboutUsImage.second.src}
                  alt={aboutUsImage.second.alt}
                  width={996}
                  height={1280}
                  className="w-full h-full max-h-64 rounded-4xl object-cover"
                />
              </VerticalScroll>
              <VerticalScroll className="hidden sm:block sm:col-span-4 xl:col-span-2">
                <img
                  src={aboutUsImage.third.src}
                  alt={aboutUsImage.third.alt}
                  width={996}
                  height={1280}
                  className="w-full h-full max-h-64 rounded-4xl object-cover"
                />
              </VerticalScroll>

              <VerticalScroll className="col-span-4 sm:col-span-5 xl:col-span-4 sm:order-6 bg-primary/10 rounded-4xl py-6 sm:py-3 px-4 flex items-center">
                <p className="tracking-tight text-balance font-medium text-center text-sm md:text-base text-primary-muted">
                  {aboutUs.description.lg}
                </p>
              </VerticalScroll>
              <VerticalScroll className="hidden sm:block sm:col-span-3 xl:col-span-2 xl:order-6">
                <img
                  src={aboutUsImage.fourth.src}
                  alt={aboutUsImage.fourth.alt}
                  width={996}
                  height={1280}
                  className="w-full h-full max-h-64 rounded-4xl object-cover"
                />
              </VerticalScroll>
            </div>
          </div>
        </VerticalScroll>
      </div>
    </div>
  );
};
