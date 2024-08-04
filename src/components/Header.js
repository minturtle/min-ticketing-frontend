import "./Header.css"

function Header() {
    return (
        <header>
            <div class="container header-content">
                <a href="/" class="logo">MinTicketing</a>
                <nav>
                    <ul>
                        <li><a href="/login">로그인/회원가입</a></li>
                        <li><a href="#">마이페이지</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header