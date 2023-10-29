import axios, { AxiosInstance } from 'axios';
import { API_KEY } from '@/config';

/**
 * Создаем instance
 */
const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${API_KEY}`,
    }
});

export default instance;
