import axios from "axios";
import config from "../config";

export default {
  getCountries: async () => {
    try {
      return await axios.get(`${config.BASE_URL}/all`);
    } catch (e) {
      console.error(e);
    }
  },
};
