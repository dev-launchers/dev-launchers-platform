import axios, { AxiosError, AxiosResponse } from "axios";
import { Opportunity } from "@devlaunchers/models";
import { Project } from "@devlaunchers/models";
import { NewApplicant } from "@devlaunchers/models";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// In case of cross-site Access-Control requests should be made using credentials
//axios.defaults.withCredentials = true;

/**
 * Configure the request headers with Authorization Header using the authentication token
 */
// axios.interceptors.request.use(config => {
//     const token = GetToken()
//     if (token && config.headers) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === "development") {
      // execute codes for dev environment
    }

    // Parses the Pagination header from the response

    // const pagination = response.headers["pagination"];
    // if (pagination) {
    //     HANDLE PAGINATION RESULTS
    //     return response;
    // }

    return response;
  },
  (error: AxiosError) => {
    // Handle the exceptions sent from server
    if (error.response) {
      const { data, status } = error.response;

      switch (status) {
        case 400:
          // Handle Clients Errors
          break;

        case 401:
          // Handle Authentication Errors
          break;

        case 403:
          // Handle Authorization Errors
          break;

        case 404:
          // Handle Not Found Errors, Generally navigate to a Not Found page.
          break;

        case 500:
          // Handle Server Errors, Generally navigate to a Server Error page.
          break;
      }
    }
    return Promise.reject(error.response);
  }
);

/**
 * Create a simple data form.
 * TODO: add flattening complex objects.
 */
function createFormData(item: any) {
  let formData = new FormData();
  for (const key in item) {
    formData.append(key, item[key]);
  }
  return formData;
}

const responseBody = (response: AxiosResponse) => response.data;

//Axios requests simplified
// the T Class type is optional but provides a better type safety for return type.
const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    axios.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: {}) =>
    axios.patch<T>(url, body).then(responseBody),
  delete: <T>(url: string, body?: {}) =>
    axios.delete<T>(url, body).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
};

const Applicant = {
  get: () => requests.get<NewApplicant[]>("applicants"),
  post: (data: NewApplicant) => requests.post<NewApplicant>("applicants", data),
};

const Projects = {
  list: (params?: URLSearchParams) =>
    requests.get<Project[]>("projects", params),
};

const Opportunities = {
  list: () => requests.get<Opportunity[]>("opportunities"),
};

const Ideas = {};

const agent = {
  Opportunities,
  Projects,
  Applicant,
};

export default agent;
