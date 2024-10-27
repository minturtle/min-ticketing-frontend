
function LoginForm() {
    return (
        <form id="login-form">
            <div className="mb-6">
                <label htmlFor="login-email" className="block mb-2">이메일</label>
                <input
                    type="email"
                    id="login-email"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="login-password" className="block mb-2">비밀번호</label>
                <input
                    type="password"
                    id="login-password"
                    required
                    className="w-full p-2 border border-neutral-600 bg-neutral-800 text-white rounded"
                />
            </div>
            <button type="submit" className="w-full py-3 bg-yellow-400 text-neutral-900 rounded font-bold hover:bg-yellow-300 transition-colors duration-300">
                로그인
            </button>

            <div className="text-center my-4 text-gray-400">또는</div>

            <button type="button" className="w-full py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors duration-300">
                <i className="fab fa-google mr-2"></i> Google로 로그인
            </button>
        </form>
    )
}

export default LoginForm;