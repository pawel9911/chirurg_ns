import { priceListItem, specialists } from "./menu-items";

// Todo add type
export const contactPage = {
  banners: {
    main: {
      title: "Zapraszamy do kontaktu",
      description:
        "Wizyty i konsultacje rejestrowane są wyłącznie telefonicznie",
      subDescription:
        "Dla komfortu naszych pacjentów zapewniamy bezpłatny parking bezpośrednio przy gabinecie.",
      buttons: {
        primary: {
          href: priceListItem.href,
          label: priceListItem.title,
        },
        secondary: {
          href: specialists.href,
          label: specialists.title,
        },
      },
    },
  },
  form: {
    title: "Zadaj pytanie specjaliście",
    description:
      "Formularz kontaktowy służy jedynie do ogólnych zapytań i nie umożliwia umawiania wizyt.",
  },
};
