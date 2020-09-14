import axios from "axios";
import config from "../config";

export default {
  getCountry: async (id) => {
    return await axios.get(`${config.BASE_URL}/alpha/${id}`);
  },
  getCountries: async () => {
    return await axios.get(`${config.BASE_URL}/all`);
  },
  getBorderCountries: async (borders) => {
    let query = "?codes=";
    for (let code of borders) {
      query += `${code};`;
    }
    const { data } = await axios.get(`${config.BASE_URL}/alpha${query}`);
    return data;
  },
};
