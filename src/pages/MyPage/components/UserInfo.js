import React, { useState } from 'react';

function UserInfo() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }

    return (
        <section className="bg-neutral-800 p-5 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">사용자 정보</h2>
            <p className="mb-2"><strong>닉네임:</strong> 사용자님</p>
            <p className="mb-4"><strong>이메일:</strong> user@example.com</p>
            <button
                className="inline-block bg-yellow-400 text-neutral-900 px-5 py-2.5 rounded font-bold hover:bg-yellow-300 transition-colors"
                onClick={handleEditClick}
            >
                {isEditing ? '취소' : '비밀번호 수정'}
            </button>

            {isEditing && (
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="current-password" className="block mb-1">현재 비밀번호</label>
                        <input
                            type="password"
                            id="current-password"
                            name="current-password"
                            className="w-full p-2 border border-neutral-600 bg-neutral-700 text-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="new-password" className="block mb-1">새 비밀번호</label>
                        <input
                            type="password"
                            id="new-password"
                            name="new-password"
                            className="w-full p-2 border border-neutral-600 bg-neutral-700 text-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block mb-1">새 비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            className="w-full p-2 border border-neutral-600 bg-neutral-700 text-white rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-block bg-yellow-400 text-neutral-900 px-5 py-2.5 rounded font-bold hover:bg-yellow-300 transition-colors"
                    >
                        변경
                    </button>
                </form>
            )}
        </section>
    );
}

export default UserInfo;
