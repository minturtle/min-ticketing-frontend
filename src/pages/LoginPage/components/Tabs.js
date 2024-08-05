

function Tabs({ activeTab, onTabChange }) {
    return (
        <div className="tabs">
            <div
                className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => onTabChange('login')}
            >
                로그인
            </div>
            <div
                className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => onTabChange('signup')}
            >
                회원가입
            </div>
        </div>
    )

}

export default Tabs;