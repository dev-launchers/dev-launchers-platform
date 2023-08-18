import { NewApplicant, Opportunity, Project, User as UserType, Idea, Like, Save } from "@devlaunchers/models";
import { Comment } from "@devlaunchers/models/comment";
import axios, { AxiosError, AxiosResponse } from "axios";

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

const responseBody = (response: AxiosResponse) => response.data.data;

// Axios requests simplified
// the T Class type is optional but provides a better type safety for return type.
const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    axios.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, { data: body }).then(responseBody),
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
    requests.get<Project[]>("/projects", params ? params : {populate: '*'}),
  get: (slug: string, params?: URLSearchParams) => requests.get<Project>(`projects/${slug}`, params ? params : {populate: '*'})
};

const Opportunities = {
  list: (params?: URLSearchParams) =>
    requests.get<Opportunity[]>("/opportunities", params ? params : {populate: '*'}),
  get: (slug: string, params?: URLSearchParams) => requests.get(`opportunities/${slug}`, params ? params : {populate: '*'})
};

const Ideas = {
  get: (params?: URLSearchParams) => 
    requests.get<Idea[]>("idea-cards", params),
  getIdea: (id: string, params?: URLSearchParams) => 
    requests.get<Idea>(`/idea-cards/${id}`, params),
  post: (body: {}) =>
    requests.post<Idea>('/idea-cards/', body),
  put: (id: string, body: {}) => requests.put<Idea>(`/idea-cards/${id}`, body)
};

const User = {
  get: () => requests.get<UserType>("users"),
};

const Comments = {
  put: (id: string, body: {}) => requests.put<Comment>(id, body),
  post: (body: {}) => requests.post<Comment>("comments", body),
};

const Likes = {
  get: (params?: URLSearchParams) => 
    requests.get<Like[]>('/likes/', params)
};

const Saves = {
  post: (body: {}) => requests.post<Save>('/saves/', body)
};

const agent = {
  Opportunities,
  Projects,
  Applicant,
  User,
  Comments,
  Ideas,
  Likes,
  Saves
};

export default agent;
