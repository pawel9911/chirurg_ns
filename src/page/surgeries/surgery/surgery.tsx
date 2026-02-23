import { Badge } from "@/components/ui/badge";
import {
  aestheticSurgeryItem,
  aestheticSurgerySubItems,
  contactBanner,
  generalSurgerySubItems,
  priceListItem,
} from "@/constants";
import {
  Banner,
  HorizontalScroll,
  SeoMetadata,
  VerticalScroll,
} from "@/shared";
import { Navigate, useLocation, useParams } from "react-router";

export const Surgery = () => {
  const { id } = useParams();
  const location = useLocation();

  const getStaticData = () => {
    switch (id) {
      case "ogolne": {
        return generalSurgerySubItems;
      }
      case "estetyczne": {
        return aestheticSurgerySubItems;
      }
      default: {
        return null;
      }
    }
  };

  const staticData = getStaticData();

  if (!staticData) {
    return <Navigate to="/404" />;
  }

  const data = staticData.find((e) => e.href === location.pathname);

  if (!data) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <SeoMetadata
        title={`${data.title} - Robert Gajewski | Nowy Sącz`}
        description={data.shortDescription}
        canonical={`https://chirurgnowysacz.com.pl${location.pathname}`}
      />
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Banner
            title={data.title}
            description={data.shortDescription}
            buttons={{
              primary: {
                label: aestheticSurgeryItem.title,
                href: aestheticSurgeryItem.href,
              },
              secondary: {
                label: priceListItem.title,
                href: priceListItem.href,
              },
            }}
          />

          <VerticalScroll className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
              <VerticalScroll className="grid items-start gap-6">
                <Badge
                  variant="outline"
                  className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2"
                >
                  {data.title}
                </Badge>
                <p className="tracking-tight text-balance text-sm md:text-base lg:text-lg font-medium mb-4">
                  {data.description}
                </p>
              </VerticalScroll>
              <HorizontalScroll className="flex items-center">
                <img
                  src={data.imgSrc}
                  alt={data.title}
                  width={996}
                  height={1280}
                  className="w-full h-full max-h-56 sm:max-h-60 md:max-h-72 lg:max-h-80 rounded-4xl object-cover"
                />
              </HorizontalScroll>
            </div>
          </VerticalScroll>

          <Banner
            buttons={contactBanner.buttons}
            time={contactBanner.time}
            title={contactBanner.title}
            variant="sm"
          />

          {data.steps ? (
            <VerticalScroll className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
              <div className="grid gap-3 lg:gap-6">
                <VerticalScroll className="grid gap-3 lg:gap-6">
                  <Badge
                    variant="outline"
                    className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2 mx-auto"
                  >
                    Informacja dla pacjenta
                  </Badge>
                  <p className="tracking-tight text-balance text-sm md:text-base lg:text-lg font-medium mb-4 text-center">
                    Najważniejsze informacje na temat zabiegu i tego jak musisz
                    się do niego przygotować.
                  </p>
                </VerticalScroll>

                <div className="grid gap-3 lg:gap-6">
                  {data.steps.map((step, i) => (
                    <VerticalScroll
                      key={`${step.title}-${i}`}
                      className="max-w-2xl mx-auto"
                    >
                      <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 lg:mb-6">
                        <div className="size-8 shrink-0 flex items-center justify-center border-l-2 border-b-2 border-primary rounded-full">
                          <span className="text-base lg:text-lg xl:text-xl font-semibold text-primary">
                            {i + 1}
                          </span>
                        </div>
                        <h2 className="text-lg lg:text-xl xl:text-2xl scroll-m-20 tracking-tight">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-sm xl:text-base">{step.description}</p>
                    </VerticalScroll>
                  ))}
                </div>
              </div>
            </VerticalScroll>
          ) : null}
        </div>
      </div>
    </>
  );
};
