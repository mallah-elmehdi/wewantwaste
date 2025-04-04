import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const createAxiosClient = (baseURL) => {
    return axios.create({ baseURL });
};

export const api = createAxiosClient(BASE_URL);