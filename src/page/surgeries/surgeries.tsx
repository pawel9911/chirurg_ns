import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aestheticSurgeryPage, generalSurgeryPage } from "@/constants";
import {
  Banner,
  ImageWithSkeleton,
  SeoMetadata,
  VerticalScroll,
} from "@/shared";
import { Link, Navigate, useParams } from "react-router";

export const Surgeries = () => {
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

  const getMetaData = () => {
    switch (id) {
      case "ogolne": {
        return {
          title: `${data.banners.main.title} - Robert Gajewski | Nowy Sącz`,
          description: `
            Kompleksowa chirurgia ogólna i onkologiczna: rak piersi, nowotwory skóry i czerniak, żylaki odbytu (laser + metoda Barona), 
            żylaki kończyn dolnych, Esperal, USG i biopsje, choroby układu pokarmowego, dostępy naczyniowe do chemioterapii i dializ, 
            zakładanie gastrostomii i jejunostomii, leczenie żywieniowe w domu - gabinet w Nowym Sączu.`,
          canonical: "https://chirurgnowysacz.com.pl/zabiegi/ogolne",
        };
      }
      case "estetyczne": {
        return {
          title: `${data.banners.main.title} - Robert Gajewski | Nowy Sącz`,
          description: `
            Chirurgia estetyczna: korekta opadających powiek, korekta odstających uszu, abdominoplastyka (plastyka brzucha), 
            liposukcja ramion z plastyką skóry, lift ust, leczenie ginekomastii. 
            Naturalne efekty, bezpieczeństwo i doświadczenie - gabinet w Nowym Sączu.`,
          canonical: "https://chirurgnowysacz.com.pl/zabiegi/estetyczne",
        };
      }
      default: {
        return {
          title: `${data.banners.main.title} - Robert Gajewski | Nowy Sącz`,
          description: "",
          canonical: "",
        };
      }
    }
  };

  const { title, description, canonical } = getMetaData();

  return (
    <>
      <SeoMetadata
        title={title}
        description={description}
        canonical={canonical}
      />
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
              <VerticalScroll key={`${item.id}-${id}`}>
                <Link
                  to={item.href}
                  className="mx-auto w-full max-w-sm sm:max-w-none"
                >
                  <Card className="h-full gap-3 sm:gap-4.5 lg:gap-6">
                    <CardContent>
                      <ImageWithSkeleton
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-full max-h-40 sm:max-h-44 md:max-h-48 lg:max-h-52 xl:max-h-60 rounded-2xl object-cover"
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
    </>
  );
};
