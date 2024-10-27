// services/authService.js
import { publicAxios, authAxios } from '../utils/axiosConfig';

export default {
    login: async (email, password) => {
        try {
            const response = await publicAxios.post('/api/user/login', {
                email,
                password
            });

            const token = response.headers['authorization'];
            if (token) {
                localStorage.setItem('token', token);
            }

            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    getToken: () => {
        return localStorage.getItem('token');
    }
};