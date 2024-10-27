function Tabs({ activeTab, onTabChange }) {
    return (
        <div className="flex mb-8">
            <div
                className={`flex-1 text-center py-4 cursor-pointer border-b-2 transition-all duration-300 
                ${activeTab === 'login' ? 'border-yellow-400 text-yellow-400' : 'border-transparent'}`}
                onClick={() => onTabChange('login')}
            >
                로그인
            </div>
            <div
                className={`flex-1 text-center py-4 cursor-pointer border-b-2 transition-all duration-300 
                ${activeTab === 'signup' ? 'border-yellow-400 text-yellow-400' : 'border-transparent'}`}
                onClick={() => onTabChange('signup')}
            >
                회원가입
            </div>
        </div>
    )
}

export default Tabs;