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
import * as dotenv from 'dotenv';
//import { useSearchParams } from '/next/navigation';
//const searchParams = useSearchParams();
//import { usePathname, useSearchParams } from 'next/navigation';

//dotenv.config();
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
console.log(axios.defaults.baseURL);
console.log('above url');
console.log(`env ${process.env.NODE_ENV}`);
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

        default:
          console.error(`agents.ts ${error}`);
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

const responseBody = (response: AxiosResponse) =>
  response.data.data ? response.data.data : response.data;

// Axios requests simplified
// the T Class type is optional but provides a better type safety for return type.
const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    /*console.log('requests before');
    console.log(url);
    console.log(params);
    console.log(url + params?.toString());
    console.log('requests after');
    */
    axios.get<T>(url, { params }).then(responseBody),
  /* {
      console.log(responseBody.data);
      console.log('in agents after response above line');
      return responseBody;
    });*/
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
      .then(responseBody)
};

const Applicant = {
<<<<<<< HEAD
  get: () => requests.get<NewApplicant[]>("applicants"),
  post: (data: NewApplicant) => requests.post<NewApplicant>("applicants", data)
=======
  get: () => requests.get<NewApplicant[]>('applicants'),
  post: (data: NewApplicant) => requests.post<NewApplicant>('applicants', data),
>>>>>>> a772656e (fix:front-end to show project and opportunities)
};

const Projects = {
  list: (params?: URLSearchParams) =>
    //  list: async <T>(params?: URLSearchParams) => {
    //console.log('inside Projects in agents');
    //  const searchParams = useSearchParams();
    //  const paramsVal = new URLSearchParams(searchParams);
    //  const inParams = new URLSearchParams(params);
    /*console.log('before');
    const inParams: URLSearchParams = new URLSearchParams(
      '_publicationState=live&populate=opportunities'
      //params ? params : { populate: '*' }
    );
    console.log(params);
    console.log(inParams);
    */

    requests.get<Project[]>(
      '/projects',
      new URLSearchParams(
        '_publicationState=live&populate=opportunities'
        //&&populate=openPositions
        //params ? params : { populate: '*' }
      )
      //: { populate: '*' }
    ),
  //console.log(params ? params : { populate: '*' });
  //  console.log('after');
  /*get: (slug: string, params?: URLSearchParams) =>
    requests.get<Project>(
      `projects/${slug}`,
      params ? params : { populate: '*' }
    ),*/
};
const Opportunities = {
  list: async (params?: URLSearchParams) =>
    requests.get<Opportunity[]>(
      '/opportunities',
      new URLSearchParams('_publicationState=live&populate=projects')
    ),
  /*    requests.get<Opportunity[]>(
      '/opportunities',
      params ? params : { populate: '*' }
    ),
    */
  get: (slug: string, params?: URLSearchParams) =>
    requests.get(
      `opportunities/${slug}`,
      new URLSearchParams('_publicationState=live&populate=projects')
      //params ? params : { populate: '*' }),
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
<<<<<<< HEAD
  get: () => requests.get<UserType>("users")
=======
  get: () => requests.get<UserType>('users'),
>>>>>>> a772656e (fix:front-end to show project and opportunities)
};

const Comments = {
  put: (id: string, body: {}) => requests.put<Comment>(id, body),
<<<<<<< HEAD
  post: (body: Comment) => requests.post<Comment>("comments", body)
};

const Likes = {
  get: (params?: URLSearchParams) => 
    requests.get<Like[]>('/likes/', params),
  put: (id: string, body: {}) => requests.put<Like>(id, body),
  post: (body: {}) => requests.post<Like>('/likes/', body)
=======
  post: (body: Comment) => requests.post<Comment>('comments', body),
};

const Likes = {
  get: (params?: URLSearchParams) => requests.get<Like[]>('/likes/', params),
>>>>>>> a772656e (fix:front-end to show project and opportunities)
};

const Saves = {
  post: (body: {}) => requests.post<Save>('/saves/', body),
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
};

export default agent;
