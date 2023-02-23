import axios, {type AxiosInstance} from 'axios';
import {Config} from '../utils/constants';

const axiosClient = axios.create({
  baseURL: Config.baseURL,
});

export type AxiosInstanceType = AxiosInstance;
export default axiosClient;
