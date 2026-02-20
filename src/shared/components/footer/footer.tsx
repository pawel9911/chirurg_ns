import { Separator } from "@/components/ui/separator";
import {
  aestheticSurgeryItem,
  contactBanner,
  contactItem,
  generalSurgeryItem,
  priceListItem,
  robertData,
  specialists,
} from "@/constants";
import { Facebook, FamousDoctor } from "@/icons";
import { LinkButton } from "../link-button";
import { Logo } from "../logo";
import { FooterList } from "./footer-list";
import { Clock, MapPinHouse, Phone, SquareParking } from "lucide-react";

export const Footer = () => {
  const { contact } = robertData;

  return (
    <footer>
      <div className="container px-0 sm:px-4">
        <div className="flex flex-col items-center justify-center mt-6 sm:mb-2 px-6 md:px-12 lg:px-16 bg-primary rounded-tr-4xl rounded-tl-4xl sm:rounded-4xl">
          <div className="w-full grid gap-4 lg:gap-2 pt-6 md:py-8 lg:py-12">
            <Logo size="regular" color="light" className="mx-auto lg:mx-0" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-2 gap-2 lg:gap-4">
              <div className="grid grid-rows-[1fr_auto] gap-4 lg:gap-0 lg:ml-4 col-span-2 sm:col-span-1">
                <div>
                  <FooterList
                    item={specialists}
                    className="text-center sm:text-left"
                  />
                  <FooterList
                    item={priceListItem}
                    className="text-center sm:text-left"
                  />
                  <FooterList
                    item={contactItem}
                    className="text-center sm:text-left"
                  />
                  <div className="text-primary-foreground space-y-3">
                    <div className="grid gap-1">
                      <div className="flex gap-2">
                        <Clock />
                        <p className="text-sm sm:text-base font-medium">
                          {contactBanner.time.title}:
                        </p>
                      </div>
                      <ul className="grid gap-2">
                        {contactBanner.time.time?.map((e) => (
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
                        href={`tel:${contact.phone}`}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start gap-2">
                  {contact.facebookHref ? (
                    <LinkButton
                      href={contact.facebookHref}
                      variant="outline"
                      size="icon-lg"
                    >
                      <Facebook className="text-blue-700" />
                    </LinkButton>
                  ) : null}
                  <LinkButton
                    href={contact.famousDoctorHref}
                    variant="outline"
                    size="icon-lg"
                  >
                    <FamousDoctor className="text-green-700/85" />
                  </LinkButton>
                </div>
              </div>
              <FooterList
                item={generalSurgeryItem}
                className="sm:order-3 lg:order-2"
              />
              <FooterList
                item={aestheticSurgeryItem}
                className="sm:order-4 lg:order-3"
              />
              <div className="my-4 text-primary-foreground col-span-2 sm:col-span-1 sm:order-2 lg:order-4">
                <address className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPinHouse width={35} height={35} />
                    <p>
                      <span className="text-sm sm:text-base font-medium">
                        {contact.address?.street},
                      </span>
                      <span className="text-sm sm:text-base whitespace-nowrap">
                        {contact.address?.postcode}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <SquareParking width={35} height={35} />
                    <p className="text-sm sm:text-base font-medium">
                      Bezpłatny parking dostępny przy gabinecie.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <div className="flex gap-2">
                      <Clock />
                      <p className="text-sm sm:text-base font-medium">
                        Godziny otwarcia:
                      </p>
                    </div>
                    <ul className="grid gap-2">
                      {contact.openingTime?.map((e) => (
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
                </address>
              </div>
            </div>
          </div>
          <Separator />
          <p className="text-sm lg:text-base text-primary-foreground my-4 text-center">
            © 2025 Robert Gajewski - Chirurgia Ogólna i Onkologiczna
          </p>
        </div>
      </div>
    </footer>
  );
};
