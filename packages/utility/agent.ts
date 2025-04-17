import {
  NewApplicant,
  Opportunity,
  Project,
  User as UserType,
  Idea,
  Like,
  Save,
  Notification,
} from '@devlaunchers/models';
import { Comment } from '@devlaunchers/models/comment';
import axios, { AxiosError, AxiosResponse } from 'axios';

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
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  async (response) => {
    if (process.env.NODE_ENV === 'development') {
      // execute codes for dev environment
    }
    return response;
  },
  (error: AxiosError) => {
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
          // Handle Not Found Errors
          break;
        case 500:
          // Handle Server Errors
          break;

        default:
          console.error(`agents.ts ${error}`);
      }
    }
    return Promise.reject(error.response);
  }
);

function createFormData(item: any) {
  let formData = new FormData();
  for (const key in item) {
    formData.append(key, item[key]);
  }
  return formData;
}

const responseBody = (response: AxiosResponse) =>
  response.data.data ? response.data.data : response.data;

const errorBody = (error: AxiosError) => (error ? error : null);

const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    axios.get<T>(url, { params }).then(responseBody).catch(errorBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, { data: body }).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: {}) =>
    axios.patch<T>(url, body).then(responseBody),
  delete: <T>(url: string, body?: {}) =>
    axios.delete<T>(url, { data: body }).then(responseBody),
  postForm: (url: string, data: FormData) =>
    axios
      .post<T>(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(responseBody),
  putForm: (url: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(responseBody),
};

const Applicant = {
  get: () => requests.get<NewApplicant[]>('applicants'),
  post: (data: NewApplicant) => requests.post<NewApplicant>('applicants', data),
};

const Projects = {
  list: (params?: URLSearchParams) =>
    requests.get<Project[]>(
      '/projects',
      new URLSearchParams('_publicationState=live&populate=opportunities')
    ),
  get: (slug: string, params?: URLSearchParams) => {
    return requests.get<Project>(
      `projects/${slug}`,
      new URLSearchParams('_publicationState=live&populate=*')
    );
  },
};
const Opportunities = {
  list: async (params?: URLSearchParams) =>
    requests.get<Opportunity[]>(
      '/opportunities',
      new URLSearchParams(
        '_publicationState=live&populate=projects&populate=interests'
      )
    ),
  get: (slug: string, params?: URLSearchParams) =>
    requests.get(
      `opportunities/${slug}`,
      new URLSearchParams(
        '_publicationState=live&populate=projects&populate=interests'
      )
    ),
  getById: (
    oppId: string //, params?: URLSearchParams
  ) =>
    requests.get<Opportunity[]>(
      `opportunities/${oppId}`,
      new URLSearchParams('_publicationState=live&populate=projects')
    ),
};

const Ideas = {
  get: (params?: URLSearchParams) => requests.get<Idea[]>('idea-cards', params),
  getIdea: (id: string, params?: URLSearchParams) =>
    requests.get<Idea>(`/idea-cards/${id}`, params),
  post: (body: {}) => requests.post<Idea>('/idea-cards/', body),
  put: (id: string, body: {}) => requests.put<Idea>(`/idea-cards/${id}`, body),
};

const User = {
  get: () => requests.get<UserType>('users'),
};

const Comments = {
  put: (id: string, body: {}) => requests.put<Comment>(id, body),
  post: (body: Comment) => requests.post<Comment>('comments', body),
};

const Likes = {
  get: (params?: URLSearchParams) => requests.get<Like[]>('/likes/', params),
  put: (id: string, body: {}) => requests.put<Like>(id, body),
  post: (body: {}) => requests.post<Like>('/likes/', body),
  delete: (id: number) => {
    requests.delete<Like>('/likes/' + id.toString());
  },
};

const Notifications = {
  get: () => requests.get<Notification[]>('/notifications?populate=deep'),
};

const Saves = {
  post: (body: {}) => requests.post<Save>('/saves/', body),
};

const Profiles = {
  get: (id: string) => requests.get(`/profiles/${id}`),
  post: (body: {}) => requests.post('/profiles/', body),
  put: (id: string, body: {}) => requests.put(`/profiles/${id}`, body),
};

const GoogledriveFile = {
  post: async (data: FormData) => {
    return await requests.postForm<FormData>(`/googledrive/`, data);
  },
  delete: async (id: string) => {
    return await requests.delete('/googledrive/' + id);
  },
};

const userProjects = {
  get: (id: string) =>
    requests.get<Project[]>(
      `/users/${id}?populate=projects&populate=opportunities`
    ),
};

const agent = {
  Opportunities,
  Projects,
  Applicant,
  User,
  Comments,
  Ideas,
  Likes,
  Saves,
  Notifications,
  Profiles,
  requests,
  GoogledriveFile,
  userProjects,
};

export default agent;
