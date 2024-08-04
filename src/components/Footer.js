import "./Footer.css"


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <p>본 프로젝트는 실제 웹 사이트가 아닌 연습용 개인 프로젝트입니다.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Minturtle. All rights reserved.</p>
            </div>
        </footer>
    );


}

export default Footer