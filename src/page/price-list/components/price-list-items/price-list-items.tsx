import { Separator } from "@/components/ui/separator";
import { type PriceCardItemType } from "@/types";
import { getPrice } from "../../utils";

interface PriceListItemsProps {
  items: PriceCardItemType[];
}

export const PriceListItems = ({ items }: PriceListItemsProps) => {
  return (
    <ul className="grid gap-2 lg:gap-3">
      {items.map((item, i) => {
        return (
          <li key={i}>
            <div className="grid grid-cols-12">
              <h3 className="text-sm lg:text-base col-span-8">
                {item.name}
                <span className="text-primary text-[12px] lg:text-sm leading-snug font-semibold whitespace-nowrap">
                  {item.highlight ? ` (${item.highlight})` : null}
                </span>
              </h3>
              <div className="col-span-4">
                <p className="text-sm lg:text-base text-right text-primary font-semibold">
                  {getPrice(item)}
                </p>
              </div>
              {item.description ? (
                <p className="text-muted-foreground line-clamp-2 text-[12px] lg:text-sm leading-snug col-span-12">
                  {item.description}
                </p>
              ) : null}
            </div>
            {items.length - 1 === i ? null : <Separator />}
          </li>
        );
      })}
    </ul>
  );
};
