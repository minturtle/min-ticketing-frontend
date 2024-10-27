function Header() {
    return (
        <header className="bg-neutral-900/80 fixed w-full top-0 z-[1000] py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-yellow-400 no-underline">
                    MinTicketing
                </a>
                <nav>
                    <ul className="flex list-none p-0">
                        <li className="ml-8">
                            <a href="/login" className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300">
                                로그인/회원가입
                            </a>
                        </li>
                        <li className="ml-8">
                            <a href="/my" className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300">
                                마이페이지
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header