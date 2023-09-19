import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const createHeader = (_URL: string, options = {}) => {
  let header = {
    Accept: '/',
    Authorization: 'Bearer ' + sessionStorage.getItem('accessToken'),
  };
  options = { ...options, headers: header };
  return { URL: _URL, options: options };
};

const POST = (_URL: string, data = {}, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.post(URL, data, options);
};

const GET = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};

const PATCH = (_URL: string, data: any = null, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.patch(URL, data, options);
};
const DELETE = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.delete(URL, options);
};

export { POST, GET, PATCH, DELETE };
