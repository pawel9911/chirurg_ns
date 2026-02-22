import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type PriceCardType } from "@/types";
import { PriceListItems } from "../price-list-items";

interface PriceCardProps {
  priceCard: PriceCardType;
}

export const PriceCard = ({ priceCard }: PriceCardProps) => {
  return (
    <Card className="gap-3 sm:gap-6 max-w-sm sm:max-w-md md:max-w-none mx-auto w-full h-full">
      <CardHeader>
        <CardTitle className="mx-auto text-xl lg:text-2xl text-primary font-bold">
          {priceCard.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PriceListItems items={priceCard.items} />
      </CardContent>
    </Card>
  );
};
