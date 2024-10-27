import Header from "../../components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import React, { useState } from 'react';

import Tabs from "./components/Tabs";

function LoginPage() {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Header />
            <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-[400px] mx-auto mt-[100px]">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                {activeTab === 'login' && <LoginForm />}
                {activeTab === 'signup' && <SignupForm />}
            </div>
        </>
    );
}

export default LoginPage