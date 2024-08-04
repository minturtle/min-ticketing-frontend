
function LoginForm() {
    return (
        <form id="login-form">
            <div className="form-group">
                <label htmlFor="login-email">이메일</label>
                <input type="email" id="login-email" required />
            </div>
            <div className="form-group">
                <label htmlFor="login-password">비밀번호</label>
                <input type="password" id="login-password" required />
            </div>
            <button type="submit" className="btn">로그인</button>

            <div className="or-divider">또는</div>

            <button type="button" className="btn google-btn">
                <i className="fab fa-google"></i> Google로 로그인
            </button>
        </form>
    )
}

export default LoginForm;