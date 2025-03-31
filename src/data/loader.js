import qs, { stringify } from "qs";
import { getStrapiURL } from "../lib/utils";

const baseUrl = getStrapiURL();

// data fetching function
export async function fetchData(url, authToken) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);
  url.search = qs.stringify({
    populate: {
      logo: {
        fields: ["url"],
      },
      banner: {
        fields: ["url"],
      },
    },
  });

  return await fetchData(url.href);
}
