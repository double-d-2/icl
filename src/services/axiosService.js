import axios from "axios";
import { API_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const axiosService = {
  get: ({ url = API_URL, endpoint = "", params = {}, headers = {} }) => {
    const config = {
      params,
      headers,
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
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosService;
