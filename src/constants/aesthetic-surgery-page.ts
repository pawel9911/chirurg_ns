import { contactBanner } from "./contact-banner";
import { contactItem, aestheticSurgeryItem, priceListItem } from "./menu-items";

export const aestheticSurgeryPage = {
  banners: {
    main: {
      title: aestheticSurgeryItem.title,
      description: aestheticSurgeryItem.description,
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

  items: aestheticSurgeryItem.subitems,
};
