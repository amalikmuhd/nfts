import axios from "axios";
import { toast } from "react-toastify";

const APIs = axios.create({
  baseURL: "https://api.blockspan.com/v1/exchanges",
  headers: {
    Accept: "application/json",
    "x-api-key": "eNrRZzykqY4q7wiAr2mCpF6eFKBOiY4y",
  },
});

APIs.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    return config;
  } else {
    toast("No internet connection", {
      toastId: "network error",
    });
  }
});

APIs.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err.response.data?.message;
  }
);

export default APIs;
