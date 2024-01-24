import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

const getAxiosDefaultConfig = (): CreateAxiosDefaults => ({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
  },
});

export const axiosInstance = axios.create(getAxiosDefaultConfig());
