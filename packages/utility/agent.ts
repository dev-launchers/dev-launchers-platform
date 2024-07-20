import {
  NewApplicant,
  Opportunity,
  Project,
  User as UserType,
  Idea,
  Like,
  Save,
} from '@devlaunchers/models';
import { Comment } from '@devlaunchers/models/comment';
import axios, { AxiosError, AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
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
    requests.get<Project[]>('/projects', params ? params : { populate: '*' }),
  get: (slug: string, params?: URLSearchParams) =>
    requests.get<Project>(
      `projects/${slug}`,
      params ? params : { populate: '*' }
    ),
};

const Opportunities = {
  list: (params?: URLSearchParams) =>
    requests.get<Opportunity[]>(
      '/opportunities',
      params ? params : { populate: '*' }
    ),
  get: (slug: string, params?: URLSearchParams) =>
    requests.get(`opportunities/${slug}`, params ? params : { populate: '*' }),
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
};

const Saves = {
  post: (body: {}) => requests.post<Save>('/saves/', body),
};

const Profiles = {
  get: (id: string) => requests.get(`/profiles/${id}`),
  post: (body: {}) => requests.post('/profiles/', body),
  put: (id: string, body: {}) => requests.put(`/profiles/${id}`, body),
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
  Profiles,
  requests,
};

export default agent;
