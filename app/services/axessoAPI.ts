const X_RAPIDAPI_KEY = process.env.X_RapidAPI_Key || "";
const X_RAPIDAPI_HOST = process.env.X_RapidAPI_Host || "";

export async function searchProduct(
  product: string,
  page: string
): Promise<any> {
  const response = await fetch(
    `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${product}&page=${page}&sortBy=best_match`,
    {
      method: "GET", // eslint-disable-line
      headers: { // eslint-disable-line
        "X-RapidAPI-Key": X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": X_RAPIDAPI_HOST,
      },
    }
  );
  const data = await response.json();
  return data;
}
