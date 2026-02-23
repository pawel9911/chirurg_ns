import { type SpecialistType } from "@/types";

export const robertData: SpecialistType = {
  profile: {
    title: "Specjalista chirurgi",
    tags: ["Zabiegi ogólne", "Zabiegi estetyczne"],
    links: [
      { title: "Zabiegi ogólne", href: "/zabiegi-ogolne" },
      { title: "Zabiegi estetyczne", href: "/zabiegi-estetyczne" },
    ],
    spec: ["ogólnej", "onkologicznej"],
    name: "lek. med. Robert Gajewski",
    description:
      "Absolwent Śląskiego Uniwersytetu Medycznego. Doświadczenie, precyzja i troska o pacjenta w każdym przypadku.",
    imageSrc: "/robert/robert-gajewski.png",
  },
  biography: {
    text: "Dr. Robert Gajewski to specjalista chirurgii ogólnej z kilkunastoletnim doświadczeniem w zakresie chirurgii ogólnej, naczyniowej i onkologicznej. Posiada swoją prywatną praktykę lekarską w Nowym Sączu oraz pracuje na Oddziale Chirurgii Ogólnej i Onkologicznej w Gorlicach. Lek. med. Robert Gajewski to absolwent Śląskiej Akademii Medycznej. Jest współzałożycielem Oddziału Chirurgii Onkologicznej w Nowym Sączu, założycielem zespołu ds. żywienia dojelitowego i pozajelitowego w Nowym Sączu, a także pionierem w tej dziedzinie. Od wielu lat zajmuje się leczeniem żywieniowym chorych wyniszczonych oraz z zaburzeniami połykania w powiecie nowosądeckim. Jako pierwszy przeprowadził w Nowym Sączu zabieg leczenia oszczędzającego pierś z powodu raka piersi oraz zabiegi implantacji protez piersi u pacjentek onkologicznych. Jako pierwszy wykonywał zabiegi przezskórnej termoablacji zmian nowotworowych wątroby w Nowym Sączu. Jest biegłym sądowym w dziedzinie chirurgii ogólnej i onkologicznej.",
    imageSrc: "/robert/gabinet-4.webp",
  },
  contact: {
    address: {
      street: "Gabriela Narutowicza 10",
      postcode: "33-300 Nowy Sącz",
    },
    openingTime: [
      {
        day: "Poniedziałek",
        hours: "15:00 - 20:00",
      },
      {
        day: "Czwartek - Piątek",
        hours: "8:00 - 14:00",
      },
    ],
    phone: "+48 692 938 296",
    famousDoctorHref:
      "https://www.znanylekarz.pl/robert-gajewski/chirurg-onkolog-proktolog/nowy-sacz",
  },
  statistics: [
    {
      id: 1,
      title: "Lat praktyki",
      value: 25,
      postfix: "+",
    },
    {
      id: 2,
      title: "Zaangażowania",
      value: 100,
      postfix: "%",
    },
    {
      id: 3,
      title: "Zadowolonych pacjentów",
      value: 1000,
      postfix: "+",
    },
    {
      id: 4,
      title: "Przeprowadzonych operacji",
      value: 6000,
      postfix: "+",
    },
  ],
  timeline: {
    image: "/robert/gabinet-2.webp",
    item: [
      {
        title: "Śląski Uniwersytet Medyczny w Katowicach",
        icon: "School",
        year: 2000,
      },
      {
        title:
          "Oddział Chirurgii Onkologicznej - Centrum Onkologii w Nowym Sączu",
        icon: "Hospital",
        year: 2003,
      },
      {
        title: "Założenie zespołu ds. żywienia",
        icon: "Work",
        year: 2005,
      },
      {
        title: "Gabinet Chirurgii Ogólnej i Onkologicznej",
        icon: "Hospital",
        year: 2005,
      },
      {
        title: `Założenie Fundacji na rzecz chorych onkologicznych „Nasza Nadzieja"`,
        icon: "Work",
        year: 2008,
      },
      {
        title: "Oddział Chirurgii Ogólnej i Onkologicznej Gorlice",
        icon: "Hospital",
        year: 2024,
      },
    ],
  },
};
