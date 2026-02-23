import { priceListPage, robertData } from "@/constants";
import {
  Banner,
  HorizontalScroll,
  SeoMetadata,
  VerticalScroll,
} from "@/shared";
import { Fragment } from "react";
import { PriceCard, PriceListItems } from "./components";

export const PriceList = () => {
  const { banners, priceLists } = priceListPage;
  const { contact } = robertData;

  return (
    <>
      <SeoMetadata
        title="Cennik - lek. Robert Gajewski"
        description={`Aktualny cennik konsultacji i zabiegów chirurgicznych. Gabinet przy ul. ${contact.address?.street}, ${contact.address?.postcode} - chirurgia ogólna, onkologiczna, dermatochirurgia.`}
        canonical="https://chirurgnowysacz.com.pl/cennik"
      />
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <Banner
            title={banners.main.title}
            description={banners.main.description}
            subDescription={banners.main.subDescription}
            buttons={banners.main.buttons}
          />
          {priceLists.map((priceList) => (
            <Fragment key={priceList.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {priceList.subPriceLists.map((subPriceList, i) => (
                  <VerticalScroll key={i}>
                    <PriceCard priceCard={subPriceList} />
                  </VerticalScroll>
                ))}
                <div className="md:col-span-2 grid md:grid-cols-2">
                  <div className="col-span-1">
                    {priceList.additionalList ? (
                      <HorizontalScroll custom={true}>
                        <PriceListItems items={priceList.additionalList} />
                      </HorizontalScroll>
                    ) : null}
                  </div>
                </div>
              </div>
              {priceList.separator ? (
                <Banner
                  title={banners.separator.title}
                  description={banners.separator.description}
                  subDescription={banners.separator.subDescription}
                  buttons={banners.separator.buttons}
                  variant="sm"
                />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
