import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aestheticSurgeryPage, generalSurgeryPage } from "@/constants";
import { Banner, VerticalScroll } from "@/shared";
import { Link, Navigate, useParams } from "react-router";

export const Surgery = () => {
  const { id } = useParams();

  const getStaticData = () => {
    switch (id) {
      case "ogolne": {
        return generalSurgeryPage;
      }
      case "estetyczne": {
        return aestheticSurgeryPage;
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
        <Banner
          title={data.banners.main.title}
          description={data.banners.main.description}
          subDescription={data.banners.main.subDescription}
          buttons={data.banners.main.buttons}
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {data.items.map((item) => (
            <VerticalScroll key={item.id}>
              <Link
                to={item.href}
                className="mx-auto w-full max-w-sm sm:max-w-none"
              >
                <Card className="h-full gap-3 sm:gap-4.5 lg:gap-6">
                  <CardContent>
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      width={996}
                      height={1280}
                      className="w-full h-full max-h-40 sm:max-h-44 md:max-h-48 lg:max-h-52 xl:max-h-60 rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-center text-lg sm:text-xl xl:text-2xl text-primary font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-[12px] xl:text-sm text-center">
                      {item.shortDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </VerticalScroll>
          ))}
        </div>
        <Banner
          buttons={data.banners.contact.buttons}
          time={data.banners.contact.time}
          title={data.banners.contact.title}
          variant="sm"
        />
      </div>
    </div>
  );
};
