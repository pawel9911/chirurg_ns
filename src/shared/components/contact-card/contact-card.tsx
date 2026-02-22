import { Facebook, FamousDoctor } from "@/icons";
import { type ContactType, type ProfileType } from "@/types";
import { LinkButton } from "../../components";

interface ContactCardProps {
  profile: ProfileType;
  contact: ContactType;
}

export const ContactCard = ({ profile, contact }: ContactCardProps) => {
  return (
    <div className="h-full p-4 sm:p-6 lg:p-8 flex flex-col items-center gap-2">
      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl scroll-m-20 tracking-tight text-balance leading-10 sm:leading-14 lg:leading-16 text-primary text-center">
        {profile.name}
      </h3>
      <address>
        <div className="flex flex-col items-center mb-3">
          <p className="text-sm sm:text-base font-medium">Adres:</p>
          <p className="text-center">
            <span className="text-sm sm:text-base font-medium">
              {contact.address?.street},{" "}
            </span>
            <span className="text-sm sm:text-base whitespace-nowrap">
              {contact.address?.postcode}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center mb-3">
          <p className="text-sm sm:text-base font-medium">Godziny otwarcia:</p>
          <p className="grid gap-1">
            {contact.openingTime?.map((e) => (
              <time key={e.day} dateTime={e.day}>
                <span className="text-sm sm:text-base">{e.day}: </span>
                <span className="text-sm sm:text-base whitespace-nowrap">
                  {e.hours}
                </span>
              </time>
            ))}
          </p>
        </div>
      </address>
      <div className="flex gap-2">
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
  );
};
