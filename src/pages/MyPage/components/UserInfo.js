import React, { useState } from 'react';

function UserInfo() {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }

    return (
        <section className="user-info">
            <h2>사용자 정보</h2>
            <p><strong>닉네임:</strong> 사용자님</p>
            <p><strong>이메일:</strong> user@example.com</p>
            <button className="button" onClick={handleEditClick}>
                {isEditing ? '취소' : '비밀번호 수정'}
            </button>
            {isEditing && (
                <form>
                    <div>
                        <label htmlFor="current-password">현재 비밀번호</label>
                        <input type="password" id="current-password" name="current-password" />
                    </div>
                    <div>
                        <label htmlFor="new-password">새 비밀번호</label>
                        <input type="password" id="new-password" name="new-password" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">새 비밀번호 확인</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    <button type="submit" className='button'>변경</button>
                </form>
            )}
        </section>
    );
}

export default UserInfo;
