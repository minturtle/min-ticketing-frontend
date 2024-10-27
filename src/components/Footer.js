function Footer() {
    return (
        <footer className="bg-neutral-900/80 text-gray-100 py-5 px-5 text-center w-full flex-shrink-0">
            <div className="mb-5">
                <div>
                    <p className="text-sm m-0">
                        본 프로젝트는 실제 웹 사이트가 아닌 연습용 개인 프로젝트입니다.
                    </p>
                </div>
            </div>
            <div className="pt-2.5">
                <p className="text-xs m-0">
                    &copy; {new Date().getFullYear()} Minturtle. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer