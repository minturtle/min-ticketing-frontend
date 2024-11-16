import React, { useEffect, useState } from 'react';
import userService from '../../../service/userService';

function UserInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [nickname, setNickname] = useState("익명");
    const [email, setEmail] = useState("email@email.com")
    useEffect(() => {
        async function getUserInfo() {
            const userdata = await userService.getUserInfo()

            setEmail(userdata.data.email)
            setNickname(userdata.data.nickname)
        }

        getUserInfo()
    }, [])


    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }

    return (
        <section className="bg-neutral-800 p-5 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">사용자 정보</h2>
            <p className="mb-2"><strong>닉네임:</strong> {nickname}</p>
            <p className="mb-4"><strong>이메일:</strong> {email}</p>

        </section>
    );
}

export default UserInfo;
