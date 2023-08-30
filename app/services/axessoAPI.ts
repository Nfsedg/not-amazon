export async function searchProduct(
  product: string,
  page: string
): Promise<any> {
  const response = await fetch(
    `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${product}&page=${page}&sortBy=best_match`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
      },
    }
  );
  const data = await response.json();
  return data;
}
