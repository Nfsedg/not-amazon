import { IconDetails, IconSearch } from "@tabler/icons-react";
import { searchProduct } from "@/app/services/axessoAPI";
import CardProducts from "@/app/components/card-products";

export default async function Products({
  params,
}: {
  params: { search: string };
}) {
  const data = await searchProduct(params.search, "1");

  const itemStacks: Array<any> | null =
    data?.item?.props?.pageProps?.initialData?.searchResult?.itemStacks;
  const itemsResults: Array<any> | null = itemStacks && itemStacks[0]?.items;

  return (
    <div className="flex flex-col w-full items-center gap-4 p-2">
      {itemsResults?.map((product) => {
        return (
          <CardProducts canonicalUrl={canonicalUrl} image={product?.image} name={product?.name} linePrice={product?.priceInfo?.linePrice} />
        );
      })}
    </div>
  );
}
