import axios from "axios";
import config from "../config";

export default {
  getCountry: async (id) => {
    try {
      return await axios.get(`${config.BASE_URL}/alpha/${id}`);
    } catch (e) {
      return e;
    }
  },
  getCountries: async () => {
    try {
      return await axios.get(`${config.BASE_URL}/all/`);
    } catch (e) {
      return e;
    }
  },
  getBorderCountries: async (borders) => {
    let query = "?codes=";
    for (let code of borders) {
      query += `${code};`;
    }
    try {
      const { data } = await axios.get(`${config.BASE_URL}/alpha${query}`);
      return data;
    } catch (e) {
      return e;
    }
  },
};
