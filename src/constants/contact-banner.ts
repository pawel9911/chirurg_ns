import { contactItem } from "./menu-items";

// Todo add type
export const contactBanner = {
  title: "Wieloletnia praktyka i nowoczesne metody leczenia.",
  time: {
    title: "Rejestracja czynna",
    phone: "+48 692 938 296",
    time: [
      {
        day: "Poniedziałek - Piątek",
        hours: "9:00 - 16:00",
      },
    ],
  },
  buttons: {
    primary: {
      href: contactItem.href,
      label: "Zarezerwuj konsultację",
    },
  },
};
