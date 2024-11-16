// utils/axiosConfig.js
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export const authAxios = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

export const publicAxios = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

// 인증이 필요한 요청에만 토큰을 포함시키는 인터셉터
authAxios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 인증 관련 응답 처리
authAxios.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);