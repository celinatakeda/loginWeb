import axios from "axios";

export const Api = axios.create({
  baseURL: "https://reqres.in/api/"
});

Api.interceptors.request.use(
  (config) => {

  },
  (error) => {
    return Promise.reject(error);
  }
)