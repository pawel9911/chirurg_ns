import { contactBanner } from "./contact-banner";
import { contactItem, generalSurgeryItem, priceListItem } from "./menu-items";

export const generalSurgeryPage = {
  banners: {
    main: {
      title: generalSurgeryItem.title,
      description: generalSurgeryItem.description,
      subDescription: "",
      buttons: {
        primary: {
          href: contactItem.href,
          label: "Zarezerwuj konsultację",
        },
        secondary: {
          href: priceListItem.href,
          label: priceListItem.title,
        },
      },
    },
    contact: {
      title: contactBanner.title,
      time: contactBanner.time,
      buttons: {
        primary: contactBanner.buttons.primary,
      },
    },
  },

  items: generalSurgeryItem.subitems,
};
