export type ProfileType = {
  title: string;
  tags: string[];
  links?: {
    title: string;
    href: string;
  }[];
  spec: string[];
  name: string;
  description: string;
  imageSrc: string;
};

export type BiographyType = {
  text: string;
  imageSrc: string;
};

export type ContactType = {
  address?: {
    street: string;
    postcode: string;
  };
  openingTime?: { day: string; hours: string }[];
  phone: string;
  famousDoctorHref: string;
  facebookHref?: string;
};

export type StatisticType = {
  id: number;
  title: string;
  value: number;
  postfix?: string;
};

export type TimelineIconType = "School" | "Work" | "Hospital";

export type TimelineItemType = {
  year: number;
  title: string;
  icon: TimelineIconType;
};

export type SpecialistType = {
  profile: ProfileType;
  biography: BiographyType;
  contact: ContactType;
  statistics: StatisticType[];
  timeline?: {
    image: string;
    item: TimelineItemType[];
  };
};
