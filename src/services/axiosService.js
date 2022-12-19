import axios from "axios";
import { API_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const axiosService = {
  get: ({ url = API_URL, endpoint = "", params = {} }) => {
    const config = {
      params,
      url: `${url}/${endpoint}`,
    };
    return axiosInstance(config);
  },
  /*
    @TODO: should be added other methods
  */
};

axiosInstance.interceptors.response.use(
  (response) => {
    /*
      some global success handling can be added
    */
    return response;
  },
  async (error) => {
    /*
      some global error handlin can be added
    */
    return Promise.reject(error);
  }
);

export default axiosService;
