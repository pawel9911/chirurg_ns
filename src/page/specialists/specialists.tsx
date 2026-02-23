import { Badge } from "@/components/ui/badge";
import { agaData, contactBanner, robertData } from "@/constants";
import {
  Banner,
  HorizontalScroll,
  SeoMetadata,
  SpecialistCard,
  VerticalScroll,
} from "@/shared";
import { Link } from "react-router";

export const Specialists = () => {
  const { contact } = robertData;

  return (
    <>
      <SeoMetadata
        title="Specjaliści – Gabinet Chirurgii Ogólnej i Onkologicznej"
        description={`
          Nasz zespół: lek. med. Robert Gajewski – specjalista chirurgii ogólnej i onkologicznej 
          (rak piersi, nowotwory skóry, żylaki, zabiegi estetyczne). 
          Współpracujemy z lek. med. Agnieszką Olchawą – medycyna estetyczna (laseroterapia, osocze bogatopłytkowe, botox). 
          Indywidualne podejście i wysoki standard opieki – ul. ${contact.address?.street}, ${contact.address?.postcode}`}
        canonical="https://chirurgnowysacz.com.pl/specjalista"
      />
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
            <Link to="/specjalista/robert-gajewski">
              <div className="grid lg:grid-cols-2 gap-8">
                <VerticalScroll className="flex flex-col gap-3 sm:gap-5 xl:gap-8">
                  <div>
                    <Badge
                      variant="outline"
                      className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2"
                    >
                      O mnie
                    </Badge>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl xl:text-3xl scroll-m-20 tracking-tight text-balance font-medium leading-10 md:leading-14 xl:leading-16">
                      {robertData.profile.name}
                    </h2>
                    <p className="text-sm xl:text-base text-muted-foreground mb-4">
                      {robertData.profile.description}
                    </p>
                    <div className="flex gap-3">
                      {robertData.profile.tags.map((tag) => (
                        <Badge key={tag} className="text-[12px] xl:text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base xl:text-lg">
                    Jestem specjalistą chirurgii ogólnej i onkologicznej z ponad
                    25-letnim doświadczeniem. Oferuję kompleksową diagnostykę
                    oraz leczenie schorzeń piersi, przewodu pokarmowego, chorób
                    skóry oraz nowotworów tych narządów, żylaków kończyn dolnych
                    oraz żylaków odbytu. Wykonuję również zaawansowane zabiegi
                    chirurgii estetycznej i plastycznej, takie jak korekta
                    powiek, korekta odstających uszu, plastyka powłok brzucha,
                    liposukcja czy leczenie ginekomastii. Profesjonalizm,
                    precyzja i indywidualne podejście gwarantują pacjentom
                    najwyższy standard opieki z mojej strony.
                  </p>
                </VerticalScroll>

                <HorizontalScroll className="flex w-full justify-center items-end bg-primary/10 rounded-4xl">
                  <img
                    src={robertData.profile.imageSrc}
                    alt={robertData.profile.name}
                    width={996}
                    height={1280}
                    className="w-full h-full max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-112.5 xl:max-h-125 object-contain"
                  />
                </HorizontalScroll>
              </div>
            </Link>
          </div>

          <Banner
            buttons={contactBanner.buttons}
            time={contactBanner.time}
            title={contactBanner.title}
            variant="sm"
          />

          <VerticalScroll className="w-full p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
            <VerticalScroll className="grid gap-6">
              <VerticalScroll className="grid gap-6">
                <Badge
                  variant="outline"
                  className="text-base md:text-lg lg:text-xl font-normal px-8 py-1 border-2 mx-auto"
                >
                  Nasi specjaliści
                </Badge>
                <p className="tracking-tight text-balance text-center text-sm md:text-base lg:text-lg font-medium mb-4">
                  W naszym gabinecie znajdziesz również dodatkowe zabiegi
                  wykonywane przez naszych zaprzyjaźnionych specjalistów. Są to
                  lekarze z doświadczeniem, pasją i indywidualnym podejściem do
                  pacjenta.
                </p>
              </VerticalScroll>
              <VerticalScroll className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <SpecialistCard
                  href="/specjalista/agnieszka-olchawa"
                  {...agaData.profile}
                />
              </VerticalScroll>
              <p className="mt-6 lg:mt-14 text-balance text-center text-muted-foreground text-[12px] sm:text-sm">
                Pamiętaj, że nasz cennik nie obejmuje zabiegów wykonywanych
                przez tych specjalistów. Aby uzyskać szczegółowe informacje,
                skontaktuj się z nimi bezpośrednio.
              </p>
            </VerticalScroll>
          </VerticalScroll>
        </div>
      </div>
    </>
  );
};
