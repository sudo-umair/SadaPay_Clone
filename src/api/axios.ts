import axios, {type AxiosInstance} from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://192.168.100.3:4000',
});

export type AxiosInstanceType = AxiosInstance;
export default axiosClient;
