import axios from "axios";

const service = axios.create();
const baseURL = process.env.NEXT_PUBLIC_API_URL + "/";

const get = (path, callback, errorHandler = () => {}) => {
  return service
    .request({
      method: "GET",
      url: baseURL + path,
      responseType: "json",
      // ...config,
      headers: {},
    })
    .then((response) => callback(response.data))
    .catch((error) => {
      if (error.response) {
        errorHandler();
      }
    });
};

const post = (path, payload, callback, errorHandler) => {
  return service
    .request({
      method: "POST",
      url: baseURL + path,
      responseType: "json",
      data: payload,
      headers: {},
    })
    .then((response) => {
      if (response) callback(response.data);
    })
    .catch((error) => {
      errorHandler();
    });
};

export { get, post };
