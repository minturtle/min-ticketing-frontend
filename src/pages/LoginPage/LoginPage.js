import Header from "../../components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import React, { useState } from 'react';

import Tabs from "./components/Tabs";
import "./LoginPage.css";


function LoginPage() {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Header />
            <div className="loginContainer">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                {activeTab === 'login' && <LoginForm />}
                {activeTab === 'signup' && <SignupForm />}
            </div>
        </>
    );

}

export default LoginPage