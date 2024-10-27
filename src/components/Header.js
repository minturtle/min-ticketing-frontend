// components/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from "../service/userService"

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 토큰 존재 여부로 로그인 상태 확인
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        userService.logout()
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <header className="bg-neutral-900/80 fixed w-full top-0 z-[1000] py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-yellow-400 no-underline">
                    MinTicketing
                </Link>
                <nav>
                    <ul className="flex list-none p-0">
                        {isLoggedIn ? (
                            <>
                                <li className="ml-8">
                                    <Link
                                        to="/cart"
                                        className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300"
                                    >
                                        장바구니
                                    </Link>
                                </li>
                                <li className="ml-8">
                                    <Link
                                        to="/my"
                                        className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300"
                                    >
                                        마이페이지
                                    </Link>
                                </li>
                                <li className="ml-8">
                                    <button
                                        onClick={handleLogout}
                                        className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
                                    >
                                        로그아웃
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="ml-8">
                                <Link
                                    to="/login"
                                    className="text-white font-bold no-underline hover:text-yellow-400 transition-colors duration-300"
                                >
                                    로그인/회원가입
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;