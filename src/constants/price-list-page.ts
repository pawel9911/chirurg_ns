import { contactItem, specialists } from "./menu-items";
import {
  aestheticSurgery,
  analVaricoseVeins,
  dermatologySurgery,
  diagnostics,
  generalSurgery,
  liposuction,
  lowerLimbVaricoseVeins,
  otherProcedures,
} from "./price-list";

// Todo add type
export const priceListPage = {
  banners: {
    main: {
      title: "Cennik usług",
      description:
        "Ceny mogą się różnić w zależności od indywidualnych potrzeb pacjenta.",
      subDescription: "Płatność wyłącznie gotówką.",
      buttons: {
        primary: {
          href: contactItem.href,
          label: "Zarezerwuj konsultację",
        },
        secondary: {
          href: specialists.href,
          label: specialists.title,
        },
      },
    },
    separator: {
      title: "Informacje dotyczące płatności",
      description:
        "Ceny mogą się różnić w zależności od indywidualnych potrzeb pacjenta.",
      subDescription:
        "Płatność wyłącznie gotówką - brak możliwości wystawienia faktury VAT.",
      buttons: {
        primary: {
          href: contactItem.href,
          label: "Zarezerwuj konsultację",
        },
      },
    },
  },
  priceLists: [
    {
      id: 1,
      subPriceLists: [
        generalSurgery,
        dermatologySurgery,
        aestheticSurgery,
        liposuction,
        lowerLimbVaricoseVeins,
        analVaricoseVeins,
        diagnostics,
        otherProcedures,
      ],
      separator: true,
      additionalList: [
        {
          name: "*W przypadku potwierdzenia raka, konieczne są badania molekularne FISH",
          minPrice: 500,
          maxPrice: 600,
        },
      ],
    },
  ],
};
