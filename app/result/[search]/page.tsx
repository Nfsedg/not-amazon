import { IconDetails, IconSearch } from "@tabler/icons-react";
import { searchProduct } from "@/app/services/axessoAPI";

export default async function CardProducts({
  params,
}: {
  params: { search: string };
}) {
  const data = await searchProduct(params.search, "1");

  const itemStacks: Array<any> | null =
    data?.item?.props?.pageProps?.initialData?.searchResult?.itemStacks;
  const itemsResults: Array<any> | null = itemStacks && itemStacks[0]?.items;

  return (
    <div className="grid w-full items-center grid-cols-3 gap-4 p-2">
      {itemsResults?.map((product) => {
        return (
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={product?.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product?.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product?.priceInfo?.linePrice}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <IconDetails />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
