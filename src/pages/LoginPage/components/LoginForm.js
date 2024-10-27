import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../../service/userService';


function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id.replace('login-', '')]: value
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await userService.login(formData.email, formData.password);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            setError(
                error.response?.data?.message ||
                '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="login-form">
            {error && (
                <div className="mb-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 text-red-500 rounded">
                    {error}
                </div>
            )}

            <div className="mb-6">
                <label htmlFor="login-email" className="block mb-2">이메일</label>
                <input
                    type="email"
                    id="login-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="login-password" className="block mb-2">비밀번호</label>
                <input
                    type="password"
                    id="login-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold 
                         hover:bg-yellow-300 transition-colors duration-300 disabled:opacity-50"
                disabled={loading}
            >
                {loading ? '로그인 중...' : '로그인'}
            </button>

            <div className="text-center my-4 text-gray-400">또는</div>

            <button type="button" className="w-full py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors duration-300">
                <i className="fab fa-google mr-2"></i> Google로 로그인
            </button>
        </form>
    );
}

export default LoginForm;