import { Card } from "@/components/ui/card";
import { contactBanner, contactPage, robertData } from "@/constants";
import { Clock, Phone } from "lucide-react";
import { ContactForm } from "./components";
import {
  Banner,
  ContactCard,
  HorizontalScroll,
  VerticalScroll,
} from "@/shared";

export const Contact = () => {
  const { banners, form } = contactPage;

  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6">
        <Banner
          title={banners.main.title}
          subDescription={banners.main.subDescription}
          description={banners.main.description}
          buttons={banners.main.buttons}
        />
        <VerticalScroll className="w-full bg-accent rounded-4xl">
          <iframe
            className="rounded-4xl h-80 sm:h-96 lg:h-[600]"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.7505750614746!2d20.691228499999998!3d49.62130679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de580e62b882b%3A0xbcb9764209ffba6!2sSpecjalistyczna%20Praktyka%20Lekarska%20Robert%20Gajewski!5e0!3m2!1spl!2spl!4v1764007838914!5m2!1spl!2spl"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </VerticalScroll>
        <VerticalScroll className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 p-8 md:p-12 lg:p-16 bg-accent rounded-4xl">
          <HorizontalScroll custom={true}>
            <Card className="p-0 order-2 lg:order-1 max-w-lg mx-auto w-full">
              <ContactCard
                profile={robertData.profile}
                contact={robertData.contact}
              />
            </Card>
          </HorizontalScroll>
          <HorizontalScroll className="grid grid-rows-[1fr_auto] order-1 lg:order-2">
            <div className="lg:p-8">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center text-primary scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16">
                {contactBanner.time.title}
              </p>
              <div className="my-4">
                <address className="space-y-2 flex flex-col items-center">
                  <div className="flex items-start gap-3">
                    <Clock />
                    <ul className="grid gap-2">
                      {contactBanner.time.time.map((e) => (
                        <li key={e.day}>
                          <time dateTime={e.day}>
                            <span className="text-sm sm:text-base font-medium">
                              {e.day}:{" "}
                            </span>
                            <span className="text-sm sm:text-base whitespace-nowrap">
                              {e.hours}
                            </span>
                          </time>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone />
                    <a
                      className="text-sm sm:text-base"
                      href={`tel:${contactBanner.time.phone}`}
                    >
                      {contactBanner.time.phone}
                    </a>
                  </div>
                </address>
              </div>
            </div>
            <p className="text-balance text-center text-muted-foreground text-[12px] sm:text-sm">
              Uprzejmie informujemy, że godziny przyjęć w gabinecie różnią się
              od godzin pracy rejestracji.
            </p>
          </HorizontalScroll>
        </VerticalScroll>
        {/* Todo unlock after connect */}
        {/* <ContactForm title={form.title} description={form.description} /> */}
      </div>
    </div>
  );
};
