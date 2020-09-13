import axios from "axios";

export const getCountries = async () => {
  try {
    return await axios.get("https://restcountries.eu/rest/v2/all");
  } catch (e) {
    console.error(e);
  }
};

export const filterByRegion = async (region) => {
  try {
    return await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
  } catch (e) {
    console.error(e);
  }
};
