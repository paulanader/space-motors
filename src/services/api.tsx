import axios from 'axios';

export const Api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL ?? '',
});

export const AddressApi = axios.create({
    baseURL: process.env.REACT_APP_API_CEP_BASE_URL ?? '',
});
